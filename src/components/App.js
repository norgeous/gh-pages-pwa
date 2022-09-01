import React, { useState } from 'react';
import styled from 'styled-components';
import { useWakeLock } from '../hooks/useWakeLock';
import usePeer from '../hooks/usePeer';
import usePhaser from '../phaser/usePhaser';
import { TopLeft, TopRight, BottomRight, BottomLeft, Overlay } from './styled';

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
  const [open, setOpen] = useState(true);
  const { game } = usePhaser();
  const { hardCodedPeerIds, peerId, connections } = usePeer();
  const [wakeLockAvailable, wakeLockEnabled, setWakeLockEnabled] = useWakeLock(true);
  
  const numberConnections = Object.values(connections).filter(con => con.filter(c => c?.open).length).length;
  console.log('numberConnections', numberConnections, connections);

  return (
    <>
      {open && (
        <Overlay>
          <img src="icon.svg" width="80" />
          <Heading>React app!</Heading>
          <A href="https://github.com/norgeous/gh-pages-pwa/" target="_blank">
            norgeous/gh-pages-pwa
          </A>
          <div>
            wakelock
            <input
              type="checkbox"
              checked={wakeLockEnabled}
              onChange={() => setWakeLockEnabled(!wakeLockEnabled)}
              disabled={!wakeLockAvailable}
            />
          </div>
          {hardCodedPeerIds.map(id => {
            if(id === peerId) return (
              <div>{id} 🫵</div>
            );
              
            const isOpen = Object.values(connections).find(([conn]) => conn.peer === id)?.[0]?.open;

            return (    
              <div>{id} {isOpen ? '✅' : '❌'}</div>
            );
          })}
        </Overlay>
      )}
      <TopLeft>1,000,000</TopLeft>
      <TopRight><button onClick={() => setOpen(!open)}>⚙️</button></TopRight>
      <BottomRight>🪙x22 🙎x{numberConnections + 1}</BottomRight>
      <BottomLeft>❤️❤️🖤</BottomLeft> 
      <div id="phaser"></div>
    </>
  );
};

export default App;
