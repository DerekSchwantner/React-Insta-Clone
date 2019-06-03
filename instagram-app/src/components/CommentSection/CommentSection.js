import React from "react";

const CommentSection = props => {
  console.log(props.comments);
  return (
    <div className="comments">
      <h2>
        {props.comments.map(comment => {
          return <p>{comment.username}</p>;
        })}
      </h2>
    </div>
  );
};

export default CommentSection;
