import React, { useState, useContext } from 'react'
import { addDoc } from 'firebase/firestore';
import { postref } from '../Firebase/firebase';
import { useNavigate } from 'react-router-dom';
import { Appstate } from '../App';

const Addpost = () => {
    const useAppcontext = useContext(Appstate);
    const navigate = useNavigate();
    const [post, setPost] = useState("");
    const [title, setTitle] = useState("");

    const writePost = (e) => {
        setPost(e.target.value);
    }
    const writetitle = (e) => {
        setTitle(e.target.value);
    }

    const handleClick = async () => {
        const imageLink = `https://picsum.photos/id/${Math.floor(Math.random() * 50)}/400/300`;
        const count = Math.floor(Math.random() * 100); 
        await addDoc(postref, { subreddit: post, upvote: 0, title: title, user: useAppcontext.username, image: imageLink, comment_count: count});
        alert("added successfully");
        navigate("/");
    }

    return (
        <div className='log_container'>
            <div className='logindiv'>
                <textarea value={title} onChange={(e) => {writetitle(e)}} style={{ width: '90%', padding: '5px' }} name="title" placeholder='title' />
                <textarea value={post} onChange={(e) => { writePost(e) }} placeholder='Write your post' style={{ height: 100, width: '90%', padding: '5px' }} />
                <button className='logbtn' onClick={handleClick}>Add</button>

            </div>
        </div>
    )
}

export default Addpost