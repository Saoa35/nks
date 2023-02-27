import { Route, Routes } from "react-router-dom";
import { Header } from "../Header";
import { LeftBar } from "../LeftBar";
import Form from "../pages/Form/Form";
import { UserRoles } from "../pages/Form/UserRoles";
import { Users } from "../pages/Users/Users";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />

      <main className="main_main">
        <LeftBar />
        <section className="main_section">
          <div className="main_field">
            <Routes>
              <Route path="/users" element={<Users />} />
              <Route path="/forms" element={<Form />} />
              <Route path="/user-roles" element={<UserRoles />} />
            </Routes>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
