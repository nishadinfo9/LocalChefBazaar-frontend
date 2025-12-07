import { FiAlertTriangle } from "react-icons/fi";
import { useNavigate } from "react-router";

const Notfound = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-100 px-6">
      <div className="text-center space-y-4">
        <FiAlertTriangle className="text-6xl text-warning mx-auto animate-bounce" />

        <h1 className="text-5xl font-bold">404</h1>
        <p className="text-lg text-gray-500">
          Oops! The page you're looking for doesn't exist.
        </p>
        <button
          onClick={() => navigate(-1)}
          className="btn btn-primary rounded-xl mt-2"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default Notfound;
