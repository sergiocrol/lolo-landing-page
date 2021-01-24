import React, {useEffect} from 'react';
import { useForm } from 'react-hook-form';

const Form = ({ defaultValues, children, onSubmit, onDisabled, setClick, setVal, back }) => {
  const methods = useForm({ mode: 'onChange' });
  const { handleSubmit, errors, formState: {isValid, isDirty, dirtyFields}, formState, getValues, setValue } = methods;

  useEffect(() => {
    // console.log(dirtyFields)
    onDisabled(!isValid);
  });

  useEffect(() => {
    setClick(getValues);
  }, [onDisabled]);

  useEffect(() => {
    setVal(setValue);
  }, [back === true])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {Array.isArray(children)
        ? children.map((child, index) => {
            return child.props.name
              ? child.props.name === 'container'
                ? <div key={index} className={child.props.className}>
                  {child.props.children.map((childElement, idx) => {
                    return childElement.type !== 'div'
                    ? React.createElement(childElement.type, {
                      ...{
                        ...childElement.props,
                        register: methods.register,
                        key: childElement.props.name,
                        errors
                      }
                    })
                    : childElement
                  })}
                  </div>
                : React.createElement(child.type, {
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