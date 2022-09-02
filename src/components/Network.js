import React from 'react';
import Modal from './Modal';

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

export default Network;
