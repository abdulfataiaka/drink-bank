import React from 'react';

const MinWidthModal = () => ( // Is this a specification
  <div className="modal" id="min-width-modal">
    <div className="overlay" />
    <div className="whitebox">
      <p>
        The minimum device width allowed is 655px, kindly use a more wider device, thank you!
      </p>
    </div>
  </div>
);
  
export default MinWidthModal;
