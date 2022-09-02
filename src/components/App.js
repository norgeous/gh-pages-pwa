import React, { useState } from 'react';

import usePeer from '../hooks/usePeer';
import usePhaser from '../hooks/usePhaser';

import Settings from './Settings';
import { TopLeft, TopRight, BottomRight, BottomLeft } from './styled/layout';
import { Button } from './styled/common';

const App = () => {
  const [open, setOpen] = useState(false);
  const [route, setRoute] = useState();

  const { score, game } = usePhaser();
  const { hardCodedPeerIds, peerId, connections2, broadcast } = usePeer();

  const updatePwa = async () => {
    await navigator.serviceWorker.ready;
    // At this point, a Service Worker is controlling the current page
    navigator.serviceWorker.controller.postMessage({
      type: 'MESSAGE_IDENTIFIER',
    });
    window.location.reload();
  };

  return (
    <>
      <Settings
        open={open}
        onClose={() => setOpen(false)}
        hardCodedPeerIds={hardCodedPeerIds}
        peerId={peerId}
        connections2={connections2}
        broadcast={broadcast}
      />
      <TopLeft>{1000000 + score}</TopLeft>
      <TopRight>
        <Button onClick={updatePwa}>⬆️</Button>
        <Button onClick={() => setOpen(true)}>🙎x{connections2.length + 1}</Button>
        <Button onClick={() => setOpen(true)}>⚙️</Button>
      </TopRight>
      <BottomRight>🪙x22</BottomRight>
      <BottomLeft>❤️❤️🖤</BottomLeft> 
      <div id="phaser"></div>
    </>
  );
};

export default App;
