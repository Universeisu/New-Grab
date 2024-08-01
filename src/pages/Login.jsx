import React from "react";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-md w-80">
        <h2 className="text-lg font-semibold mb-4 text-white">Login</h2>

        <label className="input input-bordered flex items-center gap-2 mb-3 w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 text-gray-300"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            type="text"
            className="grow p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-500 bg-gray-700 text-white placeholder-gray-400"
            placeholder="Username"
          />
        </label>

        <label className="input input-bordered flex items-center gap-2 mb-4 w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 text-gray-300"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="password"
            className="grow p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-500 bg-gray-700 text-white placeholder-gray-400"
            placeholder="Password"
          />
        </label>

        <button className="w-full p-2 bg-black text-white rounded hover:bg-gray-900 transition duration-200">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
