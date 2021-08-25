import React from 'react'
import './VideoSidebar.css'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import MessageIcon from '@material-ui/icons/Message'
import ShareIcon from '@material-ui/icons/Share'
import { useState } from 'react'

function VideoSidebar({likes,shares,messages}) {
    const [liked,setLiked]=useState(false);
    return (
        <div className="VideoSidebar">
            <div className="videoSidebar__button">
                {liked ? (
                    <FavoriteIcon 
                    onClick={(e)=>setLiked(false)} />

                ):(
                    <FavoriteBorderIcon font-size="large"
                    onClick={(e) => setLiked(true)}/>
                )}
                <p>{liked ? likes+1 : likes}</p>
            </div>

            <div className="videoSidebar__button">
                <MessageIcon font-size="large"/>
                <p>{messages}</p>
            </div>

            <div className="videoSidebar__button">
                <ShareIcon font-size="large"/>
                <p>{shares}</p>
            </div>

        </div>
    )
}

export default VideoSidebar
