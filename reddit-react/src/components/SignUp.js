import React from "react";
import Posts from "./Posts";

const SignUp = props => {
  return (
    <div>
      {props.loggedIn ? (
        <Posts />
      ) : (
        <form onSubmit={e => props.signUp(e)}>
          <div className="form-group">
            <label for="exampleInputEmail1">Username</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter username"
              name="username"
            />
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              name="email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>

          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              name="password"
            />
          </div>

          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>

          <button type="submit" className="btn btn-primary">
            SignUp
          </button>
        </form>
      )}
    </div>
  );
};
export default SignUp;
