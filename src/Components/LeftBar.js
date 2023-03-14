import { Link } from "react-router-dom";

export const LeftBar = () => {
  return (
    <aside className="main_aside">
      <Link to="/">
        <li>U</li>
      </Link>
      <Link to="/user-roles">
        <li>UR</li>
      </Link>
      <Link to="/apl-sys-roles">
        <li> A,S,R</li>
      </Link>
      <li className="last_li">
        <p></p>
      </li>
    </aside>
  );
};
