import React, { useContext } from 'react'
import './Header.css'
import { Link,useNavigate } from 'react-router-dom';
import { Appstate } from '../App';


const Header = () => {
   const useAppstate = useContext(Appstate);
   const navigate = useNavigate();
   const handlePlus = () => {
      navigate("/add")
   }
   return (
      <div className='header'>
         <div className='header_left'>
            <ul>
               <li><a href='/r/popular' className='active'>Popular</a></li>
               <li><a href='/r/hot'>Hot</a></li>
               <li><a href='/r/rising'>Rising</a></li>
               <li><a href='/r/controversial'>Controversial</a></li>
               <li><a href='/r/gilded'>Gilded</a></li>
            </ul>
         </div>
         
         {
            useAppstate.login ?
               <>
                  <Link to={"/add"}>
                     <div className='header_right'>
                        <i className='fas fa-plus' onclick={handlePlus}/>
                        <i className='fas fa-bell'></i>
                        <img src='https://th.bing.com/th/id/OIP.9PPdes_WSxaqUQJxWab16AHaHa?pid=ImgDet&rs=1' />
                        <div className='header_user'>
                           <span>{useAppstate.username}</span>
                           <i className='fas fa-caret-down' />

                        </div>
                     </div>

                  </Link>

               </>
               :

               <Link to={"/login"}>
                  <button className='loginbtn'>Login</button>
               </Link>

         }
      </div>
   )
}

export default Header