import {useState} from 'react';

import Form from '../Form';
import FormInput from '../FormInput';
import Spinner from '../../Spinner';

import { formInput } from '../../../styles/components.module.css';
import { dot, selectedDot } from '../../../styles/index.module.css';
import { dotSignup } from '../../../styles/signup.module.css';

const UserSignupForm = () => {
  const [disabled, setDisabled] = useState(true);
  const [back, setBack] = useState(false);
  const [loading, setLoading] = useState(false);

  let clickChild = null;

  const onSignUpClick = async (data) => {
    console.log(data);
  }

  const populateFields = (e) => {
   console.log('populate');
  }

  return (
    <div className="mt-6 relative">
      <Form onSubmit={onSignUpClick} onDisabled={(isValid) => setDisabled(isValid)} setClick={click => clickChild = click} setVal={(e) => populateFields(e)} back={back}>
        <FormInput name="email" name="email" label="Correo electrónico" rules={{ required: 'Email is required', pattern: {value: /\S+@\S+\.\S+/, message: 'Formato de email incorrecto'} }} className={`${formInput}`} />
        <FormInput name="password" name="password" label="Contraseña" placeholder="+6 caracteres" rules={{ required: 'Password is required' }} className={`${formInput}`} />
        {loading ? <div className="absolute bottom-0 z-50 w-full">
            <Spinner name="spinner" className="left-1/2 transform -translate-x-1/2"/>
          </div> : <div></div>}
        <FormInput 
            type='submit' 
            name="button" 
            value='Enviar' 
            hidden={false} 
            className="bg-orange text-white cursor-pointer rounded-md h-12 w-full font-montserrat text-20 disabled:opacity-50 disabled:cursor-not-allowed mt-24" 
            disabled={disabled || loading}
          />
      </Form>
    </div>
  );
};

export default UserSignupForm;