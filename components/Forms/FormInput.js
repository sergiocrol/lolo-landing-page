import {useState} from 'react';

import { ConnectForm } from './FormContext';

import { formInputLabel, formErrorLabel, scrollCustom, checkmark } from '../../styles/components.module.css';

const FormInput = ({ /*register,*/ label, /*errors,*/ name, rules, hidden, options, style ,...otherProps }) => {
  const [elements, setElements] = useState([]);
  const [selectedElement, setSelectedElement] = useState(null);
  const [triggerValidation, setTriggerValidation] = useState(false);
  
  const handleInput = (e) => {
    const str = e.target.value;
    if(str === '') {
      setElements([]);
      return
    }
    const filteredElements = options.filter(o => Object.keys(o).some(k => o[k].toLowerCase().includes(str.toLowerCase())));
    setElements(filteredElements || []);
  }

  const selectValue = (e) => {
    setElements([]);
    setTriggerValidation(e);
    document.getElementById(name).value = e;
  }

  const keyPressEvent = (e) => {
    setSelectedElement(null);
    if(e.key === 'Enter'){
      e.preventDefault();
    }
  }

  return (
    <ConnectForm>
      {({register, errors, trigger}) => {
        {triggerValidation ? trigger('postCode') : null }
        return(
          <div className={`${ hidden ? 'hidden' : 'flex' } ${ otherProps.type === 'checkbox' ? ` flex-row-reverse justify-end items-center` : /*otherProps.type === 'radio' ? 'w-full' :*/ 'flex-col'} relative`} style={style}>
            {otherProps.type === 'radio' ? null : <label htmlFor={name} className={`${formInputLabel} ${otherProps.type === 'checkbox' ? 'pl-6 ml-0 important'  : ''}`}>{label || <span className="opacity-0">Otro</span>}</label>}
            <input 
              type="text"
              name={name}
              id={name}
              onChange={options ? (e) => handleInput(e) : null}
              onKeyPress={options ? (e) => keyPressEvent(e) : null}
              ref={register ? register(rules) : register}
              style={{ borderLeftWidth: errors && errors[name] ? '10px' : '', borderLeftColor: errors && errors[name] ? '#FF8B81' : '', width: otherProps.type === 'radio' ? '100%' : '' }}
              {...otherProps}
            />
            {otherProps.type === 'checkbox' ? <span htmlFor={name} className={checkmark}></span> : null }
            {options && elements.length > 0 ? <ul className={`${scrollCustom} h-auto max-h-10 bg-white overflow-y-auto absolute w-full top-0 z-50 border-gray border-opacity-25 border-r border-l border-b rounded-br-md rounded-bl-md`} style={{top: '75px'}}>
              {elements.map((el, index) => <li className={`h-10 pl-2 flex items-center text-gray tracking-wide cursor-pointer ${selectedElement === index ? 'bg-indigo-100 even:bg-indigo-100 !important' : 'even:bg-red-100'}`} onClick={() => selectValue(el.label)} key={index}>{el.label}</li>)}
            </ul> : null}
            {otherProps.type === 'radio'
              ? null
              : <p className={`${formErrorLabel} h-5`}>
                  {name && errors ? errors[name]?.message : null}
                </p>
            }
          </div>
        )}
    }
    </ConnectForm>
  );
};

export default FormInput;