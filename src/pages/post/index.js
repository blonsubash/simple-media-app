import React from "react";
import { Avatar } from "@mui/material";
import { Comment, Share, ThumbUp } from "@mui/icons-material";

import "./index.scss";

function Post({ profilePic, image, username, timeStamp, message }) {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />
        <div className="post__top-info">
          <h3>{username}</h3>
          <p>{new Date(timeStamp?.toDate()).toUTCString()}</p>
        </div>
      </div>
      <div className="post__bottom">
        <p>{message}</p>
      </div>
      <div className="post__image">
        <img src={image} />
      </div>
      <div className="post__options">
        <div className="post__option">
          <ThumbUp />
          <p>Like</p>
        </div>
        <div className="post__option">
          <Comment />
          <p>Comment</p>
        </div>
        <div className="post__option">
          <Share />
          <p>Share</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
