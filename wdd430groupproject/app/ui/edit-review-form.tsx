"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Button from "@/app/ui/button";

const EditReviewForm = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const id = searchParams?.get("id");
    const user_id = searchParams?.get("user_id");
    const item_id = searchParams?.get("item_id"); // Assuming item_id is also passed via URL
    const [formData, setFormData] = useState({
        text: "",
        rate: 0,
        date: new Date(),
    });

    useEffect(() => {
        if (id) {
            fetch(`/api/reviews/${id}/route`)
                .then((res) => res.json())
                .then((data) =>
                    setFormData({
                        text: data.text,
                        rate: data.rate,
                        date: new Date(data.date),
                    })
                );
        }
    }, [id]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: name === "rate" ? Number(value) : value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const updatedData = {
                ...formData,
                user_id,
                item_id,
                date: new Date().toISOString(),
            };
            await fetch(`/api/reviews/${id}/route`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatedData),
            });
            router.push("/dashboard/account");
        } catch (error) {
            console.error("Failed to update review:", error);
        }
    };

    const handleDelete = async () => {
        try {
            await fetch(`/api/reviews/${id}/route`, {
                method: "DELETE",
            });
            router.push("/dashboard/account");
        } catch (error) {
            console.error("Failed to delete review:", error);
        }
    };

    const handleCancel = () => {
        router.push("/dashboard/account");
    };

    return (
        <div>
            <form
                onSubmit={handleSubmit}
                className="bg-tan shadow-2xl w-auto border rounded px-8 pt-6 pb-8 mb-4"
            >
                <div className="mb-4">
                    <label
                        htmlFor="rating"
                        className="block text-black text-2xl font-bold mb-2"
                    >
                        Rating:
                    </label>
                    <input
                        type="number"
                        name="rate"
                        value={formData.rate}
                        onChange={handleChange}
                        min="1"
                        max="5"
                        className="shadow appearance-none border rounded w-10 min-w-16 py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="text"
                        className="block text-black text-2xl font-bold mb-2"
                    >
                        Comment:
                    </label>
                    <textarea
                        name="text"
                        value={formData.text}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-95 min-w-80 h-72 py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                
                {/* <Button type="button" onClick={handleDelete} className="mr-2">
                    Delete
                </Button> */}
                <Button type="button" onClick={handleCancel} className="mr-2">
                    Cancel
          </Button>
          <Button type="submit" className="mr-2">
                    Submit Review
                </Button>
            </form>
        </div>
    );
};

export default EditReviewForm;
