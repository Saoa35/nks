// import { useContext } from "react";
// import { UsersContext } from "../../../App/App";
import PopupButton from "../PopupButton";
import styles from "./Information.module.scss";

export const Information = ({ name }) => {
  console.log("Information rerender");

  // const { users } = useContext(UsersContext);

  return (
    <div className={styles.container}>
      <header>
        <p>Information</p>
        <p>Userroles</p>
      </header>
      <div>
        <div className={styles.name}>
          <div className={styles.user_name}>
            <p></p>
            <div>
              <p>Name</p>
              <p>{name}</p>
            </div>
          </div>
          <div className={styles.online_status}>
            <div></div>
            <PopupButton />
          </div>
        </div>
        <p></p>
        <div></div>
      </div>
    </div>
  );
};
