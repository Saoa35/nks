import { memo, useContext } from "react";
import { UsersContext } from "./App/App";
import styles from "./Header.module.scss";

export const Header = memo(() => {
  console.log("Header rerender");

  const { handleClick } = useContext(UsersContext);

  return (
    <header>
      <div className={styles.user_management}>
        <svg width="35" height="30" xmlns="http://www.w3.org/2000/svg">
          <g>
            <rect
              stroke="#ffffff"
              id="svg_1"
              height="13.04664"
              width="16.9825"
              y="12.09912"
              x="0.86735"
              fill="#2ca5b4"
            />
            <line
              transform="rotate(0.541499 9.3586 19.4606)"
              strokeWidth="2"
              id="svg_3"
              y2="21.793"
              x2="9.39504"
              y1="17.12827"
              x1="9.32216"
              stroke="#ffffff"
              fill="none"
            />
            <rect
              stroke="#ffffff"
              id="svg_4"
              height="13.04664"
              width="16.9825"
              y="15.16034"
              x="11.65452"
              fill="#2ca5b4"
            />
            <line
              transform="rotate(0.541499 20.1458 22.5218)"
              strokeWidth="2"
              id="svg_5"
              y2="24.85422"
              x2="20.18221"
              y1="20.1895"
              x1="20.10933"
              stroke="#ffffff"
              fill="none"
            />
            <ellipse
              stroke="#ffffff"
              ry="5.21137"
              rx="5.64869"
              id="svg_6"
              cy="6.74198"
              cx="9.21283"
              fill="#2ca5b4"
            />
            <line
              id="svg_7"
              y2="12.17201"
              x2="3.56414"
              y1="5.53936"
              x1="3.56414"
              stroke="#ffffff"
              fill="none"
            />
            <line
              id="svg_8"
              y2="12.24489"
              x2="14.86152"
              y1="5.46647"
              x1="14.9344"
              stroke="#ffffff"
              fill="none"
            />
            <rect
              stroke="#2ca5b4"
              id="svg_9"
              height="3.57143"
              width="9.40233"
              y="7.4344"
              x="4.43878"
              fill="#2ca5b4"
            />
            <rect
              stroke="#2ca5b4"
              id="svg_10"
              height="0"
              width="0.36443"
              y="7.28863"
              x="9.32216"
              fill="#2ca5b4"
            />
            <ellipse
              stroke="#ffffff"
              ry="5.21137"
              rx="5.64869"
              id="svg_11"
              cy="10.02186"
              cx="28.74635"
              fill="#2ca5b4"
            />
            <line
              id="svg_12"
              y2="15.379"
              x2="23.17055"
              y1="8.96501"
              x1="23.09767"
              stroke="#ffffff"
              fill="none"
            />
            <rect
              stroke="#2ca5b4"
              id="svg_13"
              height="3.79009"
              width="10.20408"
              y="10.56851"
              x="24.19096"
              fill="#2ca5b4"
            />
            <rect
              id="svg_14"
              height="7.14286"
              width="4.59184"
              y="12.90087"
              x="29.65743"
              stroke="#2ca5b4"
              fill="#2ca5b4"
            />
          </g>
        </svg>
        <p onClick={handleClick}>Usermanagement</p>
      </div>
      <div className={styles.user_initials}>
        <p>JH</p>
      </div>
    </header>
  );
});
