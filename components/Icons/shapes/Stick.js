import * as React from 'react';

function SvgComponent(props) {
  return (
    <svg
      width={95}
      height={158}
      viewBox="0 0 95 158"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="#93AFDF"
        d="M66.68 5.332l27.488 10.07-48.574 132.586-27.487-10.07z"
      />
      <path
        fill="#3E406D"
        d="M48.574 9.701l27.488 10.07-48.575 132.585L0 142.286z"
      />
      <path
        d="M65.872 5.036l28.296 10.366-18.107 4.37-27.487-10.07 17.298-4.666z"
        fill="#5E89D1"
      />
      <path
        d="M31.041 142.658l14.552 5.331-18.105 4.369 3.553-9.7z"
        fill="#93AFDF"
      />
    </svg>
  );
}

export default SvgComponent;
