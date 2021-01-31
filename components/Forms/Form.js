import React, {useEffect} from 'react';
import { useForm, FormProvider } from 'react-hook-form';

const Form = ({ defaultValues, children, onSubmit, onDisabled, setClick, setVal, back }) => {
  const methods = useForm({ mode: 'onChange' });
  const { handleSubmit, errors, formState: {isValid, isDirty, dirtyFields}, formState, getValues, setValue } = methods;

  useEffect(() => {
    // console.log(dirtyFields)
    onDisabled(!isValid);
  });

  useEffect(() => {
    setVal(setValue);
  }, [back === true])

  return (
    <FormProvider {...methods} >
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
                          // register: methods.register,
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
                      // register: methods.register,
                      key: child.props.name,
                      errors
                    }
                  })
                : child;
            })
          : children}
      </form>
    </FormProvider>
  );
};

export default Form;
