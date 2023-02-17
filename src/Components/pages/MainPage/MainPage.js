import React from "react";
import "./MainPage.css";
import Form from "../Form/Form";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <div className="MainPage">
      <header className="main_header">
        <div className="user_management">
          <span>Usermanagement</span>
        </div>
        <div className="user_initials">
          <p>JH</p>
        </div>
      </header>

      <main className="main_main">
        <aside className="main_aside">
          <Link to="/forms">
            <li>U</li>
          </Link>
          <li>UR</li>
          <li>A,S,R</li>
          <li style={{ height: "85%", border: "1px solid #E8E8E8" }}></li>
          <li
            className="main_aside_last_li"
            style={{ border: "1px solid #E8E8E8" }}
          >
            <p></p>
          </li>
        </aside>

        <section className="main_section">
          <div className="main_field">{/* <Form /> */}</div>
        </section>
      </main>
    </div>
  );
}
