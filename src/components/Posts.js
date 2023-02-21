import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Appstate } from './App';
import { getDocs, doc, updateDoc } from 'firebase/firestore';
import { postref, db } from '../Firebase/firebase';

const Posts = () => {
    const useAppstate = useContext(Appstate);

    const [totalv, setTotalv] = useState("");
    const [Posts, setPosts] = useState([]);
    const navigate = useNavigate();
    const handleUP = async (id,vote) => {
        if (useAppstate.login) {
            const ref = doc(db, "posts", id);
            await updateDoc(ref, {
                voteCount: vote+1
            })
            setTotalv(vote+1);
        } else {
            navigate("/login");
        }
    }
    const handleDown = async (id, vote) => {
        if (useAppstate.login) {
            const ref = doc(db, "posts", id);
            await updateDoc(ref, {
                voteCount: vote-1
            })
            setTotalv(vote-1);
        } else {
            navigate("/login");
        }
    }
    
    useEffect(() => {
        async function getData() {
            setPosts([]);
            const _data = await getDocs(postref);
            _data.forEach((doc) => {
                setPosts((prev) => [...prev, { ...(doc.data()), id: doc.id }])
            })


        }


        getData();


    }, [totalv])
    return (
        <div className='postdiv'>
            {
                Posts.map((p, i) => {
                    return (
                        <div className='postcontainer'>
                            <div className='allpost'>
                                <div className='votetank'>
                                    <button onClick={() => {handleUP(p.id,p.voteCount)}}>+1</button>&nbsp;
                                    <p>{p.voteCount}</p>&nbsp;
                                    <button onClick={() => {handleDown(p.id,p.voteCount)}}>-1</button>
                                </div>
                                <div style={{ marginLeft: 20 }}>{p.postText}</div>

                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Posts