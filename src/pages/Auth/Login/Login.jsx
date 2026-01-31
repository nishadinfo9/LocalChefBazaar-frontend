import React from "react";
import { FaUser, FaUserShield, FaChevronRight } from "react-icons/fa";
import Input from "../../../utils/Input";
import Button from "../../../utils/Button";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import usePost from "../../../hooks/usePost";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const loginUser = usePost({
    url: "/user/login",
    invalidateQueries: [["user"]],
    message: "Login successfully",
  });

  const loginHandler = (data) => {
    if (!data) return;

    loginUser.mutate(data, {
      onSuccess: (res) => {
        localStorage.setItem("accessToken", res.accessToken);
        setUser(res.user);
        reset();

        // Redirect based on role
        if (data.role === "user") navigate("/user/dashboard");
        else if (data.role === "admin") navigate("/admin/dashboard");
        else navigate("/");
      },
    });
  };

  const handleRoleAutoFill = (role) => {
    if (role === "user") {
      setValue("email", "user@example.com");
      setValue("password", "User@1234");
    } else if (role === "chef") {
      setValue("email", "chef@example.com");
      setValue("password", "Chef@1234");
    } else if (role === "admin") {
      setValue("email", "admin@example.com");
      setValue("password", "Admin@1234");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100">
      <div className="w-full max-w-md p-8 rounded-2xl shadow-2xl bg-base-100">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Login
        </h2>

        {/* Login Form */}
        <form
          onSubmit={handleSubmit(loginHandler)}
          className="flex flex-col gap-4"
        >
          <Input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                message: "Invalid email",
              },
            })}
            type="email"
            label="Email"
            placeholder="Enter Your Email"
            error={errors.email?.message}
          />

          <Input
            {...register("password", {
              required: "Password is required",
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+={}[\]|\\:;"'<>,.?/~`]).{8,}$/,
                message: "Invalid password",
              },
            })}
            type="password"
            label="Password"
            placeholder="Enter Your Password"
            error={errors.password?.message}
          />

          <input {...register("role")} type="hidden" />

          <Button
            disabled={loginUser.isPending}
            type="submit"
            className="w-full btn  btn-secondary"
          >
            {loginUser.isPending ? "Logging in..." : "Login"}
          </Button>
        </form>

        {/* Role Buttons */}
        <div className="flex gap-4 mt-4">
          <Button
            type="button" // <-- fixed
            onClick={() => handleRoleAutoFill("user")}
            className="flex-1 btn btn-secondary"
          >
            <FaUser /> User
          </Button>
          <Button
            type="button" // <-- fixed
            onClick={() => handleRoleAutoFill("chef")}
            className="flex-1 btn btn-secondary"
          >
            <FaUser /> Chef
          </Button>

          <Button
            type="button" // <-- fixed
            onClick={() => handleRoleAutoFill("admin")}
            className="flex-1 btn btn-secondary"
          >
            <FaUserShield /> Admin
          </Button>
        </div>

        <p className="text-sm text-gray-600 text-center mt-4">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-secondary font-medium hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
