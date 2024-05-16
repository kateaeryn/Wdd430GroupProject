import React from "react";
import LoginForm from "../../ui/login-form";

export default function LoginPage() {
	return (
		<div className="flex flex-col items-center">
			<h2 className="mb-4">Login</h2>
			<LoginForm />
		</div>
	);
}
