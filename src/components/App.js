import React from 'react';
import styled from 'styled-components'

const Icon = styled.div`
  font-size: 80px;
`;

const App = () => (
  <>
    <Icon>⚛️📲</Icon>
    <h1>React app!</h1>
    <ul>
      <li>PWA with offline mode</li>
      <li>Zero install</li>
      <li>Zero build</li>
      <li>Clientside es modules (via importmap + skypack cdn)</li>
      <li>Clientside React transpilation (via babel-standalone within service worker)</li>
      <li>less css compiler</li>
      <li>styled-components</li>
      <li>Emoji can be used for favicon and PWA icon</li>
    </ul>
  </>
);

export default App;
