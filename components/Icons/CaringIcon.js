import * as React from "react"

function CaringIcon({color, ...rest}) {
  return (
    <svg
      width={14}
      height={13}
      viewBox="0 0 14 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M13.422 2.591a4.065 4.065 0 00-.89-1.293A4.146 4.146 0 009.62.114 4.173 4.173 0 007 1.036 4.173 4.173 0 004.38.114a4.146 4.146 0 00-2.913 1.184A4.038 4.038 0 00.25 4.183c0 .52.106 1.063.317 1.615.177.46.43.939.753 1.421.513.764 1.218 1.561 2.093 2.37a23.388 23.388 0 002.946 2.3l.37.238a.502.502 0 00.54 0l.37-.237c.061-.04 1.495-.963 2.947-2.302.875-.808 1.58-1.605 2.092-2.369.324-.482.578-.96.753-1.421a4.52 4.52 0 00.317-1.615 3.977 3.977 0 00-.326-1.592z"
        fill={color}
      />
    </svg>
  )
}

export default CaringIcon