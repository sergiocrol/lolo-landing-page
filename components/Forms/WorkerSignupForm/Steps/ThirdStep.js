import { useState } from 'react';
import { useIntl } from 'react-intl';

import FormInput from '../../FormInput';
import FormSelect from '../../FormSelect';
import CaringIcon from '../../../Icons/CaringIcon';
import CleaningIcon from '../../../Icons/CleaningIcon';
import { CLEANER, CARER } from '../../../../helpers/constants';

import { formInput, formInputLabel } from '../../../../styles/components.module.css';

const ThirdStep = ({ currentPage }) => {
  const [selectedType, setSelectedType] = useState(CARER);
  const [showEditable, setShowEditable] = useState(false);
  const { formatMessage: f } = useIntl();
  const options = [
    {name:'Google'}, 
    {name: 'Facebook'}, 
    {name: f({ id: 'signupFormWorkerFindOther' }), editable: true}
  ]

  return (
    currentPage === 3 ? 
      <div>
        <div className="bg-white text-13 text-gray opacity-75 py-4 px-6 text-left mb-6 flex border-t-2 border-orange shadow-md relative z-50">
          <div className="py-1">
            <svg className="fill-current h-5 w-5 text-orange mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/>
            </svg>
          </div>
          <p>{f({ id: 'signupFormWorkerRateInfo' })}<span className="text-orange font-bold"> {f({ id: 'signupFormWorkerRateInfoCaring' })}</span> {f({ id: 'signupFormWorkerRateInfoConnection' })}<span className="text-orange font-bold"> {f({ id: 'signupFormWorkerRateInfoCleaning' })}</span></p>
        </div> 
        <div name="container" className="flex relative">
          <div name="label" className={`${formInputLabel} absolute`}>{f({ id: 'signupFormWorkerTypeTitle' })}</div>
          <div name="workerType" label="Funciones" className="flex mt-6 md:mt-8" style={{width: '77.5%'}} >
            <div className={`w-1/2 flex bg-white relative h-12 ${selectedType === CARER ? 'opacity-100' : 'opacity-70'}`}>
              <div className={`w-1 ${selectedType === CARER ? 'bg-orange' : '' }`}></div>
              <FormInput id="radio1" type="radio" name="workerType" className="w-full h-full" style={{width: '100%', height: '100%', visibility: 'hidden'}} value={CARER} defaultChecked={selectedType === CARER} onClick={() => setSelectedType(CARER)} />
              <label htmlFor="radio1" className="absolute w-full h-full cursor-pointer flex justify-center items-center font-montserrat text-lightGray">
                <CaringIcon className="hidden sm:flex" color={selectedType === CARER ? '#F78B81' : '#A4B2C3'} style={{marginRight: '5px', marginTop: '2px'}} width={18} height={18}  />
                <span className="sm:text-20">cuidados</span>
              </label>
            </div>
            <div className={`w-1/2 flex bg-white relative h-12 ml-3 ${selectedType === CLEANER ? 'opacity-100' : 'opacity-70' }`}>
              <div className={`w-1 ${selectedType === CLEANER ? 'bg-orange' : '' }`}></div>
              <FormInput id="radio2" type="radio" name="workerType" className="w-full h-full" style={{width: '100%', height: '100%', visibility: 'hidden'}} value={CLEANER} onClick={() => setSelectedType(CLEANER)}/>
              <label htmlFor="radio2" className="absolute w-full h-full cursor-pointer flex justify-center items-center font-montserrat text-lightGray opacity-70">
                <CleaningIcon className="hidden sm:flex" color={selectedType === CLEANER ? '#F78B81' : '#A4B2C3' } style={{marginRight: '5px', marginBottom: '2px'}} width={18} height={18}  />
                <span className="sm:text-20">limpieza</span>
              </label>
            </div>
            {/* <div className={`${formInput} w-1/2`}>Cuidados</div>
            <div className={`${formInput} w-1/2 ml-2`}>Limpieza</div> */}
          </div>
          {/* <FormInput name="addressStreet" label={f({ id: 'signupFormWorkerTypeTitle' })} rules={{ required: f({ id: 'signupFormFieldError' }) }} className={`${formInput}`} style={{width: '77.5%'}} /> */}
          <FormInput type="number" name="rate" label={f({ id: 'signupFormWorkerRate' })} rules={{ required: f({ id: 'signupFormFieldError' }) }} placeholder={f({ id: 'signupFormWorkerRateValue' })} hidden={currentPage !== 3} className={`${formInput}`} style={{width: '27.5%', marginLeft: '5%'}} />
        </div>
        <div name="container" className="flex relative">
          <div name="label" className={`${formInputLabel} absolute`}>{f({ id: 'signupFormWorkerFindTitle' })}</div>
          <FormSelect name="contactMedia" options={options} label={<span className="opacity-0">{f({ id: 'signupFormWorkerFindOtherPlaceholder' })}</span>} className={`${formInput} text-gray font-bold text-17 text-opacity-50`} style={{width: '100%' }} isOther={(val) => setShowEditable(val)} /> 
          {showEditable ? <FormInput name="otherOption" className={`${formInput}`} style={{width: '100%', marginLeft: '5%'}} placeholder={f({ id: 'signupFormWorkerFindOtherPlaceholder' })} /> : <div className="hidden"></div> }
        </div>
        <FormInput name="checkboxPermission" style={{marginTop: '0rem', marginBottom: '1rem', lineHeight: '1rem' }} type="checkbox" label={<span className="text-13 font-sans font-thin">{f({ id: 'signupFormWorkerWorkPermission' })}</span>} rules={{ required: true }}/>
        <FormInput name="checkbox" style={{marginTop: '0rem', marginBottom: '4rem', lineHeight: '1rem'}} type="checkbox" label={<span className="text-13 font-sans font-thin leading-3">{f({ id: 'signupFormWorkerPrivacity' })} <a href="/" className="text-orange">{f({ id: 'signupFormWorkerPrivacityLink' })}</a></span>} rules={{ required: true }}/>
      </div>
    : <></>
  );
};

export default ThirdStep;