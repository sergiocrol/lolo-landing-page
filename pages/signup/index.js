import { useState } from 'react';
import {
  btnForm,
  btnFormTeal,
  field,
  fieldGroup,
  fieldLabel,
  link,
  linkGrey,
} from '../../styles/components.module.css';

const serverUrl = 'http://localhost:4003';

const initialWorkerData = {
  name: '',
  email: '',
  contactNumber: '',
  addressStreet: '',
  addressNumber: '',
  city: '',
  postCode: '',
  rate: '',
};

const Signup = () => {
  const [workerData, setWorkerData] = useState(initialWorkerData);

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(workerData),
  };

  const onSigUpClick = async () => {
    const response = await fetch(`${serverUrl}/signup`, requestOptions);
    const data = await response.json();
    console.log(data);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    setWorkerData({ ...workerData, [name]: event.target.value });
  };

  console.log(workerData);

  return (
    <div className="flex items-center h-screen w-full bg-teal-lighter">
      <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
        <h1 className="block w-full text-center text-grey-darkest mb-6">
          Sign Up
        </h1>
        <div className="mb-4 md:flex md:flex-wrap md:justify-between">
          <div className={`${fieldGroup} mb-4 md:w-full`}>
            <label className={fieldLabel} for="name">
              Name
            </label>
            <input
              className={`${field}`}
              type="text"
              name="name"
              id="name"
              onChange={handleChange}
            />
          </div>
          <div className={`${fieldGroup} mb-4 md:w-full`}>
            <label className={fieldLabel} for="email">
              Email
            </label>
            <input
              className={field}
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div className={`${fieldGroup} mb-4 md:w-full`}>
            <label className={`${fieldLabel}`} for="contactNumber">
              Contact Number
            </label>
            <input
              className={`${field}`}
              type="text"
              name="contactNumber"
              id="contactNumber"
              onChange={handleChange}
            />
          </div>
          <div className={`${fieldGroup} mb-4 md:w-9/12`}>
            <label className={fieldLabel} for="addressStreet">
              Address Street
            </label>
            <input
              className={`${field} md:mr-2`}
              type="text"
              name="addressStreet"
              id="addressStreet"
              onChange={handleChange}
            />
          </div>
          <div className={`${fieldGroup} mb-4 md:w-3/12`}>
            <label className={`${fieldLabel} md:ml-2`} for="addressNumber">
              Number
            </label>
            <input
              className={`${field} md:ml-2`}
              type="number"
              name="addressNumber"
              id="addressNumber"
              onChange={handleChange}
            />
          </div>
          <div className={`${fieldGroup} mb-4 md:w-1/2`}>
            <label className={fieldLabel} for="city">
              City
            </label>
            <input
              className={`${field} md:mr-2`}
              type="text"
              name="city"
              id="city"
              onChange={handleChange}
            />
          </div>
          <div className={`${fieldGroup} mb-4 md:w-1/2`}>
            <label className={`${fieldLabel} md:ml-2`} for="postCode">
              Postcode
            </label>
            <input
              className={`${field} md:ml-2`}
              type="number"
              name="postCode"
              id="postCode"
              onChange={handleChange}
            />
          </div>
          <div className={`${fieldGroup} mb-4 md:w-full`}>
            <label className={`${fieldLabel}`} for="rate">
              Rate
            </label>
            <input
              className={`${field}`}
              type="number"
              name="rate"
              id="rate"
              onChange={handleChange}
            />
          </div>
          <button
            className={`${btnForm} ${btnFormTeal} mt-4 mx-auto`}
            onClick={() => onSigUpClick()}
          >
            Create Account
          </button>
        </div>
        <a className={`${link} ${linkGrey} w-full text-center`} href="/login">
          Already have an account?
        </a>
      </div>
    </div>
  );
};

export default Signup;
