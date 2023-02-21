import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { query, where, getDocs } from 'firebase/firestore';
import { usersref } from '../Firebase/firebase';
import { Appstate } from './App';

const Login = () => {
    const navigate = useNavigate();
    const useAppstate = useContext(Appstate);

    const handlesign = () => {
        navigate("/signup");
    }
    const [form, setForm] = useState({
        mobile: "",
        pass: ""
    })
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const handleLogin = async () => {
        const quer = query(usersref, where("mobileNum", "==", form.mobile));
        const qexecute = await getDocs(quer);
        qexecute.forEach((doc) => {
            const _data = doc.data();
            if (form.pass === _data.password) {
                useAppstate.setlogin(true);
                useAppstate.setUsername(_data.name);
                alert("Login successfully")
                navigate("/");
                
            } else {
                alert("something went wrong");
            }
        })
    }
    return (
        <div className='logindiv'>
            <input value={form.mobile} name='mobile' onChange={(e) => { handleChange(e) }} className='inpfield' placeholder='Enter Mobile-number' />
            <input value={form.pass} name='pass' onChange={(e) => { handleChange(e) }} className='inpfield' placeholder='Enter Password' />
            <button className='logbtn' onClick={handleLogin}>Login</button>
            <p className='sign' onClick={handlesign}>Don't have account ?</p>
        </div>
    )
}

export default Login