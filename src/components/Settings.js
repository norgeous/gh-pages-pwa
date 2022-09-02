import React from 'react';
import useWakeLock from '../hooks/useWakeLock';
import Modal from './Modal';
import { Heading, A } from './styled/common';

const Settings = ({
  open, onClose,
}) => {
  const [wakeLockAvailable, wakeLockEnabled, setWakeLockEnabled] = useWakeLock(true);

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
        </Modal>
      )}
    </>
  );
};

export default Settings;
