const jsxTemplate = (componentName) => `import React from 'react';
import './${componentName}.css';

const ${componentName} = () => {
  return (
    <div className="${componentName.toLowerCase()}-container">
      <h2>${componentName} Component</h2>
      <p>This is a generated JSX component.</p>
    </div>
  );
};

export default ${componentName};
`;

const jsxTemplateWithoutStyles = (componentName) => `import React from 'react';

const ${componentName} = () => {
  return (
    <div className="${componentName.toLowerCase()}-container">
      <h2>${componentName} Component</h2>
      <p>This is a generated JSX component.</p>
    </div>
  );
};

export default ${componentName};
`;

const tsxTemplate = (componentName) => `import React from 'react';
import './${componentName}.module.css';

interface ${componentName}Props {
  // Define your props here
}

const ${componentName}: React.FC<${componentName}Props> = () => {
  return (
    <div className="${componentName.toLowerCase()}-container">
      <h2>${componentName} Component</h2>
      <p>This is a generated TSX component.</p>
    </div>
  );
};

export default ${componentName};
`;

const tsxTemplateWithoutStyles = (componentName) => `import React from 'react';

interface ${componentName}Props {
  // Define your props here
}

const ${componentName}: React.FC<${componentName}Props> = () => {
  return (
    <div className="${componentName.toLowerCase()}-container">
      <h2>${componentName} Component</h2>
      <p>This is a generated TSX component.</p>
    </div>
  );
};

export default ${componentName};
`;

const cssTemplate = (componentName) => `.${componentName.toLowerCase()}-container {
  padding: 20px;
  margin: 10px;
}

.${componentName.toLowerCase()}-container h2 {
  color: #333;
  font-size: 24px;
  margin-bottom: 10px;
}

.${componentName.toLowerCase()}-container p {
  color: #666;
  font-size: 16px;
}
`;

const cssModuleTemplate = (componentName) => `.${componentName.toLowerCase()}-container {
  padding: 20px;
  margin: 10px;
}

.title {
  color: #333;
  font-size: 24px;
  margin-bottom: 10px;
}

.description {
  color: #666;
  font-size: 16px;
}
`;

module.exports = {
  jsxTemplate,
  jsxTemplateWithoutStyles,
  tsxTemplate,
  tsxTemplateWithoutStyles,
  cssTemplate,
  cssModuleTemplate
};
