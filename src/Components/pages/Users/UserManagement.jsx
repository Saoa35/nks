import { useContext } from "react";
import { UsersContext } from "../../App/App";
import styles from "./UserManagement.module.scss";

function UserManagement() {
  console.log("UserManagement rerender");
  const { users, firstLetters, handleClick } = useContext(UsersContext);
  const titles = ["Name", "Email", "Roles", "Phone"];

  return (
    <div className={styles.wrapper}>
      <div className={styles.select_inputs}>
        <div className={styles.inputs}>
          <select name="search">
            <option value="" disabled hidden>
              Select State
            </option>
            <option value="role1">Role 1</option>
            <option value="role2">Role 2</option>
            <option value="role3">Role 3</option>
          </select>
          <select name="state">
            <option value="" disabled hidden>
              State
            </option>
            <option value="text">Text search</option>
            <option value="roles">Roles</option>
            <option value="state">State</option>
          </select>
        </div>

        <div className="popup_wrapper" style={{ width: "50%" }}>
          <div
            className="button_wrapper"
            style={{ justifyContent: "flex-start" }}
            onClick={handleClick}
          >
            <p
              className="popup_button"
              style={{
                transform: "scaleX(-1)",
              }}
            ></p>
          </div>
        </div>
      </div>

      <div className={styles.titles}>
        <ul>
          {titles.map((el, i) => (
            <li key={i}>{el}</li>
          ))}
        </ul>
      </div>

      <ul className={styles.users_content}>
        {users.map((el, i) => (
          <li key={i}>
            <div className={styles.name}>
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
              <div className="users_names">
                <p>{el.name}</p>
              </div>
            </div>
            <div className={styles.email}>{el.email}</div>
            <div className={styles.roles}>
              <p>{el.address.suite}</p>
              <p>{el.address.street}</p>
            </div>
            <div className={styles.phone}>{el.address.zipcode}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserManagement;
