import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UserRoles } from "./UserRoles";

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const onChange = (event) => setValue(event.target.value);

  return { value, onChange };
}

const Form = () => {
  const surName = useInput("");
  const firstName = useInput("");
  const userName = useInput("");
  const email = useInput("");
  const realm = useInput("");
  const password = useInput("");
  const confirmPassword = useInput("");
  const [errors, setErrors] = useState("");
  const [temporaryPassword, setTemporaryPassword] = useState(false);

  const onChangeTemporaryPassword = () => {
    setTemporaryPassword(!temporaryPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    password !== confirmPassword
      ? setErrors(
          "The password you entered does not match with the confirmation"
        )
      : setErrors("");

    console.log(
      surName,
      firstName,
      userName,
      email,
      realm,
      password,
      confirmPassword,
      temporaryPassword,
      errors
    );
  };

  return (
    <div className="Forms">
      <div className="page_classification">
        <Link to="/">
          <button className="page_classification_button"></button>
        </Link>
        <p style={{ color: "#333333", fontSize: "3vh" }}>Create User</p>
      </div>
      <div className="Form">
        <div className="static_header">
          <div className="user_information">User Information</div>
          <div style={{ width: "15%" }}>
            <hr />
          </div>
          <div className="user_roles">Applications, Systems & User Roles</div>
        </div>
        <div className="create-user-header">
          <p className="foto">
            <span>Bild</span>
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            className="user_input"
            type="text"
            placeholder="Surname"
            {...surName}
          />

          <input
            className="user_input"
            type="text"
            placeholder="Firstname"
            {...firstName}
          />

          <input
            className="user_input"
            type="text"
            placeholder="Username"
            {...userName}
          />

          <input
            className="user_input"
            type="email"
            placeholder="Email adress"
            {...email}
          />

          <select
            style={{ width: "87%", borderColor: "rgb(163, 156, 156)" }}
            {...realm}
          >
            <option value="" disabled hidden>
              Realm
            </option>
            <option value="lbbwImmo">LBBW Immo</option>
          </select>

          <p style={{ width: "86%", marginTop: "25px", fontWeight: "bold" }}>
            Password
          </p>

          <input
            className="user_input"
            type="password"
            placeholder="Password"
            style={{ marginTop: "0" }}
            {...password}
          />

          <input
            className="user_input"
            type="password"
            placeholder="Confirm Password"
            style={{ marginTop: "0" }}
            {...confirmPassword}
          />

          <div className="error">{errors ? errors : ""}</div>

          <div className="checkbox-div">
            <input
              type="checkbox"
              value={temporaryPassword}
              onChange={onChangeTemporaryPassword}
            />
            <p>Temporary Password</p>
          </div>
          <div style={{ width: "100%" }}>
            <hr style={{ width: "600px" }} />
          </div>

          <div className="user_roles_div">
            <UserRoles />
          </div>

          <div className="buttons_footer">
            <button className="buttons cansel_button">Cancel</button>
            <button className="buttons save_button">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
