import React from "react";
import "./Layout-styles.css";

const Layout = ({ children }) => {
  return (
    <div className="app">
      <div className="app__header">
        <div>
          <img
            src="https://news.ycombinator.com/y18.gif"
            alt="Hacker News"
            className="app__logo"
          />
        </div>
        <div>
          <a href="/" className="app__name">
            Hacker News
          </a>
          <nav className="app__navbar">
            <ul>
              <li>
                <a href="/newest">new</a> |
              </li>
              <li>
                <a href="/past">past</a> |
              </li>
              <li>
                <a href="/ask">ask</a> |
              </li>
              <li>
                <a href="/show">show</a> |
              </li>
              <li>
                <a href="/jobs">job</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="app__main">{children}</div>
    </div>
  );
};

export default Layout;
