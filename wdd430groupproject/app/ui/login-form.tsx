"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import Button from "./button";

export default function LoginForm() {
    console.log("Form loaded"); // Add console.log statement

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        console.log("Form submitted"); // Add console.log statement

        const result = await signIn("credentials", {
            redirect: false,
            email,
            password,
        });

        if (result?.error) {
            setError(result.error);
            console.log("Error:", result.error); // Add console.log statement
        } else {
            setError(null);
            console.log("Login successful"); // Add console.log statement
            // Redirect to the home page
            window.location.href = "/";}
    };

	return (
		<form
			onSubmit={handleSubmit}
			className="bg-white shadow-2xl w-30 min-w-96 border rounded px-8 pt-6 pb-8 mb-4"
		>
			<div className="block text-black-700 font-bold mb-2">
				<h1 className="text-base text-gray-500 mb-10">
					Please log in to continue.
				</h1>
				<div className="w-full">
					<div>
						<label
							className="block text-black-700 text-xl font-bold mb-2"
							htmlFor="email"
						>
							Email
						</label>
						<div className="relative">
							<input
								className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-400"
								id="email"
								type="email"
								name="email"
								placeholder="Enter your email address"
								required
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
					</div>
					<div className="mt-4">
						<label
							className="block text-black-700 text-xl font-bold mb-2"
							htmlFor="password"
						>
							Password
						</label>
						<div className="relative">
							<input
								className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-400"
								id="password"
								type="password"
								name="password"
								placeholder="Enter password"
								required
								minLength={6}
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
					</div>
				</div>
				<Button type="submit">Log in</Button>
				<div className="flex h-8 items-end space-x-1">
					{error && (
						<p
							aria-live="polite"
							className="text-sm text-red-500"
						>
							{error}
						</p>
					)}
				</div>
			</div>
		</form>
	);
}
