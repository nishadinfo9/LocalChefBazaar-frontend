import React from "react";
import useFetch from "../../../../hooks/useFetch";
import Loader from "../../../../utils/Loader";
import RequestCard from "./RequestCard";
import usePatch from "../../../../hooks/usePatch";

const ManageRequests = () => {
  const { data, isLoading, isError, error, refetch } = useFetch({
    url: "/user/all-user-requests",
    queryKey: ["requests"],
  });

  const updateRequest = usePatch({
    invalidateQueries: [["requests"]],
    message: "request updated successfully",
  });

  const handleAccept = (request) => {
    updateRequest.mutate(
      {
        url: `/user/update-request/${request.userId}`,
        payload: {
          requestType: request.requestType,
          requestStatus: "approve",
        },
      },
      {
        onSuccess: () => {
          refetch();
        },
      }
    );
  };

  const handleReject = (request) => {
    updateRequest.mutate(
      {
        url: `/user/update-request/${request.userId}`,
        payload: {
          requestType: request.requestType,
          requestStatus: "reject",
        },
      },
      {
        onSuccess: () => {
          refetch();
        },
      }
    );
  };

  if (isLoading) return <Loader />;
  if (isError) return <p>{error.message}</p>;
  if (!data?.requests?.length) return <p>Request Not Found</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Manage Request</h1>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>User Name</th>
              <th>User Email</th>
              <th>Request Type</th>
              <th>Request Status</th>
              <th>Request Time</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.requests?.map((request) => (
              <RequestCard
                handleAccept={handleAccept}
                handleReject={handleReject}
                key={request._id}
                request={request}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageRequests;
