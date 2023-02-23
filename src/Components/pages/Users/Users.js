import { Link } from "react-router-dom";
import "./Users.css";

export const Users = () => {
  return (
    <div className="users-main_div">
      <p className="user-login-image"></p>
      <p className="user-text">Add a new user</p>
      <p className="button_wrapper">
        <Link to="/forms">
          <button className="add-user_button">Create User</button>
        </Link>
      </p>
    </div>
  );
};
