import React from "react";
import ProfileCard from "./ProfileCard";
import useFetch from "../../../hooks/useFetch";
import useAuth from "../../../hooks/useAuth";
import Loader from "../../../utils/Loader";

const MyProfile = () => {
  const { user } = useAuth();
  const userData = {
    name: "Nishad",
    email: "nishad@example.com",
    image: "https://via.placeholder.com/150",
    address: "Dhaka, Bangladesh",
    role: "chef",
    status: "active",
    chefId: "CHEF12345",
  };

  const { data, isLoading, isError, error } = useFetch({
    url: "/user/user-profile",
    queryKey: ["profile", user?.email],
    enabled: !!user?.email,
  });

  if (isLoading) return <Loader />;
  if (isError) return <p>{error}</p>;

  return (
    <div>
      <title>Local Chef Bazaar - Profile</title>
      <h1 className="text-3xl font-bold mb-6">My Profile</h1>
      <ProfileCard user={data?.user} />
    </div>
  );
};

export default MyProfile;
