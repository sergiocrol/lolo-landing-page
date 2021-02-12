import { Fragment } from "react";
import ReactDOM from 'react-dom';
import { ConnectForm } from "../Forms/FormContext";

import { modalBg, modalWindow } from '../../styles/index.module.css';

const Modal = ({ isShowing, hide, component: Component }) => isShowing ? ReactDOM.createPortal(
  <Fragment>
    <div className={`${modalBg} fixed top-0 left-0 z-50 w-screen h-screen bg-black opacity-70`} />
    <div className={`${modalWindow} fixed flex justify-center items-center top-0 left-0 z-30 w-full h-full overflow-x-hidden overflow-y-auto outline-none`} aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className={`${modalWindow} bg-yellow relative my-7 mx-auto rounded-sm p-8 h-80 max-h-36 w-11/12 max-w-26`}>
        <div className="flex justify-center absolute top-0 right-0 transform -translate-y-1 translate-x-1 w-16 h-8 bg-orange shadow-md">
          <button type="button" data-dismiss="modal" aria-label="Close" onClick={hide} className="text-15 w-full font-bold leading-4 text-white opacity-75 cursor-pointer border-none">
            <span aria-hidden="true">cerrar</span>
          </button>
        </div>
        {Component}
      </div>
    </div>
  </Fragment>, document.body
) : null;

export default Modal;