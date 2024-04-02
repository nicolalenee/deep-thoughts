import React from "react";

const Sidebar = ({ bioText }) => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="profile-picture-wrapper">
          <img className="profile-picture" src="/kirby.png" alt="profile" />
        </div>
        <div className="card-body">
          <p className="bio">{bioText}</p>
          <btn className="btn pill form-input">Edit Profile</btn>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
