import React, { useEffect, useState, createContext } from "react";
import axios from "axios";
import { useUser } from "../auth/useUser";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { role } = useUser() || "";
  const [auth, setAuth] = useState({ isLogged: false, role: "" });
  const [users, setUsers] = useState(null);
  const [data, setData] = useState(null);
  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  useEffect(() => {
    if (window.localStorage.getItem("token") && window.localStorage.getItem("role"))
      setAuth((oldAuth) => {
        return {
          ...oldAuth,
          isLogged: true,
          role,
        };
      });
  }, [role]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
      setData({ users: data });
    };
    fetchData();
  }, []);
  const handleAddingUser = (newUser) => {
    setData((oldState) => {
      return {
        users: [...oldState.users, newUser],
      };
    });
  };
  const handleDelete = (userToDelete) => {
    setData((oldState) => {
      return {
        users: oldState.users.filter((user) => {
          return user.id !== userToDelete;
        }),
      };
    });
  };
  return <AuthContext.Provider value={{ auth, setAuth, users, setUsers, handleAddingUser, handleDelete, data, setData, open, setOpen, editMode, setEditMode }}>{children}</AuthContext.Provider>;
};
