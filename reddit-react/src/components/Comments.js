import React, { Component } from "react";

class Comments extends Component {
  state = {
    input: ""
  };
  addComment = e => {
    e.preventDefault();
    this.props.addComment(this.state.input, this.props.id);
  };
  handleTextChange = e => {
    this.setState({ input: e.target.value });
  };
  render() {
    return (
      <React.Fragment>
        {this.props.comments.map(comment => (
          <p>{comment.body}</p>
        ))}
        <form onSubmit={this.addComment}>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Enter your comment</label>
            <textarea
              onChange={this.handleTextChange}
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="1"
            />
          </div>
          <button>comment</button>
        </form>
      </React.Fragment>
    );
  }
}

export default Comments;
