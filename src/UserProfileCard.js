import React from "react";
import "./example.css";

const UserProfileCard = ({ avatar, login, email, setUserId, id }) => {
  return (
    <div className="card-container">
      <div className="user-image">
        <img src={avatar} alt="no image" width={50} />
      </div>
      <div className="user-info">
        <h3 className="title">{login}</h3>
        <h4 className="url">{email}</h4>
      </div>
      <button type="button" onClick={() => setUserId(id)}>
        THIS
      </button>
    </div>
  );
};

export default UserProfileCard;
