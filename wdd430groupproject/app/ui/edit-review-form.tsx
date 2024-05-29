"use client";

import OStars from "@/app/ui/components/star-rating";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import { updateReview } from "../lib/actions";
import { useRouter } from "next/navigation";
import { deleteReview } from "../lib/actions";

export default function EditReviewForm(props: any) {
  const router = useRouter();
  let bruh4 = JSON.stringify(props.bruh2);
  let bruh5 = JSON.parse(bruh4);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    reset,
    setValue,
    getValues,
  } = useForm({ defaultValues: { rate: bruh5.rate, text: bruh5.text } });

  const rating = watch("rate", bruh5.rate);
  const handleRatingChange = (newRating: number) => {
    setValue("rate", newRating);
  };

  const onSubmit = async (data: FieldValues) => {
    const sanitizedData = {
      ...data,
      text: data.text.replace(/\s+/g, " ").trim(),
    };

    if (sanitizedData) {
      console.log("Submitted Data:", sanitizedData);
    }
    let data2 = {
      ...sanitizedData,
      id: bruh5.id,
    };
    console.log(`line 39${JSON.stringify(data2)}`);
    await updateReview(JSON.stringify(data2));
    router.push(`/dashboard/account`);
  };

  async function onDelete(data: string) {
    await deleteReview(data);
    router.push(`/dashboard/account`);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-2">
      <strong>Edit Review</strong>
      <strong>Review Date: {new Date(bruh5.date).toLocaleDateString()}</strong>
      <textarea
        {...register("text", {
          maxLength: {
            value: 100,
            message: "Cannot exceed 100 characters",
          },
        })}
        className="w-[400px] h-[300px]"
        placeholder={bruh5.text}
      ></textarea>
      {errors.text && (
        <p className="text-red-500">{`${errors.text.message}`}</p>
      )}
      <hr />
      <label>Stars Rated</label>
      <OStars
        currentStar={Number(rating)}
        onRatingChange={handleRatingChange}
        register={register("rate", {
          validate: (value) =>
            value !== bruh5.rate ||
            getValues("text") !== bruh5.text ||
            "No changes submitted",
        })}
      />
      {errors.rate && (
        <p className="text-red-500">{`${errors.rate.message}`}</p>
      )}
      <button
        disabled={isSubmitting}
        type="submit"
        className="bg-blue-200 rounded-md border border-gray-200 disabled:bg-red-800 disabled:text-white disabled={false}"
      >
        Submit Review Edit
      </button>
      <button
        className="bg-red-500 rounded-md border border-black-800 disabled:bg-red-1000 disabled:text-white disabled={false}"
        type="button"
        onClick={() => onDelete(bruh5.id)}
      >
        Delete Review
      </button>
    </form>
  );
}
