// SignIn.js

import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    // Add your sign-in logic here
    console.log("Signing in with email:", email, "and password:", password);
    // You can implement the actual sign-in functionality using authentication services.
    // For example, you might use Firebase Authentication, Auth0, or your custom backend.
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-4xl font-bold text-center mb-8">Sign In</h1>
      <div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          <div className="mb-6">
            <button
              type="button"
              onClick={handleSignIn}
              className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            >
              Sign In
            </button>
          </div>

          <div className="text-center">
            <p className="text-gray-600">
              New user?{" "}
              <Link to="/signup" className="text-blue-500">
                Create Account
              </Link>
            </p>
          </div>

          {/* Add additional UI elements such as forgot password, social login, etc. if needed */}
        </form><br></br><br></br><br></br><br></br>
      </div>
    </div>
  );
};

export default SignIn;
