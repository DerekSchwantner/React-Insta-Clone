import React from "react";
import Comment from "./Comment";

class CommentSection extends React.Component {
  //   console.log(props.comments);
  state = {
    comments: this.props.comments,
    newComment: ""
  };

  addNewComment = e => {
    e.preventDefault();
    const newComment = {
      username: "Derek13",
      text: this.state.newComment
    };
    this.setState({
      comments: [...this.state.comments, newComment],
      newComment: ""
    });
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <div className="comments-section">
        <Comment comments={this.state.comments} />
        <hr />
        <div className="form">
          <form className="comment-form" onSubmit={this.addNewComment}>
            <input
              className="comment-input"
              name="newComment"
              value={this.state.newComment}
              onChange={this.changeHandler}
              placeholder="comment here"
            />
            <button className="btn">Comment</button>
          </form>
        </div>
      </div>
    );
  }
}

export default CommentSection;
