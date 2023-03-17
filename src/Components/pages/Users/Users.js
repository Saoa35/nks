import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((obj) => setUsers(obj))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="Users">
      <div className="page_classification justify-between">
        <p className="page_name">Users</p>
        <Link to="/forms">
          <button className="page_classification_button margin_right">+</button>
        </Link>
      </div>
      <div className="main_wrapper">
        <div className="users__list--div">
          <div className="search_block">
            <input
              type="text"
              onChange={handleChange}
              value={search}
              placeholder="Search"
            />
            <div>
              <p></p>
            </div>
          </div>
          <ul>
            {users?.map((el, i) => (
              <li key={i}>
                <div className="first_letters"></div>
                <div className="users_names">
                  <p>{el.name}</p>
                  <p>{el.company.name}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="users-main_div">
          <div className="logoImage_wrapper">
            <p className="user-login-image"></p>
          </div>
          <p className="user-text">Add a new user</p>
          <p className="button_wrapper">
            <Link to="/forms">
              <button className="add-user_button ">Create User</button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
