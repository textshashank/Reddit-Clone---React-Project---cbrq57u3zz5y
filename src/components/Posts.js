import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Appstate } from '../App';
import { getDocs, doc, updateDoc } from 'firebase/firestore';
import { postref, db } from '../Firebase/firebase';

import Postitem from './Postitem'
import './Post.css'

const Posts = () => {
    

    const useAppstate = useContext(Appstate);

    const [totalv, setTotalv] = useState("");
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function getData() {
            setPosts([]);
            const _data = await getDocs(postref);
            _data.forEach((doc) => {
                setPosts((prev) => [...prev, { ...(doc.data()), id: doc.id }])
            })


        }


        getData();


    }, [])

    return (
        <div className='posts'>
            {
                posts.map(post => {
                    return(
                        <Postitem post={post}/>
                    )
                })
            }
        </div>
    )
}

export default Posts