import React from 'react';
import styled from 'styled-components';
import usePhaser from '../phaser/usePhaser';

const Section = styled.section`
  padding: 20px;
  background: #4049;
  text-align: center;
  position: absolute;
`;

const Heading = styled.div`
  font-size: 30px;
`;

const A = styled.a`
  font-size: 20px;
  text-decoration: none;
  :visited,
  :hover {
    color: #077;
  }
`;

const App = () => {
  const { game } = usePhaser();
  console.log(game);
  return (
    <>
      <Section>
        <img src="icon.svg" width="80" />
        <Heading>React app!</Heading>
        <A href="https://github.com/norgeous/gh-pages-pwa/" target="_blank">
          norgeous/gh-pages-pwa
        </A>
      </Section>
      <div id="phaser"></div>
    </>
  );
};

export default App;
