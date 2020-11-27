import { useEffect, useState } from 'react';

import {
  phone,
  phoneFrame,
  footer,
  notch,
  rec1,
  rec2,
  rec3,
  rec4,
  rec5,
  rec6,
} from '../../styles/icons.module.css';

function Phone({ selectedIndex }) {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setDate(+new Date())
  }, [selectedIndex]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="25 20 450 450"
      className={phone}
      key={date}
    >
      <path
        className={phoneFrame}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={20}
        d="M339 435H162c-7 0-13-6-13-13V82c0-7 6-13 13-13h177c7 0 13 6 13 13v340c0 7-6 13-13 13z"
      />
      <path
        className={footer}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={11.513}
        d="M201 413h96"
      />
      <path
        className={notch}
        d="M190 71h4c5 0 10 6 12 12v-2c0 3 4 8 8 8h70c4 0 7-2 8-6v-2c2-6 6-10 12-10h5"
      />
      <path className={rec1} fill="#8583aa" d="M167 112h166v68H167z" />
      <path className={rec2} fill="#8583aa" d="M167 352h164v36H167z" />
      <path className={rec3} fill="#8583aa" d="M167 192h87v68h-87z" />
      <path className={rec4} fill="#8583aa" d="M167 272h43v68h-43z" />
      <path className={rec5} fill="#8583aa" d="M264 192h67v68h-67z" />
      <path className={rec6} fill="#8583aa" d="M219 272h112v68H219z" />
    </svg>
  );
}

export default Phone;
