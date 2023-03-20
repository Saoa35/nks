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
          <button className="page_classification_button">
            <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
              <g>
                <title>Layer 1</title>
                <line
                  strokeWidth="2"
                  id="svg_3"
                  y2="8.18143"
                  x2="23.78228"
                  y1="8.12807"
                  x1="-0.28389"
                  stroke="#2ca5b4"
                  fill="none"
                />
                <line
                  transform="rotate(-15.3382 3.6937 4.30523)"
                  id="svg_8"
                  y2="1.47705"
                  x2="7.93597"
                  y1="7.1334"
                  x1="-0.54856"
                  strokeWidth="2"
                  stroke="#2ca5b4"
                  fill="none"
                />
                <line
                  transform="rotate(18.561 3.53362 12.2828)"
                  stroke="#2ca5b4"
                  id="svg_9"
                  y2="14.87086"
                  x2="7.61579"
                  y1="9.69477"
                  x1="-0.54856"
                  strokeWidth="2"
                  fill="none"
                />
              </g>
            </svg>
          </button>
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
            <svg width="50" height="45" xmlns="http://www.w3.org/2000/svg">
              <g>
                <ellipse
                  ry="11"
                  rx="11"
                  id="svg_1"
                  cy="11.62011"
                  cx="26.13128"
                  stroke="#ffffff"
                  fill="#fff"
                />
                <ellipse
                  stroke="#ffffff"
                  ry="16.68994"
                  rx="27.65363"
                  id="svg_2"
                  cy="44.51117"
                  cx="25.22346"
                  fill="#fff"
                />
                <rect
                  id="svg_3"
                  height="15.36313"
                  width="69.69273"
                  y="47.65362"
                  x="0.22346"
                  stroke="#000"
                  fill="#fff"
                />
                <line
                  id="svg_6"
                  y2="46.9553"
                  x2="66.14525"
                  y1="46.9553"
                  x1="3.85475"
                  stroke="#000"
                  fill="none"
                />
              </g>
            </svg>
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
