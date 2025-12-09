import React, { memo } from "react";

const UserCard = memo(({ user, fraudHandler }) => {
  const { profileImage, name, email, role, status, _id } = user;
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={profileImage} alt={name} />
            </div>
          </div>
          <div></div>
        </div>
      </td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{role}</td>
      <td>{status}</td>
      <td className="text-center ">
        <div className="flex justify-center items-center gap-5 ">
          {role !== "admin" && status !== "fraud" ? (
            <button
              onClick={() => fraudHandler(_id)}
              className="btn btn-error text-white"
            >
              Make Fraud
            </button>
          ) : (
            <button disabled className="btn btn-error text-white">
              Make Fraud
            </button>
          )}
        </div>
      </td>
    </tr>
  );
});

export default UserCard;
