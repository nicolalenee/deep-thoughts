import React from "react";

const Sidebar = ({ username }) => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="profile-picture-wrapper">
          <img className="profile-picture" src="/kirby.png" alt="profile" />
          <h2 className="username">{username}</h2>
          <div className="card-body">
            <p className="bio-text">
              Hey there! My name's Nicola. I love to hike, dance, and read.
              Currently, I'm craving some Mexican.
            </p>
            <btn className="btn pill form-input">Edit Profile</btn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
