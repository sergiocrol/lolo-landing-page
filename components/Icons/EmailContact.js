import * as React from "react"

function EmailContact(props) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18 .55H2C.9.55.01 1.6.01 2.884l-.01 14c0 1.283.9 2.333 2 2.333h16c1.1 0 2-1.05 2-2.333v-14C20 1.6 19.1.55 18 .55zm0 4.667l-8 5.833-8-5.833V2.884l8 5.833 8-5.833v2.333z"
        fill="#fff"
        fillOpacity={0.7}
      />
    </svg>
  )
}

export default EmailContact
