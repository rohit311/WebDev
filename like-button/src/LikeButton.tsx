import React, { useState } from 'react';
import {AiFillLike, AiFillDislike} from 'react-icons/ai'

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
  };

  if(liked) {
    return (
      <AiFillLike
        color="blue"
        size="50"
        onClick={handleClick}/>
    );
  }

  return (
    <AiFillDislike
      color="red"
      size="50"
      onClick={handleClick}/>
  );
};

export default LikeButton;