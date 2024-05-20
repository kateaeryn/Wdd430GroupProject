import React, { createContext, useContext, useState, useEffect } from "react";

interface User {
	id: string;
	first_name: string;
	last_name: string;
	email: string;
	image_url?: string;
}

interface AuthContextType {
	isLoggedIn: boolean;
	user: User | null;
	userType: string | null;
	login: (token: string, userType: string) => void;
	logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
	isLoggedIn: false,
	user: null,
	userType: null,
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
	const [userType, setUserType] = useState<string | null>(() => {
		if (typeof window !== "undefined") {
			return localStorage.getItem("userType");
		}
		return null;
	});

	useEffect(() => {
		if (isLoggedIn) {
			fetchUserData();
		}
	}, [isLoggedIn]);

	const login = (token: string, userType: string) => {
		localStorage.setItem("token", token);
		localStorage.setItem("userType", userType);
		setIsLoggedIn(true);
		setUserType(userType);
		fetchUserData();
	};

	const logout = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("userType");
		setIsLoggedIn(false);
		setUser(null);
		setUserType(null);
	};

	const fetchUserData = async () => {
		try {
			const token = localStorage.getItem("token");
			if (!token) {
				throw new Error("No token found");
			}

			const response = await fetch("/api/login/route", {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			if (response.ok) {
				const userData = await response.json();
				setUser(userData);
			} else {
				const errorData = await response.json();
				console.error(
					"Error fetching user data:",
					errorData.message || response.statusText
				);
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
