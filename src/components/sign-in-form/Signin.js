import React from 'react'
import { useState } from 'react'
import { signInWithGooglePopup,
     createUserDocumeneFromAuth,
    signInAuthUserWithEmailAndPassword,
    } from '../../utils/firebase/firebase.utils';
import Forminput from '../form-input/Forminput';
import '../sign-in-form/signinform.scss'
import Button from '../button/Button'; 

const defaultformvalues = { 
    email: '',
    password: '', 
}
export default function Signin() {

 
    const [formvalues, setformvalues] = useState(defaultformvalues);
    const {  email, password } = formvalues; 


    const signinwithgoogle=async()=>
    {
      const response =await signInWithGooglePopup(); 
     const userDocref= createUserDocumeneFromAuth(response.user);
         
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault();
       
        
        try {
           const response= await signInAuthUserWithEmailAndPassword(email,password); 
           alert('successfully signed in '); 
            setformvalues(defaultformvalues);

        } catch (error) {
            if(error.code=="auth/user-not-found") 
                alert('This account does not exist kindly register ') 
                
                if(error.code=="auth/wrong-password") 
                alert('Entered wrong password  ') 
          console.log('this is error',error)
        }
    }


    const handleChange = (event) => {
        const { name, value } = event.target;
        setformvalues({ ...formvalues, [name]: value })
    }

    return (
        <div className='sign-up-container'>
            <h2>Already have an account?</h2>
            <span>Sign in with email and password</span>
            <form onSubmit={handleSubmit}>

                
                <Forminput label='Email' required type="email" onChange={handleChange} name='email' value={email} />
                <Forminput label='Password' required type="password" onChange={handleChange} name='password' value={password} />

                <div className='btn-cnt'>
                  <Button type='submit' buttontype={""}>Sign in</Button>
                  <Button type='button'  onClick={signinwithgoogle} buttontype={"google"}>Sign in with google</Button>
                  </div>
            </form>
        </div>
    )
} 




  // this is if we want authenticate with redirect
    // useEffect(()=>{
    //   async function getdata(){
    //   const response =await getRedirectResult(auth);
    //   if(response)
    //   {
        
    //  const userDocref= createUserDocumeneFromAuth(response.user);
    //  console.log('user has been add with redirect');
    //  console.log(userDocref)
    //   }
    //   }
    //   getdata();
    // });

    // const logGooglereDirectUser=async()=>
    // {
    //   const response =await signInWithGoogleRedirect();
    //   console.log(response) 
      // user this button to give fucntionality
      //          <button onClick={logGooglereDirectUser}>Sign in with redirect google</button>
    // }
//     import { async } from "@firebase/util";
// import { getRedirectResult } from "firebase/auth";
// import {useEffect} from 'react'