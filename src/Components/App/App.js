import React, { useCallback, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "../Header";
import { LeftBar } from "../LeftBar";
import { ApSysRol } from "../pages/AplSystandRoles/ApSysRol";
import Form from "../pages/Form/Form";
import { Users } from "../pages/Users/Users";
import UsRoles from "../pages/UsRoles/UsRoles";

export const UsersContext = React.createContext("");

function App() {
  const [users, setUsers] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isPicked, setIsPicked] = useState(false);

  const handleClick = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const changeStateToFalse = useCallback(() => {
    setIsPicked(false);
    setIsOpen(false);
  }, []);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((obj) => setUsers(obj))
      .catch((error) => console.error(error));
  }, []);

  function firstLetters(str) {
    const firstLet = str.split(" ").map((el) => (el = el[0]));
    return firstLet.join("");
  }

  return (
    <div className="App">
      <UsersContext.Provider
        value={{
          users,
          firstLetters,
          isOpen,
          handleClick,
          isPicked,
          setIsPicked,
        }}
      >
        <Header />
        <main>
          <LeftBar changeStateToFalse={changeStateToFalse} />
          <section>
            <div className="main_field">
              <Routes>
                <Route path="/" element={<Users />} />
                <Route path="/forms" element={<Form />} />
                <Route path="/user-roles" element={<UsRoles />} />
                <Route path="/apl-sys-roles" element={<ApSysRol />} />
              </Routes>
            </div>
          </section>
        </main>
      </UsersContext.Provider>
    </div>
  );
}

export default App;
