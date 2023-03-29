import { memo } from "react";
import { Link } from "react-router-dom";
import styles from "./LeftBar.module.scss";

export const LeftBar = memo(() => {
  console.log("LeftBar rerander");

  return (
    <aside>
      <Link to="/">
        <li>
          <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg">
            <g>
              <title>Layer 1</title>
              <ellipse
                ry="3.32536"
                rx="3.37321"
                id="svg_1"
                cy="7.23684"
                cx="8.70096"
                stroke="#2fa6b5"
                fill="#e8e8e8"
              />
              <ellipse
                stroke="#2fa6b5"
                ry="3.11005"
                rx="7.89474"
                id="svg_2"
                cy="14.4378"
                cx="8.82057"
                fill="#e8e8e8"
              />
              <rect
                stroke="#2fa6b5"
                id="svg_3"
                height="7.08134"
                width="9.85646"
                y="10.70574"
                x="13.89234"
                fill="#e8e8e8"
              />
              <rect
                stroke="#2fa6b5"
                id="svg_4"
                height="2.2488"
                width="0.7177"
                y="13.24163"
                x="18.53349"
                fill="#e8e8e8"
              />
              <line
                id="svg_5"
                y2="5.39474"
                x2="15.23206"
                y1="10.27512"
                x1="15.2799"
                stroke="#2fa6b5"
                fill="none"
              />
              <ellipse
                ry="3.03828"
                rx="3.39713"
                id="svg_6"
                cy="6.18421"
                cx="18.58134"
                stroke="#2fa6b5"
                fill="#e8e8e8"
              />
              <rect
                stroke="#e8e8e8"
                id="svg_7"
                height="4.01914"
                width="6.74641"
                y="5.87321"
                x="16.23684"
                fill="#e8e8e8"
              />
            </g>
          </svg>
        </li>
      </Link>
      <Link to="/user-roles">
        <li>
          <svg
            fill="#2ca5b4"
            width="25px"
            height="25px"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M23.5 5.023c-3.419 0-7.070 2.848-7.222 9.040h-14.278c-0.414 0-0.75 0.336-0.75 0.75v0 11.413c0 0.414 0.336 0.75 0.75 0.75h17.119c0.414-0 0.75-0.336 0.75-0.75v0-11.413c-0-0.414-0.336-0.75-0.75-0.75h-1.343c0.142-5.162 3.023-7.54 5.724-7.54 2.77 0 5.75 2.478 5.75 7.917 0 0.414 0.336 0.75 0.75 0.75s0.75-0.336 0.75-0.75v0c0-6.47-3.758-9.417-7.25-9.417zM18.369 25.477h-15.619v-9.913h15.619zM10.56 23.75c0.414-0 0.75-0.336 0.75-0.75v0-4c0-0.414-0.336-0.75-0.75-0.75s-0.75 0.336-0.75 0.75v0 4c0 0.414 0.336 0.75 0.75 0.75v0z"></path>
          </svg>
        </li>
      </Link>
      <Link to="/apl-sys-roles">
        <li>
          <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg">
            <g>
              <title>Layer 1</title>
              <rect
                id="svg_1"
                height="5"
                width="5"
                y="4.94903"
                x="1.31629"
                stroke="#2fa6b5"
                fill="#e8e8e8"
              />
              <rect
                id="svg_7"
                height="5"
                width="5"
                y="4.94903"
                x="18.2835"
                stroke="#2fa6b5"
                fill="#e8e8e8"
              />
              <rect
                id="svg_8"
                height="5"
                width="5"
                y="15.44083"
                x="10.74252"
                stroke="#2fa6b5"
                fill="#e8e8e8"
              />
              <line
                id="svg_9"
                y2="7.33606"
                x2="15.68033"
                y1="7.41803"
                x1="6.41803"
                stroke="#2fa6b5"
                fill="none"
              />
              <line
                id="svg_10"
                y2="13.97541"
                x2="9.61475"
                y1="10.28688"
                x1="6.58197"
                stroke="#2fa6b5"
                fill="none"
              />
            </g>
          </svg>
        </li>
      </Link>
      <li className={styles.green_arrow}>
        <p></p>
      </li>
    </aside>
  );
});
