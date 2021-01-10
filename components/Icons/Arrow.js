import React from 'react';

function Arrow(props) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 12c0-.552.425-1 .95-1h17.1c.525 0 .95.448.95 1s-.425 1-.95 1H3.95c-.525 0-.95-.448-.95-1z"
        fill="#3675EC"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L19.586 12l-5.293-5.293a1 1 0 010-1.414z"
        fill="#F44E77"
      />
      <defs>
        <linearGradient
          id="prefix__paint0_linear"
          x1={18}
          y1={5}
          x2={18}
          y2={19}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F44E77" />
          <stop offset={1} stopColor="#F44E77" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Arrow;
