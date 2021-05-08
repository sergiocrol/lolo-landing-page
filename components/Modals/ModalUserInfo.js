import { Fragment } from 'react';
import { useIntl } from 'react-intl';

import { infoRequestTitle, infoRequestSubtitle, infoRequestFooter } from '../../styles/index.module.css';
import { scrollCustom } from '../../styles/components.module.css';

const ModalUserInfo = () => {
  const { formatMessage: f } = useIntl();
  return (
    <Fragment>
      <div className={`${scrollCustom} bg-white h-full shadow-md overflow-y-scroll overflow-x-hidden text-13 text-left px-3`}> 
        <h1 className={infoRequestTitle}>{f({ id: 'infoRequestModalTitle' })}</h1>
        <h4 className="text-center font-bold text-gray mb-4">www.milolo.es</h4>
        <p className={infoRequestSubtitle}>{f({ id: 'infoRequestSubtitle' })}</p>
        <p className="flex mt-4 mx-2 text-gray">
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
              stroke="#E26767"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01"
              stroke="#E26767"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="flex-1 ml-3 text-gray">{f({ id: 'infoRequestFirstStep' })}</span>
        </p>
        <p className="flex mt-4 mx-2 text-gray">
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35M11 8v6M8 11h6"
              stroke="#E26767"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="flex-1 ml-3">{f({ id: 'infoRequestSecondStep' })}</span>
        </p>
        <p className="flex mt-4 mx-2">
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M8.5 11a4 4 0 100-8 4 4 0 000 8zM17 11l2 2 4-4"
              stroke="#E88282"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="flex-1 ml-3 text-gray">{f({ id: 'infoRequestThirdStep' })}</span>
        </p>
        <h2 className={`${infoRequestFooter} mt-4`}>{f({ id: 'infoRequestModalFooter' })}</h2>
      </div>
    </Fragment>
  );
};

export default ModalUserInfo;