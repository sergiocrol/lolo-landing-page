import { useEffect, useState } from 'react';

import {
  check,
  checkCircle,
  checkConfirm,
  checkSerpentine,
} from '../../styles/icons.module.css';

function Check({ selectedIndex }) {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setDate(+new Date())
  }, [selectedIndex]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 90 90"
      className={check}
      // key={+new Date()}
      key={date}
    >
      <g fill="none" fillRule="evenodd" transform="translate(1 1)">
        <circle
          className={checkCircle}
          cx={45}
          cy={45}
          r={36}
          strokeWidth={2}
        />
        <path strokeWidth={8} d="M33 45l10 9 15-21" className={checkConfirm} />
        <path
          className={checkSerpentine}
          strokeLinecap="round"
          strokeWidth={2}
          d="M42 0v40m43-15L53 45m34 30L53 55m-9 45V60M1 75l34-20M1 25l34 20"
        />
      </g>
    </svg>
  );
}

export default Check;
