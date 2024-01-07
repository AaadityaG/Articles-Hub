import React from 'react'

function Button({
    children,
    type = "button",
    bgColor = "bg-gradient-to-r from-rose-500 via-rose-500  to-orange-300",
    textColor = "text-white",
    className = "",
    ...props
}) {
  return (
    <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
      {children}
    </button>
  )
}

export default Button
