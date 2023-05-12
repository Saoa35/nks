import { memo, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UsersContext } from "../../App/App";
import { Information } from "./Information/Information";
import PopupButton from "./PopupButton";
import UserManagement from "./UserManagement/UserManagement";
import styles from "./Users.module.scss";

export const Users = memo(() => {
  console.log("Users rerender");

  const { users, firstLetters, isOpen, handleClick, isPicked, setIsPicked } =
    useContext(UsersContext);

  const [search, setSearch] = useState("");
  const [userName, setUserName] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const getName = (event) => {
    setUserName(event.target.textContent);
  };

  const usersList = users
    .filter((obj) => obj.name.toLowerCase().includes(search.toLowerCase()))
    .map((el, i) => (
      <li key={i}>
        <div className={styles.user_container}>
          <div className="first_letters">
            <p>{firstLetters(el.name)}</p>
          </div>
          <div
            className={
              el.address.zipcode.startsWith(
                Math.floor(Math.random() * 10).toString()
              )
                ? "ofline_status"
                : "online_status"
            }
          ></div>
          <div className="users_names" onClick={() => setIsPicked(true)}>
            <p onClick={getName}>{el.name}</p>
            <p>{el.company.name}</p>
          </div>
        </div>
        <div className={styles.popup}>
          <PopupButton />
        </div>
      </li>
    ));

  return (
    <div className={styles.Users}>
      <div className="page_classification justify-between">
        <p className="page_name">Users</p>
        <Link to="/forms">
          <button className="page_classification_button margin_right">
            <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
              <g>
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

      <div className={styles.container}>
        {isOpen ? (
          <UserManagement />
        ) : (
          <div className={styles.main_wrapper}>
            <div className={styles.users_list}>
              <div className={styles.search_block}>
                <input
                  type="text"
                  onChange={handleChange}
                  value={search}
                  placeholder="Search"
                />
                <div className="popup_wrapper">
                  <div className="button_wrapper" onClick={handleClick}>
                    <p className="popup_button"></p>
                  </div>
                </div>
              </div>
              <ul>{usersList}</ul>
            </div>
            <div className={styles.users_main}>
              {isPicked ? (
                <Information userName={userName} firstLetters={firstLetters} />
              ) : (
                <>
                  <div className={styles.logoImage_wrapper}>
                    <p className={styles.login_image}></p>
                  </div>
                  <p className={styles.user_text}>Add a new user</p>
                  <div className={styles.button_wrapper}>
                    <Link to="/forms">
                      <div className={styles.add_button}>
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
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
});
