import axios from "axios";

const updateUsers = async (id: string | undefined, data: object) => {
  try {
    const result = await axios.patch(
      `http://localhost:8080/api/users/${id}`,
      data
    );

    return console.log(result.data);
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export default updateUsers;
