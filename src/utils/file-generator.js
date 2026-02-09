const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const {
  jsxTemplate,
  jsxTemplateWithoutStyles,
  tsxTemplate,
  tsxTemplateWithoutStyles,
  jsxClassTemplate,
  jsxClassTemplateWithoutStyles,
  tsxClassTemplate,
  tsxClassTemplateWithoutStyles,
  jsxHookTemplate,
  tsxHookTemplate,
  jsxContextTemplate,
  tsxContextTemplate,
  styledComponentTemplate,
  styledComponentTsxTemplate,
  memoComponentTemplate,
  memoComponentTsxTemplate,
  hocTemplate,
  hocTsxTemplate,
  formComponentTemplate,
  formComponentTsxTemplate,
  testFileTemplate,
  testFileTsxTemplate,
  apiServiceTemplate,
  apiServiceTsxTemplate,
  cssTemplate,
  cssModuleTemplate
} = require('../templates/component-templates');

/**
 * Generate a React component based on the provided options
 * @param {Object} options - Configuration options
 * @param {string} options.name - Component name
 * @param {string} options.type - Component type (jsx or tsx)
 * @param {string} options.templateType - Template type (functional, class, hook, context)
 * @param {string} options.path - Output path
 * @param {boolean} options.withStyles - Include CSS file
 */
function generateComponent(options) {
  const { name, type, templateType = 'functional', path: outputPath, withStyles } = options;

  // Validate based on template type
  if (templateType === 'hook') {
    // Hook validation: should start with 'use'
    if (!name.startsWith('use')) {
      throw new Error('Hook name must start with "use" (e.g., useMyHook)');
    }
    if (!/^use[A-Z][a-zA-Z0-9]*$/.test(name)) {
      throw new Error('Hook name must follow camelCase after "use" (e.g., useMyHook)');
    }
  } else if (templateType === 'hoc') {
    // HOC validation: typically start with 'with'
    if (name.startsWith('with') && !/^with[A-Z][a-zA-Z0-9]*$/.test(name)) {
      throw new Error('HOC name should follow pattern like "withAuth", "withRouter"');
    }
  } else if (templateType === 'api' || templateType === 'test') {
    // Service/Test validation: more flexible
    if (!name || !/^[A-Za-z][a-zA-Z0-9]*$/.test(name)) {
      throw new Error('Name must start with a letter and contain only alphanumeric characters');
    }
  } else {
    // Component validation: must start with capital letter
    if (!name || !/^[A-Z][a-zA-Z0-9]*$/.test(name)) {
      throw new Error('Component name must start with a capital letter and contain only alphanumeric characters');
    }
  }

  // Create component directory
  const componentDir = path.join(outputPath, name);
  
  try {
    // Check if directory already exists
    if (fs.existsSync(componentDir)) {
      throw new Error(`"${name}" already exists at ${componentDir}`);
    }

    // Create directory
    fs.ensureDirSync(componentDir);
    console.log(chalk.gray(`📁 Created directory: ${componentDir}`));

    // Generate component file
    const fileExtension = type === 'tsx' ? 'tsx' : 'jsx';
    const componentFilePath = path.join(componentDir, `${name}.${fileExtension}`);
    
    let componentContent = getTemplateContent(name, type, templateType, withStyles);

    fs.writeFileSync(componentFilePath, componentContent, 'utf8');
    
    const typeLabel = getTypeLabel(templateType);
    console.log(chalk.gray(`📄 Created ${typeLabel}: ${name}.${fileExtension}`));

    // Generate styles file if requested (not for hooks, contexts, HOCs, tests, or APIs)
    const noStylesTemplates = ['hook', 'context', 'hoc', 'test', 'api'];
    const needsStyles = withStyles && !noStylesTemplates.includes(templateType);
    
    if (needsStyles && templateType !== 'styled') {
      const isCssModule = type === 'tsx';
      const styleFileName = isCssModule ? `${name}.module.css` : `${name}.css`;
      const styleFilePath = path.join(componentDir, styleFileName);
      const styleContent = isCssModule ? cssModuleTemplate(name) : cssTemplate(name);
      
      fs.writeFileSync(styleFilePath, styleContent, 'utf8');
      console.log(chalk.gray(`🎨 Created styles file: ${styleFileName}`));
    }

    // Generate test file if it's a test template
    if (templateType === 'test') {
      const testFileName = `${name}.test.${type === 'tsx' ? 'tsx' : 'js'}`;
      const testFilePath = path.join(componentDir, testFileName);
      const testContent = type === 'tsx' ? testFileTsxTemplate(name) : testFileTemplate(name);
      
      fs.writeFileSync(testFilePath, testContent, 'utf8');
      console.log(chalk.gray(`🧪 Created test file: ${testFileName}`));
    }

    // Generate index file for easy imports (not for tests or APIs)
    if (templateType !== 'test' && templateType !== 'api') {
      const indexFilePath = path.join(componentDir, 'index.js');
      let indexContent;
      
      if (templateType === 'context') {
        // Context exports both provider and hook
        indexContent = `export { ${name}Provider, use${name} } from './${name}';\n`;
      } else {
        indexContent = `export { default } from './${name}';\n`;
      }
      
      fs.writeFileSync(indexFilePath, indexContent, 'utf8');
      console.log(chalk.gray(`📄 Created index file: index.js`));
    }

  } catch (error) {
    // Clean up on error
    if (fs.existsSync(componentDir)) {
      fs.removeSync(componentDir);
    }
    throw error;
  }
}

/**
 * Get the appropriate template content based on options
 */
function getTemplateContent(name, type, templateType, withStyles) {
  const isTsx = type === 'tsx';
  
  switch (templateType) {
    case 'class':
      if (isTsx) {
        return withStyles ? tsxClassTemplate(name) : tsxClassTemplateWithoutStyles(name);
      } else {
        return withStyles ? jsxClassTemplate(name) : jsxClassTemplateWithoutStyles(name);
      }
    
    case 'hook':
      return isTsx ? tsxHookTemplate(name) : jsxHookTemplate(name);
    
    case 'context':
      return isTsx ? tsxContextTemplate(name) : jsxContextTemplate(name);
    
    case 'styled':
      return isTsx ? styledComponentTsxTemplate(name) : styledComponentTemplate(name);
    
    case 'memo':
      return isTsx ? memoComponentTsxTemplate(name) : memoComponentTemplate(name);
    
    case 'hoc':
      return isTsx ? hocTsxTemplate(name) : hocTemplate(name);
    
    case 'form':
      return isTsx ? formComponentTsxTemplate(name) : formComponentTemplate(name);
    
    case 'test':
      return isTsx ? testFileTsxTemplate(name) : testFileTemplate(name);
    
    case 'api':
      return isTsx ? apiServiceTsxTemplate(name) : apiServiceTemplate(name);
    
    case 'functional':
    default:
      if (isTsx) {
        return withStyles ? tsxTemplate(name) : tsxTemplateWithoutStyles(name);
      } else {
        return withStyles ? jsxTemplate(name) : jsxTemplateWithoutStyles(name);
      }
  }
}

/**
 * Get display label for template type
 */
function getTypeLabel(templateType) {
  switch (templateType) {
    case 'class':
      return 'class component';
    case 'hook':
      return 'custom hook';
    case 'context':
      return 'context provider';
    case 'styled':
      return 'styled component';
    case 'memo':
      return 'memoized component';
    case 'hoc':
      return 'higher order component';
    case 'form':
      return 'form component';
    case 'test':
      return 'test file';
    case 'api':
      return 'API service';
    case 'functional':
    default:
      return 'functional component';
  }
}

module.exports = {
  generateComponent
};
