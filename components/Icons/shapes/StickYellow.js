import * as React from 'react';

function StickYellow(props) {
  return (
    <svg
      width={130}
      height={148}
      viewBox="0 0 130 148"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="#E9E468"
        d="M23.548 137.807L.48 119.784 87.417 8.517l23.068 18.024z"
      />
      <path
        fill="#E7BF31"
        d="M42.121 139.208l-23.067-18.024L105.99 9.918l23.067 18.024z"
      />
      <path
        d="M24.226 138.337L.48 119.783l18.573 1.401 23.068 18.023-17.895-.87z"
        fill="#BDB953"
      />
      <path
        d="M99.63 18.057L87.42 8.515l18.571 1.402-6.36 8.14z"
        fill="#E9E468"
      />
    </svg>
  );
}

export default StickYellow;
