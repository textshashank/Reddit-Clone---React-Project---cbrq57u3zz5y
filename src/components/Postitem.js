import React, { useContext, useState, useEffect } from 'react'
import { getDocs, doc, updateDoc } from 'firebase/firestore';
import { postref, db } from '../Firebase/firebase';
import { useNavigate } from 'react-router-dom';
import { Appstate } from '../App';
import './Postitem.css'

const Postitem = ({ post }) => {
    const useAppstate = useContext(Appstate);

    const { title, upvote, image, user, subreddit, comment_count, id } = post;
    const navigate = useNavigate();
    const [totalv, setTotalv] = useState(upvote);

    const handleUP = async (id) => {
        if (useAppstate.login) {
            const ref = doc(db, "posts", id);
            await updateDoc(ref, {
                upvote: totalv + 1
            })
            setTotalv(totalv + 1);
        } else {
            navigate("/login");
        }
    }
    const handleDown = async (id) => {
        if (useAppstate.login) {
            const ref = doc(db, "posts", id);
            await updateDoc(ref, {
                upvote: totalv - 1
            })
            setTotalv(totalv - 1);
        } else {
            navigate("/login");
        }
    }


    return (
        <div className='post'>
            <div className='post_left'>
                <i className='fas fa-caret-up' onClick={() => { handleUP(id) }}></i>
                <span>{totalv}</span>
                <i className='fas fa-caret-down' onClick={() => { handleDown(id) }}></i>
            </div>
            <div className='post_center'>
                <img src={image} />
            </div>
            <div className='post_right'>
                <h3><a href={`/r/${subreddit}/${title}`}>{title}</a></h3>
                <span className='post_info'>
                    submitted an hour ago by
                    {" "}<a href={`/u/${user}`}>{user}</a>{" "}
                    to
                    {" "}<a href={`/r/${subreddit}`}>{subreddit}</a>
                </span>
                <p className='post_info'>
                    {comment_count} comments | share | save | hide | report
                </p>
            </div>
        </div>
    )
}

export default Postitem