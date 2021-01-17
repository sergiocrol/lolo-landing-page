import { useState, useEffect } from 'react';
import Image from 'next/image';

import { workerSignUp } from '../../../services';
import useScript from '../../../hooks/useScript';

import { signupBg, signupContainer } from '../../../styles/signup.module.css';

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

const recaptchaUrl = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_KEY}`;

const SignUp = () => {
  const recaptchaStatus = useScript('recaptcha-key', recaptchaUrl);
  const [workerData, setWorkerData] = useState(initialWorkerData);
  const [error, setError] = useState('');
  const [ok, setOk] = useState('');
  const [message, setMessage] = useState('');

  console.log(recaptchaStatus);

  const validateCaptcha = () => {
    return new Promise((res, rej) => {
      grecaptcha.ready(() => {
        grecaptcha.execute(process.env.NEXT_PUBLIC_RECAPTCHA_KEY, { action: 'submit' }).then(token => {
          return res(token);
          // setWorkerData({ ...workerData, ['g-recaptcha-response']: token });
        })
      })
    })
  
  }

  const onSignUpClick = async () => {
    try {
      // window.grecaptcha.ready(() => {
      //   window.grecaptcha.execute(process.env.NEXT_PUBLIC_RECAPTCHA_KEY, { action: 'submit' }).then(token => {
      //     setWorkerData({ ...workerData, ['g-recaptcha-response']: token });
      //   });
      // });
      const token = await validateCaptcha();
      const response = await workerSignUp({ ...workerData, ['g-recaptcha-response']: token });
      setMessage(response);
    } catch (error) {
      setMessage(error);
    }
  }

  const handleChange = (event) => {
    const name = event.target.name;
    setWorkerData({ ...workerData, [name]: event.target.value });
  };

  return (
    <div className={`bg-white`}>
      <div className="flex w-screen h-screen">
        <div className={`w-1/3 bg-white relative`}>
          {/* <div className={`${signupBg} absolute`}>
            <Image
              src="/static/images/step3.png"
              width={400}
              height={400}
              quality={100}
            />
          </div> */}
          <div className={`${signupContainer} w-full h-screen bg-white shadow-xl`}>hola</div>
        </div>
        <div className={`flex-1 bg-yellow flex justify-center items-center`}>
          <div className="border-white border-2 w-10/12 ">
            <div className="flex flex-col">
              <label htmlFor="name">Nombre</label>
              <input 
                type="text"
                name="name"
                id="name"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Correo electrónico</label>
              <input 
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="contactNumber">Número de contacto</label>
              <input 
                type="number"
                name="contactNumber"
                id="contactNumber"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="addressStreet">Dirección</label>
              <input 
                type="text"
                name="addressStreet"
                id="addressStreet"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="addressNumber">Número</label>
              <input 
                type="text"
                name="addressNumber"
                id="addressNumber"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="city">Ciudad</label>
              <input 
                type="text"
                name="city"
                id="city"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="postCode">Código postal</label>
              <input 
                type="number"
                name="postCode"
                id="postCode"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="rate">Tarifa</label>
              <input 
                type="number"
                name="rate"
                id="rate"
                onChange={handleChange}
              />
            </div>
            <div className={message.error || message.message ? 'absolute text-red-700' : 'hidden' }>{JSON.stringify(message)}</div>
            <button onClick={onSignUpClick} className="bg-orange px-5 py-2 rounded-md text-white font-montserrat">
              Registro
            </button>
            { recaptchaStatus === "ready"
              ? <p className="text-gray text-xs mt-6">
                This site is protected by reCAPTCHA and the Google <br/>
                <a className="text-orange" href="https://policies.google.com/privacy">Privacy Policy</a> and
                <a className="text-orange" href="https://policies.google.com/terms"> Terms of Service</a> apply.
                </p>
              : null
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;