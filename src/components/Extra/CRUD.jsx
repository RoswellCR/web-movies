import React from "react";
import { useState } from "react";
import UserTable from "../UserTable";
import AddUserForm from "./AddUserForm";
import EditUserForm from "../EditUserForm";
import "../assets/styles/components/StylesImp.css";
import { v4 as uuidv4 } from "uuid";

const CRUD = () => {
  const usersData = [
    { id: uuidv4(), name: "Tania", username: "floppydiskette" },
    { id: uuidv4(), name: "Craig", username: "siliconeidolon" },
    { id: uuidv4(), name: "Ben", username: "benisphere" },
  ];

  const [users, setUsers] = useState(usersData);
  const [edit, setEdit] = useState(false);
  const [currentUser, setCurrentUser] = useState({
      id:'',
      name: '',
      username:''
  });

  const addUser = (user) => {
    user.id = uuidv4();
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    console.log(id);
    const arrayFiltrado = users.filter((user) => user.id !== id);
    setUsers(arrayFiltrado);
  };

  const editRow = (user) => {
    setEdit(true);  
    setCurrentUser({
          id: user.id,
          name: user.name,
          username: user.username
      })
  };

  const updateUser = (id,updateUser) =>{ 
    setEdit(false);
    setUsers(users.map((user)=> (user.id === id) ? updateUser : user)) 
  }

  return (
    <div className="container">
      <h1>CRUD con HOOKs</h1>
      <div className="flex-row">
        <div className="flex-large">
          {edit ? (
            <div>
              <h2>Editar usuario</h2>
              <EditUserForm 
              currentUser={currentUser}
              updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2>Adicionar user</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
          <div>
            <h2>Ver users</h2>
            <UserTable
              users={users}
              deleteUser={deleteUser}
              setEdit={setEdit}
              editRow={editRow}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CRUD;
