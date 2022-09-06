import React from 'react';
import { FlexR, Heading, A } from './styled/common';

const App = () => {
  return (
    <>
      <FlexR>
        <img src="icon.svg" width="60" />
        <div>
          <Heading>gh-pages-pwa</Heading>
          <A href="https://github.com/norgeous/gh-pages-pwa/" target="_blank">
            norgeous/gh-pages-pwa
          </A>
        </div>
      </FlexR>
    </>
  );
};

export default App;
