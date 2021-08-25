import React from 'react'
import './VideoFooter.css'
import FavoriteBorderIcon  from '@material-ui/icons/FavoriteBorder'
import MusicNoteIcon from '@material-ui/icons/MusicNote'
import Ticker from 'react-ticker'

function VideoFooter({channel,description,song}) {
    return (
        <div className="videofooter">
            <div className="video__header">
                <img  className="img1" src="https://th.bing.com/th/id/R.be3834736396b4dfeacb54251a7e5621?rik=6B9gT9OH9KCCRw&pid=ImgRaw"
                    alt="" />
            </div>
           <div className="videofooter__text">
                <h3>@{channel}</h3>
               <p>{description}</p>
               <div className="videoFooter__ticker">
                    <MusicNoteIcon className="videoFooter__icon"/>
                    <Ticker mode="smooth">
                        {
                            ({ index }) => (
                                <>
                                    <p>{song}</p>
                                </>
                            )
                        }
                    </Ticker>
               </div>
              
           </div>
           <img className="videofooter__record" src="https://static.thenounproject.com/png/934821-200.png" alt="" />
        </div>
    )
}

export default VideoFooter
