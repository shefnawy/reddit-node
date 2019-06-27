import Post from "./Post";
import CreatePost from "./CreatePost";
import axios from "axios";
import React, { Component } from "react";

class Posts extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    this.getPosts();
  }

  getPosts = () => {
    axios
      .get("http://localhost:8080/api/posts", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
      .then(posts => {
        this.setState({ posts: posts.data.posts });
      })
      .catch(Error => console.log(Error));
  };

  addPost = data => {
    this.setState({ posts: [...this.state.posts, data] });
  };

  addComment = (body, id) => {
    axios
      .post("http://localhost:8080/api/comment", {
        id: id,
        body: body,
        username: this.props.username
      })
      .then(res => {
        let newPosts = this.state.posts;
        newPosts.map(post => {
          if (post._id === id) {
            post.comments.push({ body });
          }
          return post;
        });
        this.setState({ posts: newPosts });
      });
  };

  addVotes = id => {
    axios
      .post("http://localhost:8080/api/upvote", {
        id: id
      })
      .then(res => {
        let newPosts = this.state.posts;
        newPosts.map(post => {
          if (post._id === id) {
            post.votes++;
          }
          return post;
        });
        this.setState({ posts: newPosts });
      });
  };
  downVotes = id => {
    axios
      .post("http://localhost:8080/api/downvote", {
        id: id
      })
      .then(res => {
        let newPosts = this.state.posts;
        newPosts.map(post => {
          if (post._id === id) {
            post.votes--;
          }
          return post;
        });
        this.setState({ posts: newPosts });
      });
  };
  render() {
    return (
      <div>
        <CreatePost addPost={this.addPost} username={this.props.username} />
        {this.state.posts.length > 0
          ? this.state.posts.map(post => {
              return (
                <Post
                  post={post}
                  addComment={this.addComment}
                  addVotes={this.addVotes}
                  downVotes={this.downVotes}
                />
              );
            })
          : "no posts yet"}
      </div>
    );
  }
}

export default Posts;
