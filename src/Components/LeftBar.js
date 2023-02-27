import { Link } from "react-router-dom";

export const LeftBar = () => {
  return (
    <aside className="main_aside">
      <Link to="/users">
        <li>U</li>
      </Link>
      <Link to="/user-roles">
        <li>UR</li>
      </Link>
      <li>A,S,R</li>
      <li style={{ height: "85%", border: "1px solid #E8E8E8" }}></li>
      <li
        className="main_aside_last_li"
        style={{ border: "1px solid #E8E8E8" }}
      >
        <p></p>
      </li>
    </aside>
  );
};
