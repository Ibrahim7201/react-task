import React, { useEffect, useState, createContext } from 'react';
import axios from 'axios';
import { useUser } from '../auth/useUser';
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { role } = useUser() || '';
  const [auth, setAuth] = useState({ isLogged: false, role: '' });
  const [users, setUsers] = useState(null);
  const [data, setData] = useState(null);
  const [open, setOpen] = useState(false);
  const [openDel, setOpenDel] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    id: '',
    name: '',
    email: '',
    phone: '',
    address: { street: '', suite: '', city: '' },
  });

  const handleEditedUser = () => {
    const userIdx = data?.users.findIndex((user) => user.id === currentUser.id);
    setData((oldState) => {
      const arr = [...oldState?.users];
      arr.splice(userIdx, 1, currentUser);
      return { ...oldState, users: arr };
    });
  };
  const handleEditUser = (e) => {
    if (
      e.target.name === 'city' ||
      e.target.name === 'suite' ||
      e.target.name === 'street'
    ) {
      setCurrentUser((oldState) => {
        return {
          ...oldState,
          address: { ...oldState.address, [e.target.name]: e.target.value },
        };
      });
    } else {
      setCurrentUser((oldState) => {
        return {
          ...oldState,
          [e.target.name]: e.target.value,
        };
      });
    }
  };
  useEffect(() => {
    if (
      window.localStorage.getItem('token') &&
      window.localStorage.getItem('role')
    )
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
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );
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
  const handleDelete = () => {
    setData((oldState) => {
      return {
        users: oldState.users.filter((user) => {
          return user.id !== currentUser.id;
        }),
      };
    });
  };
  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        users,
        setUsers,
        handleAddingUser,
        handleDelete,
        data,
        setData,
        open,
        setOpen,
        editMode,
        setEditMode,
        currentUser,
        setCurrentUser,
        handleEditUser,
        handleEditedUser,
        openDel,
        setOpenDel,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
