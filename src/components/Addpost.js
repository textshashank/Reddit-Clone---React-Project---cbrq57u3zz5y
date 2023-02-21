import React, { useState } from 'react'
import { addDoc } from 'firebase/firestore';
import { postref } from '../Firebase/firebase';
import { useNavigate } from 'react-router-dom';

const Addpost = () => {
    const navigate = useNavigate();
    const [post, setPost] = useState("");

    const writePost = (e) => {
        setPost(e.target.value);
    }

    const handleClick = async () => {
          await addDoc(postref, {postText: post, voteCount: 0});
          alert("success");
          navigate("/");
    }

    return (
        <div className='logindiv'>
            <textarea value={post} onChange={(e) => {writePost(e)}} placeholder='Write your post' style={{height: 100, width: '90%', padding: '5px'}}/>
            <button className='logbtn' onClick={handleClick}>Add</button>
            
        </div>
    )
}

export default Addpost