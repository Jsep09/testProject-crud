import axios, { AxiosResponse } from "axios";
// import { ApiResponse, Users } from "../interface/user";

const createUsers = async (data: object) => {
  try {
    const result = await axios.post("http://localhost:8080/api/users/", data);

    return console.log(result.data);
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export default createUsers;
