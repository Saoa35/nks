import { useContext } from "react";
import { UsersContext } from "../../../App/App";
import PopupButton from "../PopupButton";
import styles from "./Information.module.scss";

export const Information = ({ userName, firstLetters }) => {
  console.log("Information rerender");

  const { users } = useContext(UsersContext);

  function getFormattedDate() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const year = today.getFullYear();
    const formattedDate = `${day}.${month}.${year}`;
    return formattedDate;
  }

  function getDataByName(array, str) {
    const data = array.find((elem) => elem.name === str);
    return data;
  }

  const userDataByName = getDataByName(users, userName);

  return (
    <div className={styles.container}>
      <header>
        <p>Information</p>
        <p>Userroles</p>
      </header>
      <main>
        <div className={styles.name}>
          <div className={styles.user_name}>
            <p className={styles.first_leters}>{firstLetters(userName)}</p>
            <div>
              <p className="font_style-1 m_b-0">Name</p>
              <p>{userName}</p>
            </div>
          </div>
          <div className={styles.online_status}>
            <div>Is active</div>
            <PopupButton />
          </div>
        </div>
        <p className={styles.info_head}>Information</p>
        <div className={styles.information}>
          <div>
            <p className="font_style-1 m_b-0">Username</p>
            <p className="m_t-0">{userDataByName && userDataByName.username}</p>
          </div>
          <div>
            <p className="font_style-1 m_b-0">Email</p>
            <p className="m_t-0">{userDataByName && userDataByName.email}</p>
          </div>
          <div>
            <p className="font_style-1 m_b-0">Created at</p>
            <p className="m_t-0">{getFormattedDate()}</p>
          </div>
        </div>
      </main>
    </div>
  );
};
