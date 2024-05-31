'use client';

import { useState } from "react";
import Button from '@/app/ui/button';

const ArtisanForm = () => {
	const [formData, setFormData] = useState({
		first_name: "",
		last_name: "",
		email: "",
		password: "",
		confirm_password: "",
		story: "",
		image_url: "",
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
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
				body: JSON.stringify({ ...formData, type: "artisan" }),
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
			<h1 className="text-5xl">Artisan Registration</h1>
			<div className="flex flex-col bg-tan p-4 md:p-6 text-darkBrown  rounded-md ">	
			<div className="mb-4">
				<label htmlFor="first_name" className="block text-xl">First Name</label>
			<input
				type="text"
				name="first_name"
				placeholder="First Name"
				value={formData.first_name}
				onChange={handleChange}
				required
				/>
			</div>
				<div className="mb-4">
				<label htmlFor="last_name" className="block text-xl">Last Name</label>		

			<input
				type="text"
				name="last_name"
				placeholder="Last Name"
				value={formData.last_name}
				onChange={handleChange}
				required
				/>
				</div>	
				<div className="mb-4">
				<label htmlFor="email" className="block text-xl">Email</label>

			<input
				type="email"
				name="email"
				placeholder="Email"
				value={formData.email}
				onChange={handleChange}
				required
				/>
				</div>
				<div className="mb-4">
					<label htmlFor="password" className="block text-xl">Password</label>

			<input
				type="password"
				name="password"
				placeholder="Password"
				value={formData.password}
				onChange={handleChange}
				required
				/>
				</div>
				<div className="mb-4">
				<label htmlFor="confirm_password" className="block text-xl">Confirm Password</label>

			<input
				type="password"
				name="confirm_password"
				placeholder="Confirm Password"
				value={formData.confirm_password}
				onChange={handleChange}
				required
					/>
					</div>
			<div className="mb-4">	
			<label htmlFor="story" className="block text-xl">Your Story</label>
			<textarea
				name="story"
				placeholder="Your Story (optional)"
				value={formData.story}
				onChange={handleChange}
				/>
			</div>
				<div className="mb-4">
				<label htmlFor="image_url" className="block text-xl">Image</label>	

			<input
				type="text"
				name="image_url"
				placeholder="Image URL (optional)"
				value={formData.image_url}
				onChange={handleChange}
				/>
				
			</div>
			<Button type="submit">Register</Button>
		</div>
		</form>
	);
};

export default ArtisanForm;
