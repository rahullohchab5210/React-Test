import React from 'react'

function Button(props) {
  return (
    <button className={`bg-[#01C6B5] hover:bg-[#01C6B5]/60   text-white leading-[100%] tracking-[0%] text-nowrap cursor-pointer ${props.className} `}>
      {props.text}
    </button>
  )
}

export default Button