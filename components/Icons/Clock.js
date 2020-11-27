import { useEffect, useState } from 'react';

import {
  clock,
  clockCircle,
  minuteHand,
  hourHand,
} from '../../styles/icons.module.css';

function Icon({ selectedIndex }) {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setDate(+new Date())
  }, [selectedIndex]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-150 -150 300 300"
      key={date}
      className={clock}
    >
      <g fill="none" fillRule="evenodd">
        <circle className={clockCircle} cx={0} cy={0} r={120} strokeWidth={2} />
      </g>
      <path
        strokeDasharray="70"
        strokeDashoffset="69"
        strokeLinecap="round"
        strokeWidth="20"
        d="M0 0h-60"
        className={hourHand}
      ></path>
      <path
        strokeDasharray="80"
        strokeDashoffset="80"
        strokeLinecap="round"
        strokeWidth="20"
        d="M0 0h70"
        className={minuteHand}
      ></path>
    </svg>
  );
}

export default Icon;
