console.log("bonjour le monde");
// https://www.youtube.com/watch?v=DrQq-Pu_5iM&t=60s

import React from "react";
import ReactDOM from "react-dom";
//ReactDOM access with  script under clallback  in index
import LikeButton from './components/LikeButton'

document.querySelectorAll('span.react-like').forEach(function(span){
    const likes = +span.dataset.likes;
    const isLiked = +span.dataset.isLiked ===1 ;

    ReactDOM.render(<LikeButton likes={likes} isLiked={isLiked} />, span)
})