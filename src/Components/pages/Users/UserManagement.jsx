import { useContext } from "react";
import { UsersContext } from "../../App/App";
import styles from "./UserManagement.module.scss";

function UserManagement() {
  const { users, firstLetters } = useContext(UsersContext);
  const titles = ["Name", "Email", "Roles", "Phone"];

  return (
    <div className={styles.wrapper}>
      <div className={styles.select_inputs}>
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

        <div className="popup_wrapper">
          <div className="button_wrapper">
            <p className="popup_button"></p>
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

      {/* <button onClick={handleClick}>Открыть окно</button>
      {isOpen && <div className="modal">Контент окна</div>} */}
    </div>
  );
}

export default UserManagement;

// .modal {
//     position: fixed;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     background-color: white;
//     padding: 20px;
//     animation-name: slideIn;
//     animation-duration: 0.5s;
//     animation-timing-function: ease-out;
//   }

//   @keyframes slideIn {
//     from {
//       opacity: 0;
//       transform: translate(-50%, -70%);
//     }
//     to {
//       opacity: 1;
//       transform: translate(-50%, -50%);
//     }
//   }

//   button {
//     padding: 10px 20px;
//     border-radius: 5px;
//     border: none;
//     background-color: blue;
//     color: white;
//     font-size: 16px;
//     cursor: pointer;
//   }
