import React from "react";

const ProfileCard = ({ user }) => {
  return (
    <div className="max-w-xl mx-auto shadow-lg rounded-xl p-6 ">
      <div className="flex  items-center gap-5">
        <img
          src="/images/user.png"
          alt="User Profile"
          className="w-24 h-24 border rounded-full object-cover mb-4"
        />
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold">{user.name}</h2>
          <p>{user.address}</p>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-3xl  font-bold">Parsonal Infomation</h2>
        <div className="grid grid-cols-2 my-5 gap-5">
          <div className="mt-3">
            <h3 className="text-lg font-bold">Email</h3>
            <p>{user.email}</p>
          </div>

          <div className="mt-3">
            <h3 className="text-lg font-bold">User Status</h3>
            <span
              className={
                user.status === "fraud" ? "text-red-500" : "text-green-500"
              }
            >
              {user.status}
            </span>
          </div>
          <div className="mt-3">
            <h3 className="text-lg font-bold">User Role</h3>
            <p>{user.role}</p>
          </div>

          {user.role === "chef" && (
            <div className="mt-3">
              <h3 className="text-lg font-bold">User Status</h3>
              <span>{user.chefId}</span>
            </div>
          )}
        </div>
      </div>
      <div className="flex items-start gap-10">
        <button className="btn btn-secondary ">Be A Chef</button>
        <button className="btn btn-primary">Be an Admin</button>
      </div>
    </div>
  );
};

export default ProfileCard;
