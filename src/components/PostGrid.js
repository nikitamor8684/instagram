import React from "react";

const PostGrid = ({ post, data }) => {
  return (
    <div>
      <div className="post-grid">
        {post.map((post, index) => (
          <div key={index} className="post-item">
            <img src={post.image} alt={post.caption} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostGrid;
