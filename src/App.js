 import Home from './routes/home/Home'
 import {Routes,Route,Outlet} from 'react-router-dom'
import Navigation from './routes/navigation/Navigation';
import Authentication from './routes/authetication/Authentication';
 import Shop from './routes/shop/Shop';
import Checkoutpage from './routes/checkoutpage/Checkoutpage';
function App() {
     
     
   
  return (      
         <Routes>
          <Route path='/' element={<Navigation/>}> 
            <Route index element={<Home/>}></Route>  
            <Route path='shop/*' element={<Shop/>}></Route>  
            <Route path='auth' element={<Authentication/>}></Route>  
            <Route path='checkout' element={<Checkoutpage/>}></Route> 
          </Route>  
         </Routes>
  );
}

export default App;
