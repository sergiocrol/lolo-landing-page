import * as React from "react"

function LogoAlt({heart, door, ...rest}) {
  return (
    <svg
      width={88}
      height={82}
      viewBox="0 0 88 82"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M74.905 34.617c2.861 8.733.467 17.619-4.58 24.314-3.33 4.54-7.311 8.453-11.381 11.874-3.745 3.442-12.124 10.254-14.346 10.444-1.963-.371-4.166-2.564-5.724-3.692-8.758-6.576-18.186-14.573-22.966-23.316-4.008-8.394-4.015-18.776 2.223-25.212 8.088-7.202 20.282-5.794 26.467 1.73a17.855 17.855 0 016.13-5.022c9.828-3.875 20.053.073 24.177 8.88z"
        fill={heart || "#183A83"}
        // fill={heart || "#524C7C"}
      />
      <path
        d="M19.343 31.924a5.142 5.142 0 00.093-.063l.013-.01.005-.003h.001v-.001h0l-.013-.02 1.315-1.296.403-.349-.023-.026 6.913-6.812.001-.001L44.138 7.555 60.212 23.34l.002.003 7.428 7.348h0l.234.231.002.002 7.662 7.58h.001l6.543 6.455.698.69.702-.685 2.346-2.288.73-.712-.726-.716L46.002 2.01s0 0 0 0a2.656 2.656 0 00-2.846-.572 2.439 2.439 0 00-.889.578L17.55 26.347c-.62.542-1.206 1.12-1.756 1.73L2.43 41.249l-.723.712.723.712 2.3 2.265.702.691.702-.69 13.21-13.015z"
        fill={heart || "#183A83"}
        stroke={heart || "#183A83"}
        // fill={heart || "#524C7C"}
        // stroke={heart || "#524C7C"}
        strokeWidth={2}
      />
      <path
        d="M57.632 55.611v0a7.98 7.98 0 00-2.243-5.551 7.576 7.576 0 00-5.418-2.311H39.353a7.503 7.503 0 00-2.952.585 7.662 7.662 0 00-2.505 1.704 7.89 7.89 0 00-1.674 2.556 8.056 8.056 0 00-.59 3.017v10.241l.185.15 3.514 2.847.814.66V55.612c.003-.88.345-1.72.947-2.338a3.155 3.155 0 012.259-.96H49.97c.843 0 1.654.344 2.254.96.6.618.94 1.458.94 2.337v14.151l.822-.69 3.468-2.912.178-.15V55.611z"
        fill={door || "#E5858F"}
        stroke={door || "#E5858F"}
      />
    </svg>
  )
}

export default LogoAlt
