import { useState } from 'react';
import { useIntl } from 'react-intl';

import useModal from '../../hooks/useModal';
import Modal from '../Modals/Modal';
import ModalCookies from '../Modals/ModalCookies';

import { modalWindow, modalBg } from '../../styles/index.module.css';

const CookieConsent = () => {
  const {isShowing, toggle} = useModal();
  const { formatMessage: f } = useIntl();
  const [hideModal, setHideModal] = useState(false);

  const showModal = () => {
    toggle();
  }

  const cookieConsent = () => {
    localStorage.setItem('cookieConsent', 'true');
    setHideModal(true);
  }

  return (
    <div className={`${modalBg} ${hideModal ? 'hidden' : 'block' } fixed bottom-0 w-screen h-auto z-50`}>
      <Modal isShowing={isShowing} hide={toggle} component={<ModalCookies  />} />
      <div className="container px-4 md:px-8 flex flex-col max-w-53 bg-white rounded-md py-3 mb-4 shadow-lg">
        <p className="text-gray text-13 text-left md:text-17">
        {f({ id: 'cookieConsentMessage'}, 
        {link: <span className="text-orange font-bold cursor-pointer" onClick={showModal}>{f({ id: 'cookieConsentLink'})}</span>} )}
        </p>
        <p className="text-center my-2">
          <span className="py-2 px-6 bg-orange hover:bg-red-500 text-white rounded-md font-bold cursor-pointer" onClick={cookieConsent}>{f({ id: 'cookieConsentButton' })}</span>
        </p>
      </div>
    </div>
  );
};

export default CookieConsent;