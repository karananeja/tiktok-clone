import React, { useRef, useState } from 'react';
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';
import '../css/Video.css';

const Video = ({
  url,
  channel,
  description,
  song,
  likes,
  messages,
  shares,
}) => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className='video'>
      <video
        className='video__player'
        src={url}
        //https://cdn.sharechat.com/cv-29bfd9ff_1637661516949_sc.mp4
        //https://cdn.sharechat.com/cv-2ea57352_1636950500655_sc.mp4
        //https://cdn.sharechat.com/cv-2ec8eaf0_1637566900666_sc.mp4
        //https://cdn.sharechat.com/cv-3733bef2_1637329139679_sc.mp4
        loop
        ref={videoRef}
        onClick={onVideoPress}
      ></video>
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar likes={likes} messages={messages} shares={shares} />
    </div>
  );
};

export default Video;
