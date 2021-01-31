import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";

import FormInput from '../../FormInput';
import { useIntl } from 'react-intl';

import { formInput } from '../../../../styles/components.module.css';


const SecondStep = ({ currentPage }) => {
  const [postalCodes, setPostalCodes] = useState([]);
  const { formatMessage: f } = useIntl();

  useEffect(() => {
    let postCodeList = [];
    for(let code = 8000; code < 9000; code++) {
      const newPostCode = {
        label: `0${code}`,
        value: `barcelona`
      }
      postCodeList.push(newPostCode);
    } 
    setPostalCodes(postCodeList);
  }, []);

  const checkPostCode = (value) => {
    // const filteredElements = postalCodes.filter(o => Object.keys(o).some(k => o[k].toLowerCase().includes(value.toLowerCase())));
    const filteredElements = postalCodes.filter(o => Object.keys(o).some(k => o[k].toLowerCase() === value.toLowerCase()));
    return filteredElements.length > 0;
  }

  return (
    currentPage === 2 ? 
      <div>
        <div className="bg-white text-13 text-gray opacity-75 py-4 px-6 text-justify mb-6 flex border-t-2 border-orange shadow-md relative z-50">
          <div className="py-1">
            <svg className="fill-current h-5 w-5 text-orange mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/>
            </svg>
          </div>
          <p className="md:text-15">{f({ id: 'signupFormWorkerAddressInfo' })}</p>
        </div> 
        <div name="container" className="flex items-center">
          <FormInput name="addressStreet" label={f({ id: 'signupFormWorkerAddressStreet' })} rules={{ required: f({ id: 'signupFormFieldError' }) }} hidden={currentPage !== 2} className={`${formInput}`} style={{width: '77.5%'}} />
          <FormInput name="addressNumber" label={f({ id: 'signupFormWorkerAddressNumber' })} rules={{ required: f({ id: 'signupFormFieldError' }) }} hidden={currentPage !== 2} className={`${formInput}`} style={{width: '27.5%', marginLeft: '5%'}} />
        </div> 
        <div name="container" className="flex items-center">
          <FormInput name="addressFloor" label={f({ id: 'signupFormWorkerAddressFloor' })} hidden={currentPage !== 2} className={`${formInput}`} style={{width: '47.5%'}} />
          <FormInput name="addressDoor" label={f({ id: 'signupFormWorkerAddressDoor' })} hidden={currentPage !== 2} className={`${formInput}`} style={{width: '47.5%', marginLeft: '5%'}} />
        </div> 
        <div name="container" className="flex items-center">
          <FormInput type="number" name="postCode" label={f({ id: 'signupFormWorkerPostalCode' })} rules={{ validate: value => checkPostCode(value) || f({ id: 'signupFormValidPostcode'}), required: f({ id: 'signupFormFieldError' })}} options={postalCodes} className={`${formInput}`} style={{width: '47.5%'}} />
          <FormInput name="city" label={f({ id: 'signupFormWorkerCity' })} placeholder="Barcelona" hidden={currentPage !== 2} className={`${formInput} disabled:cursor-not-allowed`} style={{width: '47.5%', marginLeft: '5%'}} disabled />
        </div>
      </div> 
    : <></>
  );
};

export default SecondStep;