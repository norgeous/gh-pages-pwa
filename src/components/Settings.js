import React from 'react';
import Modal from './Modal';
import { Heading, A } from './styled/common';

const Settings = ({
  open, onClose,
  hardCodedPeerIds, peerId, connections2, broadcast,
  wakeLockAvailable, wakeLockEnabled, setWakeLockEnabled,
}) => {
  return (
    <>
      {open && (
        <Modal onClose={onClose}>
          <img src="icon.svg" width="80" />
          <Heading>React app!</Heading>
          <A href="https://github.com/norgeous/gh-pages-pwa/" target="_blank">
            norgeous/gh-pages-pwa
          </A>
          <div>
            Prevent sleep (wakelock)
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
        </Modal>
      )}
    </>
  );
};

export default Settings;
