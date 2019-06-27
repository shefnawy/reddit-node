import React from "react";

import { Link } from "react-router-dom";

const Header = ({ loggedIn, logout, username }) => {
  return (
    <div className="header">
      <img
        src="https://external-preview.redd.it/iDdntscPf-nfWKqzHRGFmhVxZm4hZgaKe5oyFws-yzA.png?width=720&auto=webp&s=be9d031a2551b47bcd40ec45feec636d42a32127"
        width="30"
        height="30"
        alt="reddit logo"
      />
      <div className="site-title">Fireit</div>

      <div className="user-info">
        {loggedIn ? (
          <span className="user-meta">
            {username} |{" "}
            <a className="logout-btn" onClick={logout}>
              logout
            </a>
          </span>
        ) : (
          <div>
            <Link
              to="/login"
              className="btn btn-primary text-dark ml-3"
              type="button"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="btn btn-primary text-dark ml-3"
              type="button"
            >
              signUp
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
