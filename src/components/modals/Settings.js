import React from 'react';
import useWakeLock from '../../hooks/useWakeLock';
import Modal from '../Modal';
import { Heading } from '../styled/common';
import { Button } from '../styled/menu';

const Settings = ({ open, onClose, setRoute }) => {
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
          <Heading>Settings</Heading>
          <Button onClick={() => setRoute('MAINMENU')}>Main Menu</Button>
          <Button onClick={reload}>♻️ Reload</Button>
          <Button onClick={updatePwa}>🌀 Clear cache and reload</Button>
          <label>
            <input
              type="checkbox"
              checked={wakeLockEnabled}
              onChange={() => setWakeLockEnabled(!wakeLockEnabled)}
              disabled={!wakeLockAvailable}
            />
            {' '}
            Prevent sleep (wakelock)
          </label>
        </Modal>
      )}
    </>
  );
};

export default Settings;
