import React from "react";

const Post = () => {
  return (
    <div className="post">
      <div className="image">
        <img src="https://cdn.britannica.com/49/182849-050-4C7FE34F/scene-Iron-Man.jpg" alt="f"></img>
      </div>
      <div className="texts">
        <h2>Iron Man, American comic book superhero,. </h2>
        <p className="info">
          <a className="auhtor" href="d">
            Gowtham
          </a>
          <time>2023-01-11</time>
        </p>
        <p className="summary">
          Iron Man’s alter ego of Tony Stark—wealthy playboy inventor, owner of Stark International, and international arms manufacturer—was partly
          based on the wealthy inventor,{" "}
        </p>
      </div>
    </div>
  );
};

export default Post;
