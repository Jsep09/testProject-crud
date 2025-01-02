import React from "react";
import { Users } from "../interface/user";
import { Link } from "react-router-dom";

interface UserTableProps {
  users: Users[];
}

const UserTable: React.FC<UserTableProps> = ({ users }) => {
  return (
    <div className="p-4 md:p-6 bg-white rounded-lg shadow-sm">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Users</h2>
          <p className="text-sm text-gray-500">
            A list of all the users in your account including their name, title,
            email and role.
          </p>
        </div>
        <Link to="/add">
          <button className="w-full sm:w-auto px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            Add user
          </button>
        </Link>
      </div>

      {/* Hidden on mobile, visible on desktop */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">
                Firstname
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">
                Lastname
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">
                Nickname
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">
                Birthdate
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">
                Ages
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">
                Gender
              </th>
              <th className="relative px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {users.map((user, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm font-medium text-gray-500">
                    {user.firstname}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm text-gray-500">{user.lastname}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm text-gray-500">{user.nickname}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm text-gray-500">
                    {user.birthdate}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm text-gray-500">{user.age}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm text-gray-500">{user.gender}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                  <Link to="/edit">
                    <button className="text-indigo-600 hover:text-indigo-900">
                      Edit
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Visible on mobile, hidden on desktop */}
      <div className="space-y-4 md:hidden">
        {users.map((user, index) => (
          <div key={index} className="bg-white border rounded-lg p-4 space-y-2">
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <p className="text-sm font-medium text-gray-900">
                  {user.firstname}
                </p>
                <p className="text-sm text-gray-500">{user.lastname}</p>
              </div>
              <Link to="/edit">
                <button className="text-indigo-600 hover:text-indigo-900">
                  Edit
                </button>
              </Link>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-gray-500">nickname: {user.nickname}</p>
              <p className="text-sm text-gray-500">
                birthdate: {user.birthdate}
              </p>
              <p className="text-sm text-gray-500">age: {user.age}</p>
              <p className="text-sm text-gray-500">gender: {user.gender}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserTable;
