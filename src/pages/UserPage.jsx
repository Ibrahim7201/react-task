import React from "react";
import UserData from "../components/UserData";
import { useParams } from "react-router-dom";
const UserPage = () => {
  const { user } = useParams();
  return (
    <div>
      <UserData user={user} />
    </div>
  );
};

export default UserPage;
