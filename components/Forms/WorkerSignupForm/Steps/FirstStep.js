import FormInput from '../../FormInput';
import { useIntl } from 'react-intl';

import { formInput } from '../../../../styles/components.module.css';

const FirstStep = ({ currentPage }) => {
  const { formatMessage: f } = useIntl();
  return (
    currentPage === 1
    ? <div>
        <FormInput name="name" label={f({ id: 'signupFormWorkerName' })} rules={{ required: f({ id: 'signupFormFieldError' }) }} hidden={currentPage !== 1} className={`${formInput}`} />
        <FormInput type="email" name="email" label={f({ id: 'signupFormWorkerEmail' })} rules={{ required: f({ id: 'signupFormFieldError' }), pattern: {value: /\S+@\S+\.\S+/, message: f({ id: 'signupFormValidEmail' })} }} hidden={currentPage !== 1} className={`${formInput}`} />
        <FormInput type="number" name="contactNumber" label={f({ id: 'signupFormWorkerPhone' })} rules={{ required: f({ id: 'signupFormFieldError' })}} hidden={currentPage !== 1} className={`${formInput}`} />
      </div>
    : <></>
  );
};

export default FirstStep;