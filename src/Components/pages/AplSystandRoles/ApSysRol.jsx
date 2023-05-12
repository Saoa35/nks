import { useContext } from "react";
import styles from "./ApSysRol.module.scss";
import { UsersContext } from "../../App/App";

export const ApSysRol = () => {
  console.log("ApSysRol rerender");

  const { users, firstLetters, isOpen, handleClick, isPicked, setIsPicked } =
    useContext(UsersContext);

  return (
    <div className="users_wrapper">
      <div className="page_classification">
        <p className="page_name">Aplications, Systems and Roles</p>
      </div>

      <div className={styles.main_wrapper}>
        <div className={styles.users_list}>
          <div className={styles.search_block}>
            <input
              type="text"
              // onChange={handleChange}
              // value={search}
              placeholder="Search..."
            />
            <div className="popup_wrapper">
              {/* <div className="button_wrapper" onClick={handleClick}> */}
              {/* <p className="popup_button"></p> */}
              {/* </div> */}
            </div>
          </div>
          {/* <ul>{usersList}</ul> */}
        </div>
        <div className={styles.users_main}>
          {/* {isPicked ? (
            <Information userName={userName} firstLetters={firstLetters} />
          ) : (
            <>
              <div className={styles.logoImage_wrapper}>
                <p className={styles.login_image}></p>
              </div>
              
            </>
          )} */}
        </div>
      </div>
    </div>
  );
};
