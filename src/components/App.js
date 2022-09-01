import React, { useState } from 'react';
import styled from 'styled-components';
import { useWakeLock } from '../hooks/useWakeLock';
import usePeer from '../hooks/usePeer';
import usePhaser from '../hooks/usePhaser';
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
  const [open, setOpen] = useState(false);
  const { score, game } = usePhaser();
  const { hardCodedPeerIds, peerId, connections2, broadcast } = usePeer();
  const [wakeLockAvailable, wakeLockEnabled, setWakeLockEnabled] = useWakeLock(true);

  const updatePwa = () => {
    navigator.serviceWorker.ready.then((registration) => {
      // At this point, a Service Worker is controlling the current page
      navigator.serviceWorker.controller.postMessage({
        type: 'MESSAGE_IDENTIFIER',
      });
      window.location.reload();
    });
  };
  
  // const numberConnections = Object.values(connections).filter(con => con.filter(c => c?.open).length).length;
  // console.log('numberConnections', numberConnections, connections);
  // console.log(game, connections2);

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
              
            const conn = connections2.find(conn => conn.peer === id);

            return (    
              <div onClick={()=>broadcast(`click from ${peerId}`)}>{id} {conn ? '✅' : '❌'}</div>
            );
          })}
        </Overlay>
      )}
      <TopLeft>{1000000 + score}</TopLeft>
      <TopRight>
        <button onClick={updatePwa}>update</button>
        <button onClick={() => setOpen(!open)}>⚙️</button>
      </TopRight>
      <BottomRight>🪙x22 🙎x{connections2.length + 1}</BottomRight>
      <BottomLeft>❤️❤️🖤</BottomLeft> 
      <div id="phaser"></div>
    </>
  );
};

export default App;
