import React from "react";
import Input from "../../../utils/Input";
import Button from "../../../utils/Button";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import usePost from "../../../hooks/usePost";

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const createAccount = usePost({
    url: "/user/register",
    invalidateQueries: [["user"]],
    message: "Register successfully",
  });

  const registerHandler = async (data) => {
    const formData = new FormData();

    if (!data) return;
    const { name, email, password, confirmPassword, profileImage } = data;

    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("confirmPassword", confirmPassword);

    if (profileImage && profileImage.length > 0) {
      formData.append("profileImage", profileImage[0]);
    }

    try {
      createAccount.mutate(formData, {
        onSuccess: () => {
          reset();
          navigate("/login");
        },
        onError: (error) => {
          console.log(error);
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-8 rounded-2xl shadow-2xl bg-base-100">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Register
        </h2>

        <form
          onSubmit={handleSubmit(registerHandler)}
          className="flex flex-col gap-4"
        >
          <Input
            {...register("name", {
              required: "name is required",
              pattern: {
                value: /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/,
                message: "Invalid name",
              },
            })}
            type="text"
            label="Name"
            placeholder="Enter Your Name"
            error={errors.name?.message}
          />

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
            {...register("profileImage", {
              required: "profile image is required",
            })}
            type="file"
            label="Profile Image"
            error={errors.profileImage?.message}
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
          <Input
            {...register("confirmPassword", {
              required: "confirm password is required",
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+={}[\]|\\:;"'<>,.?/~`]).{8,}$/,
                message: "Invalid confirm password",
              },
            })}
            type="password"
            label="Confirm Password"
            placeholder="Enter Your Confirm Password"
            error={errors.confirmPassword?.message}
          />

          <Button
            disabled={createAccount.isPending}
            type="submit"
            className={`w-full btn btn-secondary disabled:bg-gray-800`}
          >
            {createAccount.isPending ? "Registering" : "Register"}
          </Button>
        </form>

        <p className="text-sm text-gray-700 text-center mt-4">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-secondary font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
