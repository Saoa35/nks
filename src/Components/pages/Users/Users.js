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

  function firstLetters(str) {
    const toArr = str.split(" ");
    const firstLet = toArr.map((el) => (el = el[0]));
    return firstLet.join("");
  }

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
              <div>
                <p></p>
              </div>
            </div>
          </div>
          <ul>
            {users?.map((el, i) => (
              <li key={i}>
                <div className="first_letters">
                  <p>{firstLetters(el.name)}</p>
                </div>
                <div
                  className={
                    el.address.zipcode.startsWith("5")
                      ? "ofline_status"
                      : "online_status"
                  }
                ></div>
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
          <div className="button_wrapper">
            <Link to="/forms">
              <div className="add-user_button ">
                <p>
                  <svg
                    width="33"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <title>Layer 1</title>
                      <ellipse
                        ry="5"
                        rx="5"
                        id="svg_1"
                        cy="5.72494"
                        cx="12.16951"
                        stroke="#000"
                        fill="#fff"
                      />
                      <ellipse
                        stroke="#000"
                        ry="4.23774"
                        rx="11.70042"
                        id="svg_2"
                        cy="14.94669"
                        cx="12.30277"
                        fill="#fff"
                      />
                      <line
                        id="svg_3"
                        y2="8.20362"
                        x2="31.86033"
                        y1="8.15032"
                        x1="21.78571"
                        stroke="#000"
                        fill="none"
                      />
                      <line
                        transform="rotate(0.709444 26.6631 7.9371)"
                        stroke="#000"
                        id="svg_4"
                        y2="13.00106"
                        x2="26.68976"
                        y1="2.87313"
                        x1="26.63645"
                        fill="none"
                      />
                    </g>
                  </svg>
                </p>
                <p>Create User</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
