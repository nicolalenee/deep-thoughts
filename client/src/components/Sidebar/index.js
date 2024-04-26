import React from "react";

const Sidebar = ({ bioText }) => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="profile-picture-wrapper">
          <img className="profile-picture" src="/kirby.png" alt="profile" />
        </div>
        <div className="card-body">
          <p className="bioText">{bioText}</p>
          <button className="btn pill form-input">Edit Profile</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
