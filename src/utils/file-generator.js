const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const {
  jsxTemplate,
  jsxTemplateWithoutStyles,
  tsxTemplate,
  tsxTemplateWithoutStyles,
  cssTemplate,
  cssModuleTemplate
} = require('../templates/component-templates');

/**
 * Generate a React component based on the provided options
 * @param {Object} options - Configuration options
 * @param {string} options.name - Component name
 * @param {string} options.type - Component type (jsx or tsx)
 * @param {string} options.path - Output path
 * @param {boolean} options.withStyles - Include CSS file
 */
function generateComponent(options) {
  const { name, type, path: outputPath, withStyles } = options;

  // Validate component name
  if (!name || !/^[A-Z][a-zA-Z0-9]*$/.test(name)) {
    throw new Error('Component name must start with a capital letter and contain only alphanumeric characters');
  }

  // Create component directory
  const componentDir = path.join(outputPath, name);
  
  try {
    // Check if directory already exists
    if (fs.existsSync(componentDir)) {
      throw new Error(`Component "${name}" already exists at ${componentDir}`);
    }

    // Create directory
    fs.ensureDirSync(componentDir);
    console.log(chalk.gray(`📁 Created directory: ${componentDir}`));

    // Generate component file
    const fileExtension = type === 'tsx' ? 'tsx' : 'jsx';
    const componentFilePath = path.join(componentDir, `${name}.${fileExtension}`);
    
    let componentContent;
    if (type === 'tsx') {
      componentContent = withStyles ? tsxTemplate(name) : tsxTemplateWithoutStyles(name);
    } else {
      componentContent = withStyles ? jsxTemplate(name) : jsxTemplateWithoutStyles(name);
    }

    fs.writeFileSync(componentFilePath, componentContent, 'utf8');
    console.log(chalk.gray(`📄 Created ${type.toUpperCase()} component: ${name}.${fileExtension}`));

    // Generate styles file if requested
    if (withStyles) {
      const isCssModule = type === 'tsx';
      const styleFileName = isCssModule ? `${name}.module.css` : `${name}.css`;
      const styleFilePath = path.join(componentDir, styleFileName);
      const styleContent = isCssModule ? cssModuleTemplate(name) : cssTemplate(name);
      
      fs.writeFileSync(styleFilePath, styleContent, 'utf8');
      console.log(chalk.gray(`🎨 Created styles file: ${styleFileName}`));
    }

    // Generate index file for easy imports
    const indexFilePath = path.join(componentDir, 'index.js');
    const indexContent = `export { default } from './${name}';\n`;
    fs.writeFileSync(indexFilePath, indexContent, 'utf8');
    console.log(chalk.gray(`📄 Created index file: index.js`));

  } catch (error) {
    // Clean up on error
    if (fs.existsSync(componentDir)) {
      fs.removeSync(componentDir);
    }
    throw error;
  }
}

module.exports = {
  generateComponent
};
