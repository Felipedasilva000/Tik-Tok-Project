import React, { useRef, useState } from "react";
import VideoFooter from "./components/footer/VideoFooter";
import VideoSidebar from "./components/sidebar/VideoSidebar";
import "./video.css";


function Videos({likes, messages, shares, name, descreption, music, url }) {
  const VideoRef = useRef(null);
  const [play, setplay] = useState(false);

  function handdlestart() {
    if (play == false) {
    }

    if (play == true) {
    }

    if (play) {
      VideoRef.current.pause();
      setplay(false);
    } else {
      VideoRef.current.play();
      setplay(true);
    }
  }

  return (
    <div className="video">
      <video
        className="video__player"
        ref={VideoRef}
        onClick={handdlestart}
        loop
        src={url}
      ></video>
      < VideoSidebar 
      likes={likes}
      messages={messages}
      shares={shares}
      />
      < VideoFooter
      name={name}
      descreption={descreption}
      music={music}
      />
    </div>
  );
}

export default Videos;
