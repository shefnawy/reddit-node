import React from "react";
import Comments from "./Comments";

const Post = ({ post, addComment, addVotes, downVotes }) => {
  return (
    <div className="post">
      <div className="votes">
        <div className="upvote">
          <span
            role="img"
            aria-label="up vote"
            onClick={() => addVotes(post._id)}
          >
            ⬆️
          </span>
        </div>
        <div className="votecount">{post.votes}</div>
        <div className="downvote">
          <span
            role="img"
            aria-label="down vote"
            onClick={() => downVotes(post._id)}
          >
            ⬇️
          </span>
        </div>
      </div>
      <div className="content">
        <div className="title-area">
          <span className="title">#{post.category}</span>
        </div>
        <div className="meta-area">
          <span className="time">
            Submitted by
            <strong>{post.username}</strong>
          </span>
        </div>
        <div className="body">
          <p> {post.body}</p>
          <img src={post.imageUrl} alt="" />
        </div>

        <Comments
          comments={post.comments}
          addComment={addComment}
          id={post._id}
        />
      </div>
    </div>
  );
};

export default Post;
