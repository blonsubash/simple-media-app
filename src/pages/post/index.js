import React from "react";
import firebase from "firebase";
import classNames from "classnames";
import { Avatar } from "@mui/material";
import { Comment, Share, ThumbUp } from "@mui/icons-material";

import "./index.scss";

import { useStateValue } from "../../context/StateProvider";
import db from "../../firebase";

function Post({
  postId,
  profilePic,
  image,
  username,
  timeStamp,
  message,
  likes,
}) {
  const [{ user }, dispatch] = useStateValue();

  const handleLike = (key, likes) => {
    const postRef = db.collection("posts").doc(key);
    if (likes?.includes(user?.uid)) {
      postRef.update({
        likes: firebase.firestore.FieldValue.arrayRemove(user.uid),
      });
    } else {
      postRef.update({
        likes: firebase.firestore.FieldValue.arrayUnion(user.uid),
      });
    }
  };
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
      <div className="post__likes-comments-count">
        {likes?.length > "0" && (
          <div className="post__likes-count">
            {likes?.length} {likes?.length == "1" ? "Like" : "Likes"}
          </div>
        )}
      </div>
      <div className="post__options">
        <div
          className={classNames("post__option", {
            liked: likes?.includes(user.uid),
          })}
          onClick={() => handleLike(postId, likes)}
        >
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
