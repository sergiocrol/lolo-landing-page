import {spinnerDot} from '../../styles/signup.module.css';

const Spinner = (props) => {
  return (
    <div className={`${spinnerDot} ${props.className}`}><div></div><div></div><div></div><div></div></div>
  );
};

export default Spinner;