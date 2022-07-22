
import { Outlet } from "react-router-dom";
import Signup from "../../components/sign-up-form/Signup";
import Signin from "../../components/sign-in-form/Signin";
 import '../authetication/authentication.scss'
const Authentication=()=>{ 
     
   

    return ( 
        <div className="container"> 
          <Signin/>
          <Signup/>
        </div>  
    )
  }


  export default Authentication;



