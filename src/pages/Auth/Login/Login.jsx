import React from "react";
import Input from "../../../utils/Input";
import Button from "../../../utils/Button";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import usePost from "../../../hooks/usePost";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const loginUser = usePost({
    url: "/user/login",
    invalidateQueries: [["user"]],
  });

  const loginHandler = (data) => {
    if (!data) return;
    console.log(data);
    loginUser.mutate(data, {
      onSuccess: (data) => {
        setUser(data?.user?.loginUser);
        reset();
        navigate("/");
      },
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100">
      <div className="w-full max-w-md p-8 rounded-2xl shadow-2xl bg-base-100">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Login
        </h2>

        <form
          onSubmit={handleSubmit(loginHandler)}
          className="flex flex-col gap-4"
        >
          <Input
            {...register("email", {
              required: "email is required",
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
              required: "password is required",
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
          <Button type="submit" className="w-full btn btn-secondary">
            Login
          </Button>
        </form>

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
