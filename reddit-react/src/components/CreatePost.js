import React, { Component } from "react";
import axios from "axios";

class CreatePost extends Component {
  state = {
    category: "",
    image: "",
    body: ""
  };

  handleCategoryChange = e => {
    this.setState({
      category: e.target.value
    });
  };
  handleBodyChange = e => {
    this.setState({
      body: e.target.value
    });
  };
  handleImageChange = e => {
    this.setState({
      image: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();

    const data = {
      username: this.props.username,
      category: this.state.category,
      imageUrl: this.state.image,
      body: this.state.body
    };
    axios
      .post(`http://localhost:8080/api/post`, data)
      .then(res => {
        this.props.addPost({ ...data, votes: 0 });
      })
      .catch(err => console.log(err));
    this.setState({ authName: "", category: "", image: "", body: "" });
  };

  render() {
    return (
      <form
        className="input-group mb-5 w-70 mt-5 "
        onSubmit={this.handleSubmit}
      >
        <input
          type="text"
          className="form-control"
          placeholder="Enter Category"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          value={this.state.category}
          onChange={this.handleCategoryChange}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Enter body"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          value={this.state.body}
          onChange={this.handleBodyChange}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Enter imageURL"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          value={this.state.image}
          onChange={this.handleImageChange}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="submit"
            id="button-addon2"
          >
            Post
          </button>
        </div>
      </form>
    );
  }
}

export default CreatePost;
