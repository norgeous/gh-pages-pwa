import React, { useState } from 'react';

import usePeer from '../hooks/usePeer';
import usePhaser from '../hooks/usePhaser';

import MainMenu from './modals/MainMenu';
import Settings from './modals/Settings';
import Network from './modals/Network';
import { TopLeft, TopRight, BottomRight, BottomLeft } from './styled/layout';
import { Button } from './styled/common';

const App = () => {
  const [route, setRoute] = useState('MAINMENU');

  const { score, game } = usePhaser();
  const { hardCodedPeerIds, peerId, connections2, broadcast } = usePeer();

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
      <BottomLeft>❤️❤️🖤</BottomLeft> 
      <div id="phaser"></div>
    </>
  );
};

export default App;
