'use client';

import { useState } from "react";

const CustomerForm = () => {
	const [formData, setFormData] = useState({
		first_name: "",
		last_name: "",
		email: "",
		password: "",
		confirm_password: "",
		image_url: "",
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (formData.password !== formData.confirm_password) {
			alert("Passwords do not match");
			return;
		}
		try {
			const response = await fetch("/api/register/route", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ ...formData, type: "customer" }),
			});

			if (response.ok) {
				alert("Registration successful!");
				try {
					window.location.href = "/dashboard/login";
				} catch (error) {
					console.error("Error redirecting:", error);
				}
			} else {
				alert("Registration failed.");
			}
		} catch (error) {
			console.error("Failed to submit the form:", error);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				name="first_name"
				placeholder="First Name"
				value={formData.first_name}
				onChange={handleChange}
				required
			/>
			<input
				type="text"
				name="last_name"
				placeholder="Last Name"
				value={formData.last_name}
				onChange={handleChange}
				required
			/>
			<input
				type="email"
				name="email"
				placeholder="Email"
				value={formData.email}
				onChange={handleChange}
				required
			/>
			<input
				type="password"
				name="password"
				placeholder="Password"
				value={formData.password}
				onChange={handleChange}
				required
			/>
			<input
				type="password"
				name="confirm_password"
				placeholder="Confirm Password"
				value={formData.confirm_password}
				onChange={handleChange}
				required
			/>
			<input
				type="url"
				name="image_url"
				placeholder="Image URL (optional)"
				value={formData.image_url}
				onChange={handleChange}
			/>
			<button type="submit">Register</button>
		</form>
	);
};

export default CustomerForm;
