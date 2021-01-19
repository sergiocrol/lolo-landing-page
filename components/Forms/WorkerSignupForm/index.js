import { useState } from 'react';

import { workerSignUp } from '../../../services';
import Form from '../Form';
import FormInput from '../FormInput';
import useScript from '../../../hooks/useScript';

const recaptchaUrl = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_KEY}`;

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

const WorkerSignupForm = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const recaptchaStatus = useScript('recaptcha-key', recaptchaUrl);
  const [workerData, setWorkerData] = useState(initialWorkerData);
  const [message, setMessage] = useState('');

  const validateCaptcha = () => {
    return new Promise((res, rej) => {
      grecaptcha.ready(() => {
        grecaptcha.execute(process.env.NEXT_PUBLIC_RECAPTCHA_KEY, { action: 'submit' }).then(token => {
          return res(token);
        })
      })
    })
  }

  const onSignUpClick = async (data) => {
    if(currentPage < 3) {
      setCurrentPage(currentPage+1)
    }else{
      console.log(data);
    }
    // try {
    //   const token = await validateCaptcha();
    //   const response = await workerSignUp({ ...workerData, ['g-recaptcha-response']: token });
    //   setMessage(response);
    // } catch (error) {
    //   setMessage(error);
    // }
  }

  const nextPage = (e) => {
    e.preventDefault();
    if (currentPage < 3) {
      setCurrentPage(currentPage + 1);
      console.log(currentPage)
    }
  }

  const prevPage = () => {
    if (currentPage < 3) {
      setCurrentPage(currentPage - 1);
      console.log(currentPage)
    }
  }

  const handleInput = (event) => {
    const name = event.target.name;
    setWorkerData({ ...workerData, [name]: event.target.value });
  };

  return (
    <Form onSubmit={onSignUpClick}>
      {currentPage === 1 ? <FormInput name="name" label="Nombre" rules={{ required: "Name is required" }} hidden={currentPage !== 1} /> : <></>}
      {currentPage === 1 ? <FormInput name="email" label="Correo electrónico" rules={{ required: "Email is required", pattern: {value: /^\S+@\S+$/i, message: 'It must be a valid email'} }} hidden={currentPage !== 1} /> : <></>}
      {currentPage === 1 ? <FormInput type="number" name="contactNumber" label="Número de contacto" rules={{ required: "Contact number is required" }} hidden={currentPage !== 1} /> : <></>}
      {currentPage === 2 ? <FormInput name="addressStreet" label="Nombre de la calle" rules={{ required: "Address is required" }} hidden={currentPage !== 2} /> : <></>}
      {currentPage === 2 ? <FormInput name="addressNumber" label="Número de portal" rules={{ required: "Address number is required" }} hidden={currentPage !== 2} /> : <></>}
      {currentPage === 2 ? <FormInput name="postalCode" label="Código postal" rules={{ required: "Postalcode is required" }} hidden={currentPage !== 2} /> : <></>}
      <FormInput type='submit' value={currentPage === 3 ? 'Enviar' : 'Siguiente'} hidden={false} />
      {/* {
        currentPage === 3
        ? <FormInput type='submit' value='Enviar' hidden={false} />
        : <div><button onClick={(e) => nextPage(e)}>Siguiente</button> <button onClick={prevPage}>Anterior</button></div>
      } */}
      {/* <FormInput type={currentPage === 3 ? 'submit' : 'button' } onClick={nextPage} value={currentPage === 3 ? 'Enviar' : 'Siguiente'} /> */}
    </Form>
    // <div className="border-white border-2">
    //   <div className="flex flex-col">
    //     <label htmlFor="name">Nombre</label>
    //     <input 
    //       type="text"
    //       name="name"
    //       id="name"
    //       onChange={handleInput}
    //     />
    //   </div>
    //   <div className="flex flex-col">
    //     <label htmlFor="email">Correo electrónico</label>
    //     <input 
    //       type="email"
    //       name="email"
    //       id="email"
    //       onChange={handleInput}
    //     />
    //   </div>
    //   <div className="flex flex-col">
    //     <label htmlFor="contactNumber">Número de contacto</label>
    //     <input 
    //       type="number"
    //       name="contactNumber"
    //       id="contactNumber"
    //       onChange={handleInput}
    //     />
    //   </div>
    //   <div className="flex flex-col">
    //     <label htmlFor="addressStreet">Dirección</label>
    //     <input 
    //       type="text"
    //       name="addressStreet"
    //       id="addressStreet"
    //       onChange={handleInput}
    //     />
    //   </div>
    //   <div className="flex flex-col">
    //     <label htmlFor="addressNumber">Número</label>
    //     <input 
    //       type="text"
    //       name="addressNumber"
    //       id="addressNumber"
    //       onChange={handleInput}
    //     />
    //   </div>
    //   <div className="flex flex-col">
    //     <label htmlFor="city">Ciudad</label>
    //     <input 
    //       type="text"
    //       name="city"
    //       id="city"
    //       onChange={handleInput}
    //     />
    //   </div>
    //   <div className="flex flex-col">
    //     <label htmlFor="postCode">Código postal</label>
    //     <input 
    //       type="number"
    //       name="postCode"
    //       id="postCode"
    //       onChange={handleInput}
    //     />
    //   </div>
    //   <div className="flex flex-col">
    //     <label htmlFor="rate">Tarifa</label>
    //     <input 
    //       type="number"
    //       name="rate"
    //       id="rate"
    //       onChange={handleInput}
    //     />
    //   </div>
    //   <div className={message.error || message.message ? 'absolute text-red-700' : 'hidden' }>{JSON.stringify(message)}</div>
    //   <button onClick={onSignUpClick} className="bg-orange px-5 py-2 rounded-md text-white font-montserrat">
    //     Registro
    //   </button>
    //   { recaptchaStatus === "ready"
    //     ? <p className="text-gray text-xs mt-6">
    //       This site is protected by reCAPTCHA and the Google <br/>
    //       <a className="text-orange" href="https://policies.google.com/privacy">Privacy Policy</a> and
    //       <a className="text-orange" href="https://policies.google.com/terms"> Terms of Service</a> apply.
    //       </p>
    //     : null
    //   }
    // </div>
  )
}

export default WorkerSignupForm;