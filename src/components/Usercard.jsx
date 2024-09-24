import React from "react";

function UserCard({ user }) {
  return (
    <div className="bg-slate-400 shadow-md rounded-lg p-4 max-w-sm w-full mx-auto border border-gray-200">
      {/* User avatar and name */}
      <div className="flex items-center space-x-4 p-4">
        <img
          src={user.avatar}
          alt={`${user.first_name} avatar`}
          className="rounded-full w-16 h-16 border-2 border-gray-300"
        />

        <div>
          <h2 className="text-lg font-semibold">
            {user.first_name} {user.last_name}
          </h2>
          <p className="text-sm text-gray-500">
            @{user.first_name.toLowerCase()}
          </p>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-4 border-gray-300" />

      {/* Interaction buttons */}
      <div className="flex justify-around">
        <button className="bg-blue-500 text-white text-sm font-semibold py-2 px-4 rounded-full hover:bg-blue-600">
          Follow
        </button>
        <button className="bg-gray-200 text-sm font-semibold py-2 px-4 rounded-full hover:bg-gray-300">
          Message
        </button>
      </div>

      {/* User email or bio */}
      <div className="mt-4 px-4 text-center">
        <p className="text-sm text-gray-700">
          <strong>Email:</strong> {user.email}
        </p>
      </div>
    </div>
  );
}

export default UserCard;
