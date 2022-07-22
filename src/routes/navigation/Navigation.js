
import {Outlet,Link} from 'react-router-dom'
import './navigation.scss'
import { ReactComponent as LOGO } from '../../assets/crown.svg'
import { Usercontext } from '../../contexts/Usercontext'
import { useContext } from 'react'
import { signoutuser } from '../../utils/firebase/firebase.utils'
import Carticon from '../../components/carticon/Carticon'
import Cartdropdown from '../../components/cart-dropdown/Cartdropdown' 
import { CartContext } from '../../contexts/cartcontext'
const Navigation =()=>{

  const {currentuser}=useContext(Usercontext); 
  const {iscartopen}=useContext(CartContext);
   
    return (
      <>
        <div className='navigation'>
            <div className='logo-container'>
                <Link to='/' className='logo-img'><LOGO/></Link>
            </div>

            <div className='nav-links-container'>
                <Link className='nav-link bttn' to='/shop'>SHOP MORE</Link> 
                {
                   currentuser?(<span className='nav-link' onClick={signoutuser  }>Sign out</span>):(
                <Link className='nav-link' to='/auth'>Sign IN</Link>
                   )
                }
              <Carticon/>  
            </div>
            { iscartopen &&  <Cartdropdown/>}
        </div>
        <Outlet/>
      </>
    )
  }

  export default Navigation;