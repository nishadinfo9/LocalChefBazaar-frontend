import React from "react";
import useFetch from "../../../../hooks/useFetch";
import Loader from "../../../../utils/Loader";
import UserCard from "./UserCard";
import usePatch from "../../../../hooks/usePatch";

const ManageUser = () => {
  const { data, isLoading, isError, error, refetch } = useFetch({
    url: "/user/all-users",
    queryKey: ["users-admin"],
  });

  const addFraud = usePatch({
    invalidateQueries: [["frauds"]],
    message: "fraud added successfully",
  });

  const fraudHandler = (userId) => {
    addFraud.mutate(
      { url: `/user/fraud-user/${userId}` },
      {
        onSuccess: () => {
          refetch();
        },
      }
    );
  };

  if (isLoading) return <Loader />;
  if (isError) return <p>{error.message}</p>;
  if (!data?.users?.length) return <p>Users Not Found</p>;

  return (
    <div>
      <title>Local Chef Bazaar - My Meals</title>
      <h1 className="text-3xl font-bold mb-6">Manage Users</h1>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>User Image</th>
              <th>User Name</th>
              <th>User Email</th>
              <th>User Role</th>
              <th>User Status</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.users?.map((user) => (
              <UserCard
                key={user._id}
                user={user}
                fraudHandler={fraudHandler}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
