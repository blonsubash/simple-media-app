import { PhotoLibrary, Videocam } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React, { useState } from "react";
import "./index.scss";

function Feed() {
  const [post, setPost] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="feed">
      <div className="feed__top">
        <Avatar />
        <form>
          <input
            type={"text"}
            placeholder="Write a post"
            value={post}
            onChange={(e) => setPost(e.target.value)}
          />
          <input placeholder="image URL" />
          <button onClick={handleSubmit} type="submit">
            Hidden Submit
          </button>
        </form>
      </div>
      <div className="feed__bottom">
        <div className="feed__upload-options">
          <Videocam style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="feed__upload-options">
          <PhotoLibrary style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
      </div>
    </div>
  );
}

export default Feed;
