import React from 'react';
import styled from 'styled-components';
const GridWrapper = styled.div`
  h2 { 
      margin-top: 30px;
      text-align: center; 
    };
`; 
export const NotFound = () => (
  <GridWrapper>
    <h2>404 Not Found</h2>
  </GridWrapper>
)