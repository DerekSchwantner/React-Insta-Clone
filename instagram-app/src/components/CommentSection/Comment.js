import React from "react";
import "./CommentSection.scss";

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
