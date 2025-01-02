import axios, { AxiosResponse } from "axios";
import { ApiResponse, Users } from "../interface/user";

const deleteUser = async (id: string | undefined): Promise<Users[]> => {
  try {
    const result: AxiosResponse<ApiResponse> = await axios.delete(
      `http://localhost:8080/api/users/${id}`
    );
    return result.data.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export default deleteUser;
