const FormInput = ({ register, label, errors, name, rules, hidden, ...otherProps }) => {
  console.log(rules)
  return (
    <div className={`${ hidden ? 'hidden' : 'flex flex-col' }`}>
      <label htmlFor={name}>{label}</label>
      <input 
        type="text"
        name={name}
        id={name}
        // onChange={handleInput}
        ref={register ? register(rules) : register}
        {...otherProps}
      />
      <p className="h-5">
        {name && errors ? errors[name]?.message : null}
      </p>
    </div>
  );
};

export default FormInput;