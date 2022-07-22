import React from 'react'
import  '../form-input/forminput.scss'
export default function Forminput({label,...otherprops}) {
  return (
    <div className='group'>
      <input className='form-input' {...otherprops} placeholder={label}/>
      {label &&<label className={`${otherprops.value.length?"shrink":''} form-input-label`} >{/*label*/} </label>}
    </div>
  )
}
