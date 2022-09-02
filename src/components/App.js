import React, { useState, useEffect } from 'react';

import usePeer from '../hooks/usePeer';
import usePhaser from '../hooks/usePhaser';

import MainMenu from './modals/MainMenu';
import Settings from './modals/Settings';
import Network from './modals/Network';
import { TopLeft, TopRight, BottomRight, Bottom, BottomLeft } from './styled/layout';
import { Button } from './styled/common';

const App = () => {
  const [route, setRoute] = useState('MAINMENU');
  const [position, setPosition] = useState(50);

  const { score, game } = usePhaser();
  const { hardCodedPeerIds, peerId, connections2, broadcast, peerData } = usePeer();

  useEffect(() => broadcast({ position }), [position]);

  return (
    <>
      <MainMenu
        open={route === 'MAINMENU'}
        onClose={() => setRoute()}
      />
      <Settings
        open={route === 'SETTINGS'}
        onClose={() => setRoute()}
        setRoute={setRoute}
      />
      <Network
        open={route === 'NETWORK'}
        onClose={() => setRoute()}
        hardCodedPeerIds={hardCodedPeerIds}
        peerId={peerId}
        connections2={connections2}
        broadcast={broadcast}
      />
      <TopLeft>{1000000 + score}</TopLeft>
      <TopRight>
        <Button onClick={() => setRoute('NETWORK')}>🙎x{connections2.length + 1}</Button>
        <Button onClick={() => setRoute('SETTINGS')}>⚙️</Button>
      </TopRight>
      <BottomRight>🪙x22</BottomRight>
      <Bottom>
        <pre>{JSON.stringify(peerData, null, 2)}</pre>
        <input
          type="range"
          min={0}
          max={100}
          step={10}
          value={position}
          onChange={e => setPosition(e.target.value)}
        />
      </Bottom>
      <BottomLeft>❤️❤️🖤</BottomLeft> 
      <div id="phaser"></div>
    </>
  );
};

export default App;
