import { Fragment, useState } from 'react';

import { CARER, CLEANER } from '../../helpers/constants';

import { modalWorkerType, modalWorkerTypeCleaner, modalWorkerTypeCarer, modalWorkerTitle } from '../../styles/signup.module.css';

const ModalWorker = ({ type }) => {
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
              <h1 className={modalWorkerTitle}>Las tareas de cuidados incluyen:</h1>
              <div className="mt-6">
                <p>• dsvgsdvbgsfdbgvsfg</p>
                <p>• dsvgsdvbgsfdbgvsfg</p>
                <p>• dsvgsdvbgsfdbgvsfg</p>
                <p>• dsvgsdvbgsfdbgvsfg</p>
                <p>• dsvgsdvbgsfdbgvsfg</p>
                <p>• dsvgsdvbgsfdbgvsfg</p>
                <p>• dsvgsdvbgsfdbgvsfg</p>
              </div>
            </div>
          : <div className="mx-4">
              <h1 className={modalWorkerTitle}>Las tareas de limpieza incluyen:</h1>
              <div className="mt-6">
                <p>• ddfgdfgdfggdf</p>
                <p>• ddfgdfgdfggdf</p>
                <p>• ddfgdfgdfggdf</p>
                <p>• ddfgdfgdfggdf</p>
              </div>
            </div>
        }
      </div>
    </Fragment>
  );
};

export default ModalWorker;