import React, { memo, useContext } from "react";
import styles from "./UserRoles.module.scss";
import { UsersContext } from "../../App/App";

export const UserRoles = memo(() => {
  // handleChange(e) {
  //   const { type, checked, name, value } = e.target;
  //   const currValue = type ==='checkbox' ? checked : value;

  //   this.setState({
  //       [name]: currValue
  //   })
  // }

  console.log("UserRoles rerender");

  const { users } = useContext(UsersContext);

  return (
    <div className={styles.user_roles}>
      <p className={styles.user_header}>Applications, Systems and User Roles</p>
      <div className={styles.titles}>
        <p>
          Select the application, systems and User Roles for wich the user shoud
          be autorised.
        </p>
        <p style={{ marginLeft: "20px" }}>Selected:</p>
      </div>
      <div className={styles.roles_main}>
        <ul>
          {users.map((el, i) => (
            <li key={i}>
              <input type="checkbox" />
              <label>{el.address.suite}</label>
              <div>
                <input type="checkbox" />
                <p></p>
                <label>{el.address.street}</label>
              </div>
            </li>
          ))}
        </ul>
        <div className={styles.selected_roles}></div>
      </div>
    </div>
  );
});
