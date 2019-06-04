import React from "react";

const Comment = props => {
  //   console.log(props.comments);
  return (
    <div className="comments">
      {props.comments.map((comment, index) => {
        return (
          <div key={index} className="comment">
            <strong>{comment.username}</strong> {comment.text}
          </div>
        );
      })}
    </div>
  );
};

export default Comment;
