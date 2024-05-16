'use client';
import React, { useState } from 'react';

export default function RegistrationForm() {
  const [email, newEmail] = useState('');
  const [password, newPassword] = useState('');
  const [confirmPassword, newConfirmPassword] = useState('');
  const [submit, newSubmit] = useState(false);
  const [errors, setUpErrors] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    newSubmit(true);

    if (password !== confirmPassword) {
      setUpErrors(['Password & Confirm password do not match ']);
      newSubmit(false);
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 3000));

    newEmail('');
    newPassword('');
    newConfirmPassword('');
    newSubmit(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-y-2">
      {errors.length > 0 && (
        <ul>
          {errors.map((error) => (
            <li key={error} className="">
              {error}
            </li>
          ))}
        </ul>
      )}
      <input
        value={email}
        onChange={(e) => newEmail(e.target.value)}
        type="email"
        required
        placeholder="Email"
        className=""
      />
      <input
        value={password}
        onChange={(e) => newPassword(e.target.value)}
        type="password"
        required
        placeholder="Password"
        className=""
      />
      <input
        value={confirmPassword}
        onChange={(e) => newConfirmPassword(e.target.value)}
        type="password"
        required
        placeholder="Confirm password"
        className=""
      />

      <button
        type="submit"
        disabled={submit}
        className="bg-red-800 disabled:bg-gray-800"
      >
        Submit
      </button>
    </form>
  );
}
