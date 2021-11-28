import React, { useState } from 'react';
import { Favorite, FavoriteBorder, Message, Share } from '@mui/icons-material';
import '../css/VideoSidebar.css';

const VideoSidebar = ({ likes, shares, messages }) => {
  const [liked, setLiked] = useState(false);
  return (
    <div className='videoSidebar'>
      <div className='videoSidebar__button'>
        {liked ? (
          <Favorite fontSize='large' onClick={(e) => setLiked(false)} />
        ) : (
          <FavoriteBorder fontSize='large' onClick={(e) => setLiked(!false)} />
        )}
        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className='videoSidebar__button'>
        <Message fontSize='large' />
        <p>{messages}</p>
      </div>
      <div className='videoSidebar__button'>
        <Share fontSize='large' />
        <p>{shares}</p>
      </div>
    </div>
  );
};

export default VideoSidebar;
