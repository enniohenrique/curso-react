import React from 'react';

function Modal({ modal, setModal }) {
  if (modal === true) {
    return (
      <div>
        Esse é um modal <button onClick={() => setModal(false)}>Fechar</button>
      </div>
    );
  } else {
    return null;
  }
}

export default Modal;
