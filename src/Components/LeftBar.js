import { Link } from "react-router-dom";

export const LeftBar = () => {
  return (
    <aside className="main_aside">
      <Link to="/users">
        <li className="left_bar_buttons">U</li>
      </Link>
      <Link to="/user-roles">
        <li className="left_bar_buttons">UR</li>
      </Link>
      <Link to="/apl-sys-roles">
        <li className="left_bar_buttons"> A,S,R</li>
      </Link>
      {/* <li style={{ height: "85%", border: "1px solid #E8E8E8" }}></li> */}
      <li
        className="main_aside_last_li"
        style={{ border: "1px solid #E8E8E8" }}
      >
        <p></p>
      </li>
    </aside>
  );
};
