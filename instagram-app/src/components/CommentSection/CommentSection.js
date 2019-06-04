import React from "react";
import Comment from "./Comment";

const CommentSection = props => {
  //   console.log(props.comments);
  return (
    <div className="comments-section">
      <p>
        <Comment comments={props.comments} />
      </p>
    </div>
  );
};

export default CommentSection;
