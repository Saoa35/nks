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
        <p className="isActive">Information</p>
        <p>Userroles</p>
      </header>
      <main>
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
                width="24px"
                height="24px"
              >
                <g
                  fill="#ffffff"
                  // fill-rule="nonzero"
                  // stroke="none"
                  // stroke-width="1"
                  // stroke-linecap="butt"
                  // stroke-linejoin="miter"
                  // stroke-miterlimit="10"
                  // stroke-dasharray=""
                  // stroke-dashoffset="0"
                  // font-family="none"
                  // font-weight="none"
                  // font-size="none"
                  // text-anchor="none"
                  // style="mix-blend-mode: normal"
                >
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
      </main>
    </div>
  );
};
