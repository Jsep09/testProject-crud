import { useState } from "react";
import createUsers from "../service/createUser";
import { Link } from "react-router-dom";
const Add = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    nickname: "",
    birthdate: "",
    age: "",
    gender: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target; // ใช้ name แทน id
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // ใช้ name เป็น key
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    alert("Form submit!");
    createUsers(formData);
  };

  return (
    <div>
      <Link to="/">
        <div className="m-5">
          <svg
            className="h-10 w-17 text-slate-900"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            />
          </svg>
        </div>
      </Link>
      <div className="max-w-6xl mx-auto mt-8">
        <div className="p-4 mb:p-6 bg-gray-100 rounded-lg shadow-sm">
          <form onSubmit={handleSubmit}>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="firstname"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Firstname
                </label>
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Enter firstname"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="lastname"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Lastname
                </label>
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="Enter lastname"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="nickname"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Nickname
                </label>
                <input
                  type="text"
                  id="nickname"
                  name="nickname"
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="Enter nickname"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="birthdate"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Birthdate
                </label>
                <input
                  type="date"
                  id="birthdate"
                  name="birthdate"
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="YYYY-MM-DD"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="age"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Age
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="Enter age"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="gender"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select Gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add;
