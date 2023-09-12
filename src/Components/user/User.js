import React from 'react'
import{Routes, Route} from 'react-router-dom'
import SignIN from '../sign in/SignIN'
import SignUp from '../sign up/SignUp'


const User = () => {
  return (
    <div>
      <ul className= "nav-menu">  
      <li className="nav-item">
         <i class="fa-solid fa-user">
            <Route path='/src/Components/sign in/SignIN.js' element={<SignIN />}/>
                        <Route path='/src/Components/sign up/SignUp.js' element={<SignUp    />}/>

        </i>  
         </li>
      <li className="nav-item"> 
       <i class="fa-solid fa-cart-shopping">
        </i>
        </li> 
    </ul>
    </div>
  )
}

export default User
              