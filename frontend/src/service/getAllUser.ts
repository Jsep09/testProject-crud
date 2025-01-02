import axios, { AxiosResponse } from "axios";
import { ApiResponse, Users } from "../interface/user";

const getAllUsers = async (): Promise<Users[]> => {
  try {
    const result: AxiosResponse<ApiResponse> = await axios.get(
      "http://localhost:8080/api/users/"
    );
    return result.data.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export default getAllUsers;
