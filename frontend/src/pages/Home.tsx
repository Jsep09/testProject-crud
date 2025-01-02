import { useEffect, useState } from "react";
import UserTable from "../components/UserTable";
import { Users } from "../interface/user";
import getAllUsers from "../service/getAllUser";

const Home = () => {
  const [users, setUsers] = useState<Users[]>([]);

  const callApi = async () => {
    let result = await getAllUsers();
    setUsers(result);
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <UserTable users={users} />
    </div>
  );
};

export default Home;
