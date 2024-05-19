import React from "react";
import { createContext, useContext, useState } from "react";
import user from "../../pages/api/login/route";

// Define the shape of the user object
interface User {
	id: string;
	name: string;
	email: string;
	image_url?: string; // Make image_url optional
}

// Define the shape of the context value
interface AuthContextType {
	isLoggedIn: boolean;
	user: User | null;
	userType: string | null; // Add userType to the context
	login: (token: string, userType: string) => void;
	logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
	isLoggedIn: false,
	user: null,
	userType: null, // Initialize userType
	login: () => {},
	logout: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(() => {
		if (typeof window !== "undefined") {
			return !!localStorage.getItem("token");
		}
		return false;
	});

	const [user, setUser] = useState<User | null>(null);
	const [userType, setUserType] = useState<string | null>(null); // Add userType state

	const login = (token: string, userType: string) => {
		localStorage.setItem("token", token);
		localStorage.setItem("userType", userType); // Store userType in localStorage
		setIsLoggedIn(true);
		setUserType(userType); // Set userType state
		fetchUserData();
	};

	const logout = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("userType"); // Clear userType from localStorage
		setIsLoggedIn(false);
		setUser(null);
		setUserType(null); // Clear userType state
	};

	const fetchUserData = async () => {
		try {
			const response = await fetch("/api/login", {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
			});
			if (response.ok) {
				const userData = await response.json();
				setUser(userData);
        console.log("userData", userData);
			}
		} catch (error) {
			console.error("Error fetching user data:", error);
		}
	};

	return (
		<AuthContext.Provider
			value={{ isLoggedIn, user, userType, login, logout }}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);
