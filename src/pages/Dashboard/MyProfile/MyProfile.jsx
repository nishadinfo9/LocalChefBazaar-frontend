import React from "react";
import ProfileCard from "./ProfileCard";

const MyProfile = () => {
  const user = {
    name: "Nishad",
    email: "nishad@example.com",
    image: "https://via.placeholder.com/150",
    address: "Dhaka, Bangladesh",
    role: "chef",
    status: "active",
    chefId: "CHEF12345",
  };

  return (
    <div>
      <title>Local Chef Bazaar - Profile</title>
      MyProfile
      <ProfileCard user={user} />
    </div>
  );
};

export default MyProfile;
