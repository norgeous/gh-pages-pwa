import React from 'react';
import useWakeLock from '../hooks/useWakeLock';
import Modal from './Modal';
import { Heading, A } from './styled/common';

const Settings = ({
  open, onClose,
}) => {
  const [wakeLockAvailable, wakeLockEnabled, setWakeLockEnabled] = useWakeLock(true);

  const updatePwa = async () => {
    await navigator.serviceWorker.ready;
    // At this point, a Service Worker is controlling the current page
    navigator.serviceWorker.controller.postMessage({
      type: 'MESSAGE_IDENTIFIER',
    });
    window.location.reload();
  };
  
  const reload = () => window.location.reload();

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
          
          <div><button onClick={reload}>♺ Reload</button></div>
          <div><button onClick={updatePwa}>🌀 Clear cache and reload</button></div>
        </Modal>
      )}
    </>
  );
};

export default Settings;
