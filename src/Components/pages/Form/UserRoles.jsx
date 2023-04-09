import React, { memo, useContext } from "react";
import styles from "./UserRoles.module.scss";
import { UsersContext } from "../../App/App";

export const UserRoles = memo(
  ({ selectedRoles, setSelectedRoles, handleShowSelectedRoles }) => {
    console.log("UserRoles rerender");

    const { users } = useContext(UsersContext);

    const handleCheckboxChange = (value) => {
      if (selectedRoles.includes(value)) {
        setSelectedRoles(selectedRoles.filter((role) => role !== value));
      } else {
        setSelectedRoles([...selectedRoles, value]);
      }
    };

    return (
      <div className={styles.user_roles}>
        <p className={styles.user_header}>
          Applications, Systems and User Roles
        </p>
        <div className={styles.titles}>
          <p>
            Select the application, systems and User Roles for wich the user
            should be autorised.
          </p>
          <p style={{ marginLeft: "20px" }}>Selected:</p>
        </div>
        <div className={styles.roles_main}>
          <div className={styles.roles_list}>
            <ul>
              {users.map((el, i) => (
                <li key={i}>
                  <input
                    type="checkbox"
                    id={el.address.suite}
                    onChange={() => handleCheckboxChange(el.address.suite)}
                  />
                  <label htmlFor={el.address.suite}>{el.address.suite}</label>
                  <div>
                    <input
                      type="checkbox"
                      id={el.address.street}
                      onChange={() => handleCheckboxChange(el.address.street)}
                    />
                    <label htmlFor={el.address.street}>
                      <p>
                        <svg
                          width="25"
                          height="25"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g>
                            <title>Aplications & Systems</title>
                            <rect
                              id="svg_1"
                              height="5"
                              width="5"
                              y="4.94903"
                              x="1.31629"
                              stroke="#2fa6b5"
                              fill="#bfe4e8"
                            />
                            <rect
                              id="svg_7"
                              height="5"
                              width="5"
                              y="4.94903"
                              x="18.2835"
                              stroke="#2fa6b5"
                              fill="#bfe4e8"
                            />
                            <rect
                              id="svg_8"
                              height="5"
                              width="5"
                              y="15.44083"
                              x="10.74252"
                              stroke="#2fa6b5"
                              fill="#bfe4e8"
                            />
                            <line
                              id="svg_9"
                              y2="7.33606"
                              x2="15.68033"
                              y1="7.41803"
                              x1="6.41803"
                              stroke="#2fa6b5"
                              fill="none"
                            />
                            <line
                              id="svg_10"
                              y2="13.97541"
                              x2="9.61475"
                              y1="10.28688"
                              x1="6.58197"
                              stroke="#2fa6b5"
                              fill="none"
                            />
                          </g>
                        </svg>
                      </p>
                      <p>{el.address.street}</p>
                    </label>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.selected_roles}>
            {handleShowSelectedRoles()}
          </div>
        </div>
      </div>
    );
  }
);
