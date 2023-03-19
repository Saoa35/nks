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
          <button className="page_classification_button margin_right">
            <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
              <g>
                <title>Layer 1</title>
                <line
                  strokeWidth="2"
                  id="svg_2"
                  y2="23.97652"
                  x2="8.09392"
                  y1="-0.03629"
                  x1="8.04055"
                  stroke="#2ca5b4"
                  fill="none"
                />
                <line
                  strokeWidth="2"
                  id="svg_3"
                  y2="8.18143"
                  x2="23.78228"
                  y1="8.12807"
                  x1="-0.28389"
                  stroke="#2ca5b4"
                  fill="none"
                />
              </g>
            </svg>
          </button>
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
                    width="25"
                    height="16"
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
                        stroke="#ffffff"
                        fill="#2ca5b4"
                      />
                      <ellipse
                        stroke="#ffffff"
                        ry="4.23774"
                        rx="11.70042"
                        id="svg_2"
                        cy="14.94669"
                        cx="12.30277"
                        fill="#2ca5b4"
                      />
                      <line
                        id="svg_3"
                        y2="8.20362"
                        x2="31.86033"
                        y1="8.15032"
                        x1="21.78571"
                        stroke="#ffffff"
                        fill="none"
                      />
                      <line
                        transform="rotate(0.709444 26.6631 7.9371)"
                        stroke="#ffffff"
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
