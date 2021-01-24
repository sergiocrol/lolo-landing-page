import { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useIntl } from 'react-intl';

import Form from '../Form';
import FormInput from '../FormInput';
import Spinner from '../../Spinner';
import { workerSignUp } from '../../../services';

import { formInput } from '../../../styles/components.module.css';
import { dot, selectedDot } from '../../../styles/index.module.css';
import { dotSignup } from '../../../styles/signup.module.css';

const initialWorkerData = {
  name: '',
  email: '',
  contactNumber: '',
  addressStreet: '',
  addressNumber: '',
  city: '',
  postCode: '',
  rate: '',
};

const workerOptionalFields = [ 'addressFloor', 'addressDoor' ];

const WorkerSignupForm = ({ showMessage, showConfirmationPage }) => {
  const { formatMessage: f } = useIntl();
  const { formState: {isValid} } = useForm({ mode: 'onChange '});
  const [currentPage, setCurrentPage] = useState(1);
  const [workerData, setWorkerData] = useState(initialWorkerData);
  const [disabled, setDisabled] = useState(true);
  const [back, setBack] = useState(false);
  const [completedPage, setCompletedPage] = useState({pageOne: false, pageTwo: false, pageThree: false});
  const [postalCodes, setPostalCodes] = useState([]);
  const [loading, setLoading] = useState(false);

  let clickChild = null;

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

  const validateCaptcha = () => {
    return new Promise((res, rej) => {
      grecaptcha.ready(() => {
        grecaptcha.execute(process.env.NEXT_PUBLIC_RECAPTCHA_KEY, { action: 'submit' })
        .then(token => {
          return res(token);
        })
        .catch(error => {
          return res(error);
        })
      })
    })
  }

  const checkOptionalFields = (values) => {
    Object.keys(values).map(val => {
      if (values[val] === '' && workerOptionalFields.includes(val)) {
        delete values[val];
      }
    });
    return values;
  }

  const onSignUpClick = async (data) => {
    const values = clickChild();
    const formattedValues = checkOptionalFields(values);
    setWorkerData({...workerData, ...formattedValues});
    if(currentPage < 3) {
      const el = Object.keys(completedPage)[currentPage - 1];
      setCompletedPage({...completedPage, [el]: true})
      setCurrentPage(currentPage+1);
      setBack(!back);
    }else{
      try {
        setLoading(true);
        const token = await validateCaptcha();
        const response = await workerSignUp({ ...workerData, rate: data.rate, city: 'Barcelona', ['g-recaptcha-response']: token });
        setLoading(false);
        messageLogic(response);
      } catch (error) {
        setLoading(false);
        messageLogic(error);
      }
    }
  }

  const messageLogic = (mssg) => {
    if(mssg.sucess) {
      showConfirmationPage();
    } else {
      setCurrentPage(1);
      showMessage(mssg);
    }
  }

  const prevPage = (e) => {
    e.preventDefault();
    if (currentPage < 4) {
      setBack(!back);
      setCurrentPage(currentPage - 1);
    }
  }

  const checkPostCode = (value) => {
    const filteredElements = postalCodes.filter(o => Object.keys(o).some(k => o[k].toLowerCase().includes(value.toLowerCase())));
    return filteredElements.length > 0;
  }

  const populateFields = (e) => {
    if(currentPage === 1 && completedPage.pageOne) {
      e('contactNumber', workerData.contactNumber, { shouldValidate: true });
      e('email', workerData.email, { shouldValidate: true });
      e('name', workerData.name, { shouldValidate: true });
    }
    if(currentPage === 2 && completedPage.pageTwo) {
      e('addressNumber', workerData.addressNumber, { shouldValidate: true });
      e('addressStreet', workerData.addressStreet, { shouldValidate: true });
      e('postCode', workerData.postCode, { shouldValidate: true });
    }
  }

  return (
    <div className="mt-6 relative">
      <Form onSubmit={onSignUpClick} onDisabled={(isValid) => setDisabled(isValid)} setClick={click => clickChild = click} setVal={(e) => populateFields(e)} back={back}>
        {currentPage === 1 ? <FormInput name="name" label={f({ id: 'signupFormWorkerName' })} rules={{ required: f({ id: 'signupFormFieldError' }) }} hidden={currentPage !== 1} className={`${formInput}`} /> : <></>}
        {currentPage === 1 ? <FormInput type="email" name="email" label={f({ id: 'signupFormWorkerEmail' })}rules={{ required: f({ id: 'signupFormFieldError' }), pattern: {value: /\S+@\S+\.\S+/, message: f({ id: 'signupFormValidEmail' })} }} hidden={currentPage !== 1} className={`${formInput}`} /> : <></>}
        {currentPage === 1 ? <FormInput type="number" name="contactNumber" label={f({ id: 'signupFormWorkerPhone' })} rules={{ required: f({ id: 'signupFormFieldError' })}} hidden={currentPage !== 1} className={`${formInput}`} /> : <></>}
        {currentPage === 2 ? 
          <div name="container" className="flex items-center">
            <FormInput name="addressStreet" label={f({ id: 'signupFormWorkerAddressStreet' })} rules={{ required: f({ id: 'signupFormFieldError' }) }} hidden={currentPage !== 2} className={`${formInput}`} style={{width: '77.5%'}} />
            <FormInput name="addressNumber" label={f({ id: 'signupFormWorkerAddressNumber' })} rules={{ required: f({ id: 'signupFormFieldError' }) }} hidden={currentPage !== 2} className={`${formInput}`} style={{width: '27.5%', marginLeft: '5%'}} />
          </div> 
        : <></>}
        {currentPage === 2 ? 
          <div name="container" className="flex items-center">
            <FormInput name="addressFloor" label={f({ id: 'signupFormWorkerAddressFloor' })} hidden={currentPage !== 2} className={`${formInput}`} style={{width: '47.5%'}} />
            <FormInput name="addressDoor" label={f({ id: 'signupFormWorkerAddressDoor' })} hidden={currentPage !== 2} className={`${formInput}`} style={{width: '47.5%', marginLeft: '5%'}} />
          </div> 
        : <></>}
        {currentPage === 2 ? 
          <div name="container" className="flex items-center">
            <FormInput type="number" name="postCode" label={f({ id: 'signupFormWorkerPostalCode' })} rules={{ validate: value => checkPostCode(value) || f({ id: 'signupFormValidPostcode' })}} options={postalCodes} hidden={currentPage !== 2} className={`${formInput}`} style={{width: '47.5%'}} />
            <FormInput name="city" label={f({ id: 'signupFormWorkerCity' })} placeholder="Barcelona" hidden={currentPage !== 2} className={`${formInput} disabled:cursor-not-allowed`} style={{width: '47.5%', marginLeft: '5%'}} disabled />
          </div> 
        : <></>}
        {/* {currentPage === 2 ? <FormInput name="addressNumber" label="Número de portal" rules={{ required: "Address number is required" }} hidden={currentPage !== 2} className={`${formInput}`} /> : <></>} */}
        {/* {currentPage === 2 ? <FormInput type="number" name="postCode" label="Código postal" rules={{ required: "Postalcode is required" }} options={postalCodes} hidden={currentPage !== 2} className={`${formInput}`} /> : <></>} */}
        {currentPage === 3 ? 
          <div className="bg-white text-13 text-gray opacity-75 py-4 px-6 text-justify mb-6 max-w-27 flex border-t-2 border-orange shadow-md relative z-50">
            <div className="py-1">
              <svg className="fill-current h-5 w-5 text-orange mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/>
              </svg>
            </div>
            <p>{f({ id: 'signupFormWorkerRateInfo' })}</p>
            {/* <div className={`${arrowTooltip}`}></div> */}
          </div> 
        : <></> }
        {currentPage === 3 ? 
          <div name="container" className="flex items-center">
            <FormInput type="number" name="rate" label={f({ id: 'signupFormWorkerRate' })} rules={{ required: f({ id: 'signupFormFieldError' }) }} hidden={currentPage !== 3} className={`${formInput}`} style={{width: '75%'}} />
            <div className="ml-4 w-3/12 font-montserrat text-gray font-bold opacity-70 text-17">{f({ id: 'signupFormWorkerRateValue' })}</div>
          </div>
        : <></>}
        {currentPage === 3 ? <FormInput name="checkbox" style={{marginTop: '0rem', marginBottom: '4rem', lineHeight: '1rem'}} type="checkbox" label={<span className="text-13 font-sans font-thin leading-3">{f({ id: 'signupFormWorkerPrivacity' })} <a href="/" className="text-orange">{f({ id: 'signupFormWorkerPrivacityLink' })}</a></span>} rules={{ required: true }}/> : <></>}
        <div className={`flex justify-center mr-6 ${currentPage === 3 ? 'mt-10 md:mt-24' : 'mt-10' } relative`}>
          {currentPage !== 1 ? <button onClick={prevPage} hidden={false} className="absolute left-0 text-gray"><span className="text-orange text-17">&#171;</span> {f({ id: 'signupFormWorkerBack' })}</button> : null }
          <div className={`${dot} ${dotSignup} ${currentPage === 1 ? selectedDot : ''}`} />
          <div className={`${dot} ${dotSignup} ${currentPage === 2 ? selectedDot : ''}`} />
          <div className={`${dot} ${dotSignup} ${currentPage === 3 ? selectedDot : ''}`} />
        </div> 
        <div name="container" className="relative">
          {loading ? <div className="absolute bottom-0 z-50 w-full">
            <Spinner name="spinner" className="left-1/2 transform -translate-x-1/2"/>
          </div> : <div></div>}
          <FormInput 
            type='submit' 
            name="button" 
            value={currentPage === 3 ? loading ? '': f({ id: 'signupFormWorkerSendButton' }) : f({ id: 'signupFormWorkerNextButton' })} 
            hidden={false} 
            className="bg-orange text-white cursor-pointer rounded-md h-12 w-full font-montserrat text-20 disabled:opacity-50 disabled:cursor-not-allowed mt-3" 
            disabled={disabled || loading}
          />
           {/* md:w-17 */}
        </div>
      </Form>
    </div>
  )
}

export default WorkerSignupForm;