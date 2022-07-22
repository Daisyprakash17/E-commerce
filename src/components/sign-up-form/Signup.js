import React from 'react'
import { useState } from 'react'
import { createAuthUserWithEmailAndPassword,createUserDocumeneFromAuth } from '../../utils/firebase/firebase.utils';
import Forminput from '../form-input/Forminput';
import '../sign-up-form/signupform.scss'
import Button from '../button/Button'; 
const defaultformvalues={
    displayName:'',
    email:'',
    password:'',
    confirmpassword:'',
}
export default function Signup() {
 
    const [formvalues,setformvalues]=useState(defaultformvalues);
    const {displayName,email,password,confirmpassword}=formvalues; 

    const handleSubmit= async (event)=>{
         event.preventDefault();
      console.log(password,confirmpassword)
        if(password!==confirmpassword)
        {
            alert('Password and Confirm Password are different');
            return ;
        }

        try{
            const response= await createAuthUserWithEmailAndPassword(email,password); 
            
            await createUserDocumeneFromAuth(response.user,{displayName});
            
           await setformvalues(defaultformvalues);
            alert('Account has been successfully created');
        }catch(error){
            if(error.code="auth/email-already-in-use")
            alert('account cannot be created , Email already in use')
            console.log('this is error',error)
        }
    }


    const handleChange=(event)=>{
        const {name,value}=event.target;
        setformvalues({...formvalues,[name]:value})
    }

    return (
    <div className='sign-up-container'>
        <h2>Don't have an account?</h2>
        <span>Sign up with email and password</span>
        <form onSubmit={handleSubmit}>
     
            <Forminput  label='Name' required  type="text" onChange={handleChange} name='displayName' value={displayName}/>
            <Forminput label='Email' required  type="email" onChange={handleChange} name='email' value={email}/>
            <Forminput label='Password' required  type="password" onChange={handleChange} name='password'value={password} />
            <Forminput label='Confirm password' required  type="password" onChange={handleChange} name='confirmpassword'value={confirmpassword} />
            <Button type='submit' buttontype={""}>Submit</Button>
        </form>
    </div>
  )
} 
