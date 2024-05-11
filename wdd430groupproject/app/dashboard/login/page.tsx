import React from "react";
import LoginForm from "@/app/ui/login-form";

export default function ProductPage() {
    return (
        <div className="flex flex-col items-center">
            <h2 className="mb-4">Login</h2>
            <LoginForm />
        </div>
    );
}