import React from 'react';
import Modal from '../Modal';
import { Button } from '../styled/menu';

const Network = ({
  open, onClose,
  hardCodedPeerIds, peerId, connections2, broadcast,
}) => {
  return (
    <>
      {open && (
        <Modal onClose={onClose}>
          {hardCodedPeerIds.map(id => {
            if(id === peerId) return (
              <Button onClick={()=>broadcast(`click from ${peerId}`)}>{id} 🫵</Button>
            );
              
            const conn = connections2.find(conn => conn.peer === id);

            return (    
              <Button onClick={()=>broadcast(`click from ${peerId}`)}>{id} {conn ? '✅' : '❌'}</Button>
            );
          })}
        </Modal>
      )}
    </>
  );
};

export default Network;
