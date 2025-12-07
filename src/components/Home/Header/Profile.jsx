import React from "react";

const Profile = ({ profile }) => {
  return (
    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
      <div className="w-10 rounded-full">
        <img alt="profile" src={profile} />
      </div>
    </div>
  );
};

export default Profile;
