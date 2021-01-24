import { formInputLabel, formErrorLabel } from '../../styles/components.module.css';

const FormSelect = ({ register, label, options, errors, name, rules, hidden, ...otherProps }) => {
  return (
    <div className={`${ hidden ? 'hidden' : 'flex flex-col' }`}>
      <label htmlFor={name} className={formInputLabel}>{label}</label>
      <select 
        name={name} 
        ref={register ? register(rules) : register} 
        style={{ borderLeftWidth: errors && errors[name] ? '10px' : '', borderLeftColor: errors && errors[name] ? '#FF8B81' : '' }}
        {...otherProps}
      >
        {options.map(value => (
          <option key={value} value={value}>
            {value.code}
          </option>
        ))}
      </select>
      <p className={`${formErrorLabel} h-5`}>
        {name && errors ? errors[name]?.message : null}
      </p>
    </div>
  );
};

export default FormSelect;