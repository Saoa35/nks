import { memo, useContext } from "react";
import { UsersContext } from "../../../App/App";
import PopupButton from "../PopupButton";
import styles from "./Information.module.scss";

export const Information = memo(({ userName, firstLetters }) => {
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

  const Userroles = memo(() => {
    return (
      <div className={styles.wrapper}>
        <div className={styles.user_headder}>
          <p>Name</p>
          <p>Systems and Aplications</p>
        </div>
        <div className={styles.roles}>
          <div className={styles.roles_info}>
            <p className="first_letters">
              <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <title>Roles</title>
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
            <p>Role</p>
            <p>Under Role</p>
          </div>
          <div className={styles.pop_up}>
            <PopupButton />
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className={styles.container}>
      <header>
        <p className="isActive">Information</p>
        <p>Userroles</p>
      </header>
      <main>
        <Userroles />
        {/* <section>
          <div className={styles.name}>
            <div className={styles.user_name}>
              <p className={styles.first_leters}>{firstLetters(userName)}</p>
              <div>
                <p>Name</p>
                <p>{userName}</p>
              </div>
            </div>
            <div className={styles.online_status}>
              <div className={styles.is_active}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0,0,256,256"
                  width="20px"
                  height="20px"
                >
                  <g fill="#ffffff">
                    <g transform="scale(10.66667,10.66667)">
                      <path d="M20.29297,5.29297l-11.29297,11.29297l-4.29297,-4.29297l-1.41406,1.41406l5.70703,5.70703l12.70703,-12.70703z"></path>
                    </g>
                  </g>
                </svg>
                <p>Is active</p>
              </div>
              <PopupButton />
            </div>
          </div>
          <p className={styles.info_head}>Information</p>
          <div className={styles.information}>
            <div>
              <p>Username</p>
              <p>{userDataByName && userDataByName.username}</p>
            </div>
            <div>
              <p>Email</p>
              <p>{userDataByName && userDataByName.email}</p>
            </div>
            <div>
              <p>Created at</p>
              <p>{getFormattedDate()}</p>
            </div>
          </div>
        </section> */}
      </main>
    </div>
  );
});
