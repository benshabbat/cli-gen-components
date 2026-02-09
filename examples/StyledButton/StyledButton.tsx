import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  margin: 10px;
`;

const Title = styled.h2`
  color: #333;
  font-size: 24px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  color: #666;
  font-size: 16px;
`;

interface StyledButtonProps {
  // Define your props here
}

const StyledButton: React.FC<StyledButtonProps> = () => {
  return (
    <Container>
      <Title>StyledButton Component</Title>
      <Description>This is a styled component with TypeScript.</Description>
    </Container>
  );
};

export default StyledButton;
