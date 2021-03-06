
import './App.css';
import Video from './Video';
import React,{useState,useEffect} from 'react';
import db from './Firebase';


function App() {
  const [videos,setVideos]=useState([]);

  useEffect(()=>{
    db.collection('videos').onSnapshot(snapshot=>(
      setVideos(snapshot.docs.map(doc=>doc.data()))
    ))
  },[videos])

  return (
    <div className="App">
    
        <div className="app_video">
          {videos.map(({url,channel,description,song,likes,messages,shares})=>(
            <Video 
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              messages={messages}
              shares={shares}
            />
          ))}
       
        </div>
    </div>


  );
}

export default App;
