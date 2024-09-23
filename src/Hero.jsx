import React from 'react';
import styled from 'styled-components';
import './App.css';

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  background: url('https://picsum.photos/1200/800') no-repeat  center/cover;
  color: white;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 48px;
  margin: 0;
`;

const HeroButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background: #ff5722;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: #e64a19;
  }
`;
const Hero = () => {
  return (
   
     
          <HeroContainer>
    <HeroTitle>Your Custom Products, Just a Click Away</HeroTitle>
    <HeroButton>Get Started</HeroButton>
  </HeroContainer>
      
    
  );
};


export default Hero;
