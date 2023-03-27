import React from "react";
import styles from "./UserRoles.module.scss";

export const UserRoles = () => {
  // handleChange(e) {
  //   const { type, checked, name, value } = e.target;
  //   const currValue = type ==='checkbox' ? checked : value;

  //   this.setState({
  //       [name]: currValue
  //   })
  // }

  console.log("UserRoles rerender");

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
        <div className={styles.roles_list}>
          <li className={styles.major_li}>
            <input type="checkbox" id="access" name="access" />
            <label> .ACCESS</label>
            <div className={styles.minor_div}>
              <input type="checkbox" id="accessManager" name="accessManager" />
              <p></p>
              <label> Access Manager</label>
            </div>
          </li>

          <li className={styles.major_li}>
            <input type="checkbox" id="card" name="card" />
            <label> .CARD</label>
            <div className={styles.minor_div}>
              <input
                type="checkbox"
                id="cardManagement"
                name="cardManagement"
              />
              <p></p>
              <label> Card Management</label>
            </div>
          </li>

          <li className={styles.major_li}>
            <input type="checkbox" id="certify" name="certify" />
            <label> .СERTIFY</label>
          </li>
        </div>
        <div className={styles.selected_roles}></div>
      </div>
    </div>
  );
};
