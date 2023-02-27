import { Link } from "react-router-dom";
import "./Users.css";

export const Users = () => {
  return (
    <div className="users_wrapper">
      <div className="page_classification justify-between">
        <p style={{ color: "#333333", fontSize: "3vh" }}>Users</p>
        <Link to="/forms">
          <button className="page_classification_button">+</button>
        </Link>
      </div>
      <div className="users-main_div">
        <div className="logoImage_wrapper">
          <p className="user-login-image"></p>
        </div>
        <p className="user-text">Add a new user</p>
        <p className="button_wrapper">
          <Link to="/forms">
            <button className="add-user_button ">Create User</button>
          </Link>
        </p>
      </div>
    </div>
  );
};
