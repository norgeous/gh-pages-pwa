import { useState, useEffect } from 'react';
import Peer from 'peerjs';

const hardCodedPeerIds = [
  'my-pwa-multiplayer-id-00',
  'my-pwa-multiplayer-id-01',
  'my-pwa-multiplayer-id-02',
  'my-pwa-multiplayer-id-03',
  'my-pwa-multiplayer-id-04',
  'my-pwa-multiplayer-id-05',
  'my-pwa-multiplayer-id-06',
  'my-pwa-multiplayer-id-07',
];

const usePeer = () => {
  const [i, setI] = useState(0);
  // const [peer, setPeer] = useState();
  const [peerId, setPeerId] = useState();
  const [connections, setConnections] = useState({});

  useEffect(() => {
    const newPeer = new Peer(hardCodedPeerIds[i]);

    newPeer.on('error', (err) => {
      setConnections(newPeer.connections);
    });

    // if id is already taken, the peer will close immediately, try the next id in the list
    newPeer.on('close', () => setI(i + 1));

    // if id is free, the peer will open
    newPeer.on('open', () => {

      // helps to always fire a message on refresh / close window
      window.onbeforeunload = () => {
        Object.values(newPeer.connections).forEach(([conn]) => {
          conn.send(`goodbye from ${newPeer.id}!`);
        });
      };

      setPeerId(newPeer.id);

      // connect to all predefined peer ids
      const newConnections = hardCodedPeerIds.map(id => {
        const conn = newPeer.connect(id, {label: 'data'});
        conn.on('open', () => {
          console.log(`connected to ${id}`);
          conn.send(`hello from ${newPeer.id}!`);
          setConnections(newPeer.connections);
        });
        conn.on('disconnected', () => {
          console.log(`disconnected from ${id}`);
          setConnections(newPeer.connections);
        });
        return conn;
      });

      newPeer.on('connection', conn => {
        conn.on('data', data => {
          console.log('data',data);
          setConnections(newPeer.connections);
        });
        conn.on('close', () => {
          setConnections(newPeer.connections);
        });
      });
    });

  }, [i]);

  return { peerId, connections };
};

export default usePeer;
