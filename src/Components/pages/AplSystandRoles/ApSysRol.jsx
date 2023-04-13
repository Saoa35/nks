import styles from "./ApSysRol.module.scss";

export const ApSysRol = () => {
  console.log("ApSysRol rerender");

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
              onChange={handleChange}
              value={search}
              placeholder="Search"
            />
            <div className="popup_wrapper">
              <div className="button_wrapper" onClick={handleClick}>
                <p className="popup_button"></p>
              </div>
            </div>
          </div>
          <ul>{usersList}</ul>
        </div>
        <div className={styles.users_main}>
          {isPicked ? (
            <Information userName={userName} firstLetters={firstLetters} />
          ) : (
            <>
              <div className={styles.logoImage_wrapper}>
                <p className={styles.login_image}></p>
              </div>
              <p className={styles.user_text}>Add a new user</p>
              <div className={styles.button_wrapper}>
                <Link to="/forms">
                  <div className={styles.add_button}>
                    <p>
                      <svg
                        width="25"
                        height="16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g>
                          <title>Layer 1</title>
                          <ellipse
                            ry="5"
                            rx="5"
                            id="svg_1"
                            cy="5.72494"
                            cx="12.16951"
                            stroke="#ffffff"
                            fill="#2ca5b4"
                          />
                          <ellipse
                            stroke="#ffffff"
                            ry="4.23774"
                            rx="11.70042"
                            id="svg_2"
                            cy="14.94669"
                            cx="12.30277"
                            fill="#2ca5b4"
                          />
                          <line
                            id="svg_3"
                            y2="8.20362"
                            x2="31.86033"
                            y1="8.15032"
                            x1="21.78571"
                            stroke="#ffffff"
                            fill="none"
                          />
                          <line
                            transform="rotate(0.709444 26.6631 7.9371)"
                            stroke="#ffffff"
                            id="svg_4"
                            y2="13.00106"
                            x2="26.68976"
                            y1="2.87313"
                            x1="26.63645"
                            fill="none"
                          />
                        </g>
                      </svg>
                    </p>
                    <p>Create User</p>
                  </div>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
