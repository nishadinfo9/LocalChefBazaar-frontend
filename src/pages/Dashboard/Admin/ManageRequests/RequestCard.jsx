import React, { memo } from "react";
import { shortTimeAgo } from "../../../../utils/shortTimeAgo";

const RequestCard = memo(({ request, handleAccept, handleReject }) => {
  const {
    userName = "",
    userEmail = "",
    requestType = "",
    requestStatus = "",
    requestTime = "",
    _id,
  } = request;

  return (
    <tr>
      <td>{userName}</td>
      <td>{userEmail}</td>
      <td>{requestType}</td>
      <td>{requestStatus}</td>
      <td>{shortTimeAgo(requestTime)}</td>
      <td>
        <div className="flex justify-center items-center gap-5 ">
          <>
            <button
              disabled={requestStatus !== "pending"}
              onClick={() => handleAccept(request)}
              className="btn btn-secondary text-white"
            >
              Accept{" "}
            </button>
            <button
              disabled={requestStatus !== "pending"}
              onClick={() => handleReject(request)}
              className="btn btn-error text-white"
            >
              Reject{" "}
            </button>
          </>
        </div>
      </td>
    </tr>
  );
});

export default RequestCard;
