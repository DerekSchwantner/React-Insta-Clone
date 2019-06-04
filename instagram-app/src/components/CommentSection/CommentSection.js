import React from "react";
import Comment from "./Comment";

const CommentSection = props => {
  //   console.log(props.comments);
  return (
    <div className="comments-section">
      <Comment comments={props.comments} />
      <hr />
      <div className="form">
        <form className="comment-form">
          <input placeholder="comment here" name="text" />
          <button className="btn">Comment</button>
        </form>
      </div>
    </div>
  );
};

export default CommentSection;

// onSubmit={this.addComment} belongs inside first form tag next to className comment form.

//onChange={this.handleChanges}
// value={this.state.text} belongs in the input tag before placeholder
