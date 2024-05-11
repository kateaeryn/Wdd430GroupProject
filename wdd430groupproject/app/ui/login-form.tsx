"use client";

import { Button } from "./button";
import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useState } from "react";

export default function LoginForm() {
    // Mock authenticate function that returns a successful response
    const authenticate = async () => ({ code: "CredentialsSignin" });

    // Use a mock state for the authentication code
    const [code, setCode] = useState<string | undefined>(undefined);

    // Simulate a successful authentication
    useEffect(() => {
        authenticate().then((response) => {
            setCode(response.code);
        });
    }, []);

    return (
        <form
            action="#"
            className="bg-white shadow-2xl w-30 min-w-96 border rounded px-8 pt-6 pb-8 mb-4"
        >
            <div className="block text-black-700 font-bold mb-2">
                <h1 className="mb-3 text-base text-gray-500 mb-10">Please log in to continue.</h1>
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
                            />
                        </div>
                    </div>
                </div>
                <LoginButton />
                <div className="flex h-8 items-end space-x-1">
                    {code === "CredentialsSignin" && (
                        <>
                            <p
                                aria-live="polite"
                                className="text-sm text-red-500"
                            >
                                Invalid credentials
                            </p>
                        </>
                    )}
                </div>
            </div>
        </form>
    );
}

function LoginButton() {
    const { pending } = useFormStatus();

    return <Button disabled={pending}>Log in</Button>;
}
