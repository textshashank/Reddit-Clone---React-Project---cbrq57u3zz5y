import React, { useState } from 'react'
import { addDoc } from 'firebase/firestore'
import { usersref } from '../Firebase/firebase'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: "",
        mobile: "",
        pass: ""
    })
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
        console.log(data);
    }
    const handleSignup = async () => {
        await addDoc(usersref, {
            mobileNum: data.mobile,
            name: data.name,
            password: data.pass
        })
        alert("signup successfully");
        navigate("/login");
    }
    return (

        <div className='log_container'>
            <div className='logindiv signupdiv'>
                <input value={data.name} name='name' onChange={(e) => { handleChange(e) }} className='inpfield' placeholder='Enter Username' />
                <input value={data.mobile} name='mobile' onChange={(e) => { handleChange(e) }} className='inpfield' placeholder='Enter Mobile-number' />
                <input value={data.pass} name='pass' onChange={(e) => { handleChange(e) }} className='inpfield' placeholder='Enter Password' />
                <button className='logbtn' onClick={handleSignup}>Signup</button>

            </div>
        </div>

    )
}

export default Signup