import { Link } from "react-router-dom";

export const Users = () => {
  return (
    <div className="Users">
      <div className="page_classification justify-between">
        <p className="page_name">Users</p>
        <Link to="/forms">
          <button className="page_classification_button margin_right">+</button>
        </Link>
      </div>
      <div className="main_wrapper">
        <div className="users__list--div"></div>
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
    </div>
  );
};
