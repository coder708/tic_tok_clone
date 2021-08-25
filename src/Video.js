import React,{useRef} from 'react'
import './Video.css'
import { useState } from 'react';
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

function Video({
    url,
    channel,
    description,
    song,
    likes,
    messages,
    shares,
}) {

    const videoRef=useRef(null);
    const [play,setPlay]=useState(false);
    
    const onVideoPress=()=>{
        if(play){
            videoRef.current.pause();
            setPlay(false);
        }

        else{
            videoRef.current.play();
            setPlay(true);
        }

    }
    return (
        <div className="video">
            
            <video className="video_player"
             loop ref={videoRef} 
             onClick={onVideoPress}
             src={url}  
              ></video>

            <VideoFooter channel={channel} description={description} song={song} />

            <VideoSidebar likes={likes} shares={shares} messages={messages
            } />

        </div>
    )
}

export default Video
