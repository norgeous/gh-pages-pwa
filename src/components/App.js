import React from 'react';
import styled from 'styled-components';

const Heading = styled.div`
  font-size: 30px;
`;

const A = styled.a`
  font-size: 20px;
  :visited,
  :hover {
    color: #077;
  }
`;

const App = () => (
  <>
    <img src="icon.svg" width="80" />
    <Heading>React app!</Heading>
    <A href="https://github.com/norgeous/gh-pages-pwa/" target="_blank">norgeous/gh-pages-pwa</A>
  </>
);

export default App;
