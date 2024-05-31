"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { TRegistrationSchema, registrationSchema } from "../lib/type";
import Button from "@/app/ui/button";

// React hook form to handle validation and to do away with useState
export default function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    reset,
  } = useForm<TRegistrationSchema>({
    resolver: zodResolver(registrationSchema),
  });

  const onSubmit = async (data: TRegistrationSchema) => {
    const response = await fetch("/api/registration", {
      method: "POST",
      body: JSON.stringify({
        registrationType: data.registrationType,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        image: data.image,
        password: data.password,
        confirmPassword: data.confirmPassword,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseData = await response.json();
    if (!response.ok) {
      alert("Form submission Failed!");
      return;
    }

    if (responseData.errors) {
      const errors = responseData.errors;
      if (errors.firstName) {
        setError("firstName", {
          type: "server",
          message: errors.firstName,
        });
      } else if (errors.lastName) {
        setError("lastName", {
          type: "server",
          message: errors.lastName,
        });
      } else if (errors.email) {
        setError("email", {
          type: "server",
          message: errors.email,
        });
      } else if (errors.image) {
        setError("image", {
          type: "server",
          message: errors.image,
        });
      } else if (errors.password) {
        setError("password", {
          type: "server",
          message: errors.password,
        });
      } else if (errors.confirmPassword) {
        setError("confirmPassword", {
          type: "server",
          message: errors.confirmPassord,
        });
      } else {
        alert("Something went wrong!");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-2">
      <div className="flex flex-col w-full rounded-md border border-gray-200 py-[9px] pl-5 text-sm outline-2 placeholder:text-gray-400">
        <label className="mr-2">
          <input
            {...register("registrationType")}
            value={"customer"}
            type="radio"
            title="customer"
            name="registrationType"
            className="mr-2"
          />
          Customer
        </label>
        <label className="mr-2">
          <input
            {...register("registrationType")}
            value={"vendor"}
            type="radio"
            title="vendor"
            name="registrationType"
            className="mr-1"
          />
          Artist
        </label>
      </div>
      {errors.registrationType && (
        <p className="text-red-500">{`${errors.registrationType.message}`}</p>
      )}
      <input
        {...register("firstName")}
        type="text"
        placeholder="First Name"
        className="block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm  placeholder:text-gray-400"
      />
      {errors.firstName && (
        <p className="text-red-500">{`${errors.firstName.message}`}</p>
      )}
      <input
        {...register("lastName")}
        type="text"
        placeholder="Last Name"
        className="block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-400"
      />
      {errors.lastName && (
        <p className="text-red-500">{`${errors.lastName.message}`}</p>
      )}
      <input
        {...register("email")}
        type="email"
        placeholder="Email"
        className="block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-400"
      />
      {errors.email && (
        <p className="text-red-500">{`${errors.email.message}`}</p>
      )}
      <input
        {...register("image")}
        type="text"
        placeholder="Profile Picture"
        className="block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-400"
      />
      {errors.image && (
        <p className="text-red-500">{`${errors.image.message}`}</p>
      )}
      <input
        {...register("password")}
        type="password"
        placeholder="Password"
        className="block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-400"
      />
      {errors.password && (
        <p className="text-red-500">{`${errors.password.message}`}</p>
      )}
      <input
        {...register("confirmPassword")}
        type="password"
        placeholder="Confirm password"
        className="block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-400"
      />
      {errors.confirmPassword && (
        <p className="text-red-500">{`${errors.confirmPassword.message}`}</p>
      )}
      <Button
        disabled={isSubmitting}
        type="submit"
        className="rounded-md w-full border disabled:bg-red-800 disabled:text-white disabled={false}"
      >
        Submit
      </Button>
    </form>
  );
}
