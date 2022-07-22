import React from 'react'
import '../button/button.scss'

const button_type={
    google:'google-sign-in',
    inverted:'inverted',
}
export default function Button({children,buttontype,...otherprops}) {
  return ( 
      <button className={`button-container ${button_type[buttontype]}`}{...otherprops}>{children}</button>
     
  )
}
