import React from 'react'
import './SideNav.css'

const SideNav = () => {
    const menues = [
        {
            to: '/r/popular', text: 'Popular'
        },
        {
            to: '/r/all', text: 'All'
        },
        {
            to: '/r/random', text: 'Random'
        }
    ]
    const subreddits = [
        "askreddit",
        "worldnews",
        "videos",
        "funny",
        "pics",
        "gaming",
        "movies",
        "news",
        "gifs",
        "aww",
        "television",
        "jokes",
        "science",
        "soccer",
        "internetisbeautiful",
        "dataisbeautiful"
    ]
    return (
        <div className='sidenav'>
            <div className='sidenav_logo'>
                <img src='https://logos-download.com/wp-content/uploads/2016/06/Reddit_logo_full_1.png' />
            </div>
            <div className='sidenav_search'>
                <input type='text' placeholder='Search' name='search' />
                <i className='fas fa-search'></i>
            </div>
            <div className='sidenav_links'>
                <ul className='sidenav_menu'>
                    {
                        menues.map(menu => {
                            return(
                                <li><a href={menu.to}>{menu.text}</a></li>
                            )
                        })
                    }
                </ul>
                <hr />
                <ul className='sidenav_reddit'>
                     {
                        subreddits.map(sub  => {
                            return(
                                <li><a href={`/r/${sub}`}>{sub}</a></li>
                            )
                        })
                     }
                </ul>
            </div>
        </div>
    )
}

export default SideNav