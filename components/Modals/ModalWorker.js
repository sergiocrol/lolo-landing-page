import { Fragment, useState } from 'react';
import { useIntl } from 'react-intl';

import { CARER, CLEANER } from '../../helpers/constants';

import { modalWorkerType, modalWorkerTypeCleaner, modalWorkerTypeCarer, modalWorkerTitle } from '../../styles/signup.module.css';

const ModalWorker = ({ type }) => {
  const { formatMessage: f } = useIntl();
  const [workerType, setWorkerType] = useState(type);

  return (
    <Fragment>
      <div className="w-full h-16 flex border-b-4 border-orange mt-4">
        <span onClick={() => setWorkerType(CARER)} className={`${modalWorkerType} ${workerType === CARER ? `opacity-100 ${modalWorkerTypeCarer}` : 'opacity-50'}`}>Cuidados</span>
        <span onClick={() => setWorkerType(CLEANER)} className={`${modalWorkerType} ${workerType === CLEANER ? `opacity-100 ${modalWorkerTypeCleaner}` : 'opacity-50'}`}>Limpieza</span>
      </div>
      <div className="bg-white h-80 shadow-md"> 
        {
          workerType === CARER 
          ? <div className="mx-4">
              <h1 className={modalWorkerTitle}>{f({ id: 'carerFunctions' })}</h1>
              <div className="mt-6">
                <p className="my-3 ml-3 text-17"><span className="text-orange mr-2">&#x2756;</span>{f({ id: 'hygiene' })}</p>
                <p className="my-3 ml-3 text-17"><span className="text-orange mr-2">&#x2756;</span>{f({ id: 'medicalControl' })}</p>
                <p className="my-3 ml-3 text-17"><span className="text-orange mr-2">&#x2756;</span>{f({ id: 'homework' })}</p>
                <p className="my-3 ml-3 text-17"><span className="text-orange mr-2">&#x2756;</span>{f({ id: 'nutrition' })}</p>
                <p className="my-3 ml-3 text-17"><span className="text-orange mr-2">&#x2756;</span>{f({ id: 'friendship' })}</p>
                <p className="my-3 ml-3 text-17"><span className="text-orange mr-2">&#x2756;</span>{f({ id: 'Stimulation' })}</p>
              </div>
            </div>
          : <div className="mx-4">
              <h1 className={modalWorkerTitle}>{f({ id: 'cleanerFunctions' })}</h1>
              <div className="mt-6">
                <p className="my-3 ml-3 text-17"><span className="text-orange mr-2">&#x2756;</span>{f({ id: 'iron' })}</p>
                <p className="my-3 ml-3 text-17"><span className="text-orange mr-2">&#x2756;</span>{f({ id: 'laundry' })}</p>
                <p className="my-3 ml-3 text-17"><span className="text-orange mr-2">&#x2756;</span>{f({ id: 'bathroom' })}</p>
                <p className="my-3 ml-3 text-17"><span className="text-orange mr-2">&#x2756;</span>{f({ id: 'kitchen' })}</p>
                <p className="my-3 ml-3 text-17"><span className="text-orange mr-2">&#x2756;</span>{f({ id: 'commonZones' })}</p>
              </div>
            </div>
        }
      </div>
    </Fragment>
  );
};

export default ModalWorker;