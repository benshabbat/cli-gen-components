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

// Class Component Templates
const jsxClassTemplate = (componentName) => `import React, { Component } from 'react';
import './${componentName}.css';

class ${componentName} extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Define your state here
    };
  }

  componentDidMount() {
    // Component lifecycle method
  }

  render() {
    return (
      <div className="${componentName.toLowerCase()}-container">
        <h2>${componentName} Component</h2>
        <p>This is a generated class component.</p>
      </div>
    );
  }
}

export default ${componentName};
`;

const jsxClassTemplateWithoutStyles = (componentName) => `import React, { Component } from 'react';

class ${componentName} extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Define your state here
    };
  }

  componentDidMount() {
    // Component lifecycle method
  }

  render() {
    return (
      <div className="${componentName.toLowerCase()}-container">
        <h2>${componentName} Component</h2>
        <p>This is a generated class component.</p>
      </div>
    );
  }
}

export default ${componentName};
`;

const tsxClassTemplate = (componentName) => `import React, { Component } from 'react';
import './${componentName}.module.css';

interface ${componentName}Props {
  // Define your props here
}

interface ${componentName}State {
  // Define your state here
}

class ${componentName} extends Component<${componentName}Props, ${componentName}State> {
  constructor(props: ${componentName}Props) {
    super(props);
    this.state = {
      // Initialize state
    };
  }

  componentDidMount(): void {
    // Component lifecycle method
  }

  render(): React.ReactNode {
    return (
      <div className="${componentName.toLowerCase()}-container">
        <h2>${componentName} Component</h2>
        <p>This is a generated TypeScript class component.</p>
      </div>
    );
  }
}

export default ${componentName};
`;

const tsxClassTemplateWithoutStyles = (componentName) => `import React, { Component } from 'react';

interface ${componentName}Props {
  // Define your props here
}

interface ${componentName}State {
  // Define your state here
}

class ${componentName} extends Component<${componentName}Props, ${componentName}State> {
  constructor(props: ${componentName}Props) {
    super(props);
    this.state = {
      // Initialize state
    };
  }

  componentDidMount(): void {
    // Component lifecycle method
  }

  render(): React.ReactNode {
    return (
      <div className="${componentName.toLowerCase()}-container">
        <h2>${componentName} Component</h2>
        <p>This is a generated TypeScript class component.</p>
      </div>
    );
  }
}

export default ${componentName};
`;

// Custom Hook Templates
const jsxHookTemplate = (hookName) => `import { useState, useEffect } from 'react';

const ${hookName} = () => {
  const [state, setState] = useState(null);

  useEffect(() => {
    // Add your effect logic here
    return () => {
      // Cleanup
    };
  }, []);

  return { state, setState };
};

export default ${hookName};
`;

const tsxHookTemplate = (hookName) => `import { useState, useEffect } from 'react';

interface ${hookName}Return {
  state: any;
  setState: (value: any) => void;
}

const ${hookName} = (): ${hookName}Return => {
  const [state, setState] = useState<any>(null);

  useEffect(() => {
    // Add your effect logic here
    return () => {
      // Cleanup
    };
  }, []);

  return { state, setState };
};

export default ${hookName};
`;

// Context Provider Templates
const jsxContextTemplate = (contextName) => `import React, { createContext, useContext, useState } from 'react';

const ${contextName}Context = createContext(undefined);

export const ${contextName}Provider = ({ children }) => {
  const [state, setState] = useState({
    // Define your context state here
  });

  const value = {
    ...state,
    setState,
  };

  return (
    <${contextName}Context.Provider value={value}>
      {children}
    </${contextName}Context.Provider>
  );
};

export const use${contextName} = () => {
  const context = useContext(${contextName}Context);
  if (context === undefined) {
    throw new Error('use${contextName} must be used within a ${contextName}Provider');
  }
  return context;
};
`;

const tsxContextTemplate = (contextName) => `import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ${contextName}State {
  // Define your context state here
}

interface ${contextName}ContextType extends ${contextName}State {
  setState: (state: ${contextName}State) => void;
}

const ${contextName}Context = createContext<${contextName}ContextType | undefined>(undefined);

interface ${contextName}ProviderProps {
  children: ReactNode;
}

export const ${contextName}Provider: React.FC<${contextName}ProviderProps> = ({ children }) => {
  const [state, setState] = useState<${contextName}State>({
    // Initialize your context state here
  });

  const value: ${contextName}ContextType = {
    ...state,
    setState,
  };

  return (
    <${contextName}Context.Provider value={value}>
      {children}
    </${contextName}Context.Provider>
  );
};

export const use${contextName} = (): ${contextName}ContextType => {
  const context = useContext(${contextName}Context);
  if (context === undefined) {
    throw new Error('use${contextName} must be used within a ${contextName}Provider');
  }
  return context;
};
`;

module.exports = {
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
  cssTemplate,
  cssModuleTemplate
};
