import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Appstate } from './App';

const Header = () => {
    const useAppstate = useContext(Appstate);
    return (
        <div className='header'>
            <h1>Reddit App</h1>
            <div className='userdiv'>
                {
                    useAppstate.login ?
                        <>
                        <Link to={"/add"}>
                            <button className='logbtn'>Add</button>
                            
                        </Link>
                        <h3>hii {useAppstate.username}</h3>
                        </>
                        :

                        <Link to={"/login"}>
                            <button className='logbtn'>Login</button>
                        </Link>

                }
                
            </div>

        </div>
    )
}

export default Header