import { ConnectForm } from './FormContext';

import { formInputLabel, formErrorLabel, formSelect } from '../../styles/components.module.css';

const FormSelect = ({ register, label, options, errors, name, rules, hidden, isOther, ...otherProps }) => {
  return (
    <ConnectForm>
    {({register, errors, trigger}) => {
      return(
        <div className={`${ hidden ? 'hidden' : 'flex flex-col w-full' }`}>
          <label htmlFor={name} className={formInputLabel}>{label}</label>
          <div>
            <select 
              name={name} 
              ref={register ? register(rules) : register} 
              style={{ borderLeftWidth: errors && errors[name] ? '10px' : '', borderLeftColor: errors && errors[name] ? '#FF8B81' : '', WebkitAppearance: 'none' }}
              onChange={(value) => value.currentTarget.selectedIndex === options?.length - 1 ? isOther(true) : isOther(false)}
              {...otherProps}
            >
              {options.map(value => (
                <option key={value.name} value={value.name} className="text-black">
                  {value.name}
                </option>
              ))}
            </select>
          </div>
          <p className={`${formErrorLabel} h-5`}>
            {name && errors ? errors[name]?.message : null}
          </p>
        </div>
      )}
    }
    </ConnectForm>
  );
};

export default FormSelect;