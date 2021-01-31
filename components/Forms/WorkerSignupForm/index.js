import { useState, useEffect } from 'react';
import { useIntl } from 'react-intl';

import Form from '../Form';
import FormInput from '../FormInput';
import Spinner from '../../Spinner';
import { workerSignUp } from '../../../services';
import { CARER } from '../../../helpers/constants/index';
import FirstStep from './Steps/FirstStep';
import SecondStep from './Steps/SecondStep';
import ThirdStep from './Steps/ThirdStep';

import { dot, selectedDot } from '../../../styles/index.module.css';
import { dotSignup } from '../../../styles/signup.module.css';

const initialWorkerData = {
  name: '',
  email: '',
  contactNumber: '',
  addressStreet: '',
  addressNumber: '',
  addressFloor: '',
  addressDoor: '',
  city: 'Barcelona',
  postCode: '',
  workerType: CARER,
  rate: '',
  contactMedia: 'Google',
  otherOption: ''
};

const WorkerSignupForm = ({ showMessage, showConfirmationPage, setPage }) => {
  const { formatMessage: f } = useIntl();
  const [currentPage, setCurrentPage] = useState(1);
  const [disabled, setDisabled] = useState(true);
  const [back, setBack] = useState(false);
  const [completedPage, setCompletedPage] = useState({pageOne: false, pageTwo: false, pageThree: false});
  const [loading, setLoading] = useState(false);
  const [finalValues, setFinalValues] = useState({});

  useEffect(() => {
    setPage(currentPage);
  }, [currentPage])

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

  const formatFields = (data) => {
    const newValues = Object.keys(data).filter(el => Object.keys(initialWorkerData).some((val) => el === val));
    let vals = {};
    for (const property in data) {
      if (newValues.includes(property) && data[property]) {
        vals[property] = data[property];
      }
    }
    if(vals.contactMedia !== 'Facebook' && vals.contactMedia !== 'Google'){
      vals.contactMedia = vals.otherOption || 'Other';
      delete vals.otherOption;
    };
    setFinalValues({...finalValues, ...vals, city: 'Barcelona'});
    return {...finalValues, ...vals, city: 'Barcelona'};
  }

  const onSignUpClick = async (data) => {
    const finalData = formatFields(data);
    if(currentPage < 3) {
      const el = Object.keys(completedPage)[currentPage - 1];
      setCompletedPage({...completedPage, [el]: true})
      setCurrentPage(currentPage+1);
      setBack(!back);
    }else{
      try {
        setLoading(true);
        const token = await validateCaptcha();
        const response = await workerSignUp({ ...finalData, ['g-recaptcha-response']: token });
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

  const populateFields = (e) => {
    if(currentPage === 1 && completedPage.pageOne) {
      e('contactNumber', finalValues.contactNumber, { shouldValidate: true });
      e('email', finalValues.email, { shouldValidate: true });
      e('name', finalValues.name, { shouldValidate: true });
    }
    if(currentPage === 2 && completedPage.pageTwo) {
      e('addressNumber', finalValues.addressNumber, { shouldValidate: true });
      e('addressStreet', finalValues.addressStreet, { shouldValidate: true });
      e('addressDoor', finalValues.addressDoor);
      e('addressFloor', finalValues.addressFloor);
      e('postCode', finalValues.postCode, { shouldValidate: true });
    }
  }

  return (
    <div className="mt-4 relative">
      <Form onSubmit={onSignUpClick} onDisabled={(isValid) => setDisabled(isValid)} setVal={(e) => populateFields(e)} back={back}>
        <FirstStep currentPage={currentPage} />
        <SecondStep currentPage={currentPage} />
        <ThirdStep currentPage={currentPage} />
        <div className={`flex justify-center mr-6 ${currentPage === 3 ? 'mt-10 md:mt-20' : 'mt-10' } relative`}>
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
        </div>
      </Form>
    </div>
  )
}

export default WorkerSignupForm;