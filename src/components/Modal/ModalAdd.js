import React from 'react';
// Necesitamos ReactDOM para renderizar nuestro modal en el DOM
import ReactDOM from 'react-dom';
import './ModalAdd.css';



function ModalAdd({setOpenModalChecked}) {
    const onCancel = () => {
        setOpenModalChecked(false);
      };
  // ReactDom tiene este método para crear portales
  return ReactDOM.createPortal(
    <div className="ModalChecked">
            PLANTAAGREGADA √√√√√√
            <button className="cancelModalAdd" type="button" onClick={onCancel}>
            xxxx
          </button>
    </div>,
    document.getElementById('modal')
  );
}

export { ModalAdd };
