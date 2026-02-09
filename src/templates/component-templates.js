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

// Styled Components Templates
const styledComponentTemplate = (componentName) => `import React from 'react';
import styled from 'styled-components';

const Container = styled.div\`
  padding: 20px;
  margin: 10px;
\`;

const Title = styled.h2\`
  color: #333;
  font-size: 24px;
  margin-bottom: 10px;
\`;

const Description = styled.p\`
  color: #666;
  font-size: 16px;
\`;

const ${componentName} = () => {
  return (
    <Container>
      <Title>${componentName} Component</Title>
      <Description>This is a styled component.</Description>
    </Container>
  );
};

export default ${componentName};
`;

const styledComponentTsxTemplate = (componentName) => `import React from 'react';
import styled from 'styled-components';

const Container = styled.div\`
  padding: 20px;
  margin: 10px;
\`;

const Title = styled.h2\`
  color: #333;
  font-size: 24px;
  margin-bottom: 10px;
\`;

const Description = styled.p\`
  color: #666;
  font-size: 16px;
\`;

interface ${componentName}Props {
  // Define your props here
}

const ${componentName}: React.FC<${componentName}Props> = () => {
  return (
    <Container>
      <Title>${componentName} Component</Title>
      <Description>This is a styled component with TypeScript.</Description>
    </Container>
  );
};

export default ${componentName};
`;

// React.memo Templates
const memoComponentTemplate = (componentName) => `import React, { memo } from 'react';
import './${componentName}.css';

const ${componentName} = memo(({ /* props */ }) => {
  return (
    <div className="${componentName.toLowerCase()}-container">
      <h2>${componentName} Component</h2>
      <p>This is a memoized component for performance optimization.</p>
    </div>
  );
});

${componentName}.displayName = '${componentName}';

export default ${componentName};
`;

const memoComponentTsxTemplate = (componentName) => `import React, { memo } from 'react';
import './${componentName}.module.css';

interface ${componentName}Props {
  // Define your props here
}

const ${componentName}: React.FC<${componentName}Props> = memo(({ /* props */ }) => {
  return (
    <div className="${componentName.toLowerCase()}-container">
      <h2>${componentName} Component</h2>
      <p>This is a memoized component for performance optimization.</p>
    </div>
  );
});

${componentName}.displayName = '${componentName}';

export default ${componentName};
`;

// Higher Order Component Templates
const hocTemplate = (componentName) => `import React from 'react';

const ${componentName} = (WrappedComponent) => {
  const WithEnhancement = (props) => {
    // Add your HOC logic here
    const enhancedProps = {
      ...props,
      // Add additional props or logic
    };

    return <WrappedComponent {...enhancedProps} />;
  };

  WithEnhancement.displayName = \`${componentName}(\${WrappedComponent.displayName || WrappedComponent.name || 'Component'})\`;

  return WithEnhancement;
};

export default ${componentName};
`;

const hocTsxTemplate = (componentName) => `import React, { ComponentType } from 'react';

interface WithEnhancementProps {
  // Define additional props here
}

const ${componentName} = <P extends object>(
  WrappedComponent: ComponentType<P>
): ComponentType<P & WithEnhancementProps> => {
  const WithEnhancement: React.FC<P & WithEnhancementProps> = (props) => {
    // Add your HOC logic here
    const enhancedProps = {
      ...props,
      // Add additional props or logic
    };

    return <WrappedComponent {...enhancedProps} />;
  };

  WithEnhancement.displayName = \`${componentName}(\${
    (WrappedComponent as any).displayName ||
    (WrappedComponent as any).name ||
    'Component'
  })\`;

  return WithEnhancement;
};

export default ${componentName};
`;

// Form Component Templates
const formComponentTemplate = (componentName) => `import React, { useState } from 'react';
import './${componentName}.css';

const ${componentName} = () => {
  const [formData, setFormData] = useState({
    // Define your form fields here
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validate = () => {
    const newErrors = {};
    // Add your validation logic here
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    
    if (Object.keys(newErrors).length === 0) {
      // Form is valid, submit data
      console.log('Form submitted:', formData);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <form className="${componentName.toLowerCase()}-form" onSubmit={handleSubmit}>
      <h2>${componentName}</h2>
      {/* Add your form fields here */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default ${componentName};
`;

const formComponentTsxTemplate = (componentName) => `import React, { useState, FormEvent, ChangeEvent } from 'react';
import './${componentName}.module.css';

interface ${componentName}Data {
  // Define your form fields here
}

interface ${componentName}Errors {
  [key: string]: string;
}

const ${componentName}: React.FC = () => {
  const [formData, setFormData] = useState<${componentName}Data>({
    // Initialize your form fields here
  });

  const [errors, setErrors] = useState<${componentName}Errors>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validate = (): ${componentName}Errors => {
    const newErrors: ${componentName}Errors = {};
    // Add your validation logic here
    return newErrors;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = validate();
    
    if (Object.keys(newErrors).length === 0) {
      // Form is valid, submit data
      console.log('Form submitted:', formData);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <form className="${componentName.toLowerCase()}-form" onSubmit={handleSubmit}>
      <h2>${componentName}</h2>
      {/* Add your form fields here */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default ${componentName};
`;

// Test File Templates
const testFileTemplate = (componentName) => `import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ${componentName} from './${componentName}';

describe('${componentName}', () => {
  it('should render without crashing', () => {
    render(<${componentName} />);
    expect(screen.getByText('${componentName} Component')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = render(<${componentName} />);
    expect(container).toMatchSnapshot();
  });

  // Add more tests here
});
`;

const testFileTsxTemplate = (componentName) => `import React from 'react';
import { render, screen, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom';
import ${componentName} from './${componentName}';

describe('${componentName}', () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(<${componentName} />);
  });

  it('should render without crashing', () => {
    expect(screen.getByText('${componentName} Component')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    expect(component.container).toMatchSnapshot();
  });

  // Add more tests here
});
`;

// API Service Templates
const apiServiceTemplate = (serviceName) => `const ${serviceName} = {
  /**
   * Get all items
   */
  getAll: async () => {
    try {
      const response = await fetch('/api/endpoint');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  },

  /**
   * Get item by ID
   */
  getById: async (id) => {
    try {
      const response = await fetch(\`/api/endpoint/\${id}\`);
      if (!response.ok) {
        throw new Error(\`Failed to fetch item with id: \${id}\`);
      }
      return await response.json();
    } catch (error) {
      console.error(\`Error fetching item \${id}:\`, error);
      throw error;
    }
  },

  /**
   * Create new item
   */
  create: async (data) => {
    try {
      const response = await fetch('/api/endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('Failed to create item');
      }
      return await response.json();
    } catch (error) {
      console.error('Error creating item:', error);
      throw error;
    }
  },

  /**
   * Update existing item
   */
  update: async (id, data) => {
    try {
      const response = await fetch(\`/api/endpoint/\${id}\`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error(\`Failed to update item with id: \${id}\`);
      }
      return await response.json();
    } catch (error) {
      console.error(\`Error updating item \${id}:\`, error);
      throw error;
    }
  },

  /**
   * Delete item
   */
  delete: async (id) => {
    try {
      const response = await fetch(\`/api/endpoint/\${id}\`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error(\`Failed to delete item with id: \${id}\`);
      }
      return await response.json();
    } catch (error) {
      console.error(\`Error deleting item \${id}:\`, error);
      throw error;
    }
  },
};

export default ${serviceName};
`;

const apiServiceTsxTemplate = (serviceName) => `interface ApiResponse<T> {
  data: T;
  message?: string;
}

interface ApiError {
  message: string;
  status?: number;
}

const ${serviceName} = {
  /**
   * Get all items
   */
  getAll: async <T>(): Promise<T[]> => {
    try {
      const response = await fetch('/api/endpoint');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const result: ApiResponse<T[]> = await response.json();
      return result.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error as ApiError;
    }
  },

  /**
   * Get item by ID
   */
  getById: async <T>(id: string | number): Promise<T> => {
    try {
      const response = await fetch(\`/api/endpoint/\${id}\`);
      if (!response.ok) {
        throw new Error(\`Failed to fetch item with id: \${id}\`);
      }
      const result: ApiResponse<T> = await response.json();
      return result.data;
    } catch (error) {
      console.error(\`Error fetching item \${id}:\`, error);
      throw error as ApiError;
    }
  },

  /**
   * Create new item
   */
  create: async <T>(data: Partial<T>): Promise<T> => {
    try {
      const response = await fetch('/api/endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('Failed to create item');
      }
      const result: ApiResponse<T> = await response.json();
      return result.data;
    } catch (error) {
      console.error('Error creating item:', error);
      throw error as ApiError;
    }
  },

  /**
   * Update existing item
   */
  update: async <T>(id: string | number, data: Partial<T>): Promise<T> => {
    try {
      const response = await fetch(\`/api/endpoint/\${id}\`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error(\`Failed to update item with id: \${id}\`);
      }
      const result: ApiResponse<T> = await response.json();
      return result.data;
    } catch (error) {
      console.error(\`Error updating item \${id}:\`, error);
      throw error as ApiError;
    }
  },

  /**
   * Delete item
   */
  delete: async (id: string | number): Promise<void> => {
    try {
      const response = await fetch(\`/api/endpoint/\${id}\`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error(\`Failed to delete item with id: \${id}\`);
      }
    } catch (error) {
      console.error(\`Error deleting item \${id}:\`, error);
      throw error as ApiError;
    }
  },
};

export default ${serviceName};
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
};
