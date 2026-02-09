import React, { ComponentType } from 'react';

interface WithEnhancementProps {
  // Define additional props here
}

const withAuth = <P extends object>(
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

  WithEnhancement.displayName = `withAuth(${
    (WrappedComponent as any).displayName ||
    (WrappedComponent as any).name ||
    'Component'
  })`;

  return WithEnhancement;
};

export default withAuth;
