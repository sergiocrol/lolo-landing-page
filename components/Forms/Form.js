import React from 'react';
import { useForm } from 'react-hook-form';

const Form = ({ defaultValues, children, onSubmit }) => {
  const methods = useForm({ mode: 'onChange' });
  const { handleSubmit, errors } = methods;
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {Array.isArray(children)
        ? children.map(child => {
            return child.props.name
              ? React.createElement(child.type, {
                  ...{
                    ...child.props,
                    register: methods.register,
                    key: child.props.name,
                    errors
                  }
                })
              : child;
          })
        : children}
    </form>
  );
};

export default Form;
