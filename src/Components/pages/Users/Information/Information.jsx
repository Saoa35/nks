import PopupButton from "../PopupButton";
import styles from "./Information.module.scss";

export const Information = () => {
  console.log("Information rerender");
  return (
    <div className={styles.container}>
      <div>
        <p>Information</p>
        <p>Userroles</p>
      </div>
      <div>
        <div className={styles.name}>
          <div className={styles.user_name}>
            <p></p>
            <div>
              <p>Name</p>
              <p></p>
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
