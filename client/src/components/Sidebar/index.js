import React from "react";

const Sidebar = ({ username }) => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="profile-picture-wrapper">
          <img className="profile-picture" src="/kirby.png" alt="profile" />
          <div className="card-body">
            <p className="bio-text"></p>
            <btn className="btn pill form-input">Edit Profile</btn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;