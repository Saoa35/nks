import React, { useState } from "react";
import "./Form.css";
import { UserRoles } from "./UserRoles";

const Form = () => {
  const [surName, setSurName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [realm, setRealm] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [temporaryPassword, setTemporaryPassword] = useState(false);
  const [errors, setErrors] = useState("");

  const onChangeSurName = (e) => {
    setSurName(e.target.value);
  };

  const onChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangeUserName = (e) => {
    setUserName(e.target.value);
  };

  const onChangeRealm = (e) => {
    setRealm(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const onChangeTemporaryPassword = () => {
    setTemporaryPassword(!temporaryPassword);
  };

  // const { type, checked, name, value } = e.target;
  // const currValue = type ==='checkbox' ? checked : value;

  // this.setState({
  //     [name]: currValue
  // })

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
          // name="surName"
          placeholder="Surname"
          value={surName}
          onChange={onChangeSurName}
        />

        <input
          className="user_input"
          type="text"
          // name="firstName"
          placeholder="Firstname"
          value={firstName}
          onChange={onChangeFirstName}
        />

        <input
          className="user_input"
          type="text"
          // name="userName"
          placeholder="Username"
          value={userName}
          onChange={onChangeUserName}
        />

        <input
          className="user_input"
          type="email"
          // name="email"
          placeholder="Email adress"
          value={email}
          onChange={onChangeEmail}
        />

        <select
          // name="realm"
          style={{ width: "87%", borderColor: "rgb(163, 156, 156)" }}
          value={realm}
          onChange={onChangeRealm}
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
          // name="password"
          placeholder="Password"
          style={{ marginTop: "0" }}
          value={password}
          onChange={onChangePassword}
        />

        <input
          className="user_input"
          type="password"
          // name="confirmPassword"
          placeholder="Confirm Password"
          style={{ marginTop: "0" }}
          value={confirmPassword}
          onChange={onChangeConfirmPassword}
        />

        <div className="error">{errors ? errors : ""}</div>

        <div className="checkbox-div">
          <input
            type="checkbox"
            // name="temporaryPassword"
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
  );
};

export default Form;
