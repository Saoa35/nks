import { Route, Routes } from "react-router-dom";
import { Header } from "../Header";
import { LeftBar } from "../LeftBar";
import { ApSysRol } from "../pages/AplSystandRoles/ApSysRol";
import Form from "../pages/Form/Form";
import { Users } from "../pages/Users/Users";
import UsRoles from "../pages/UsRoles/UsRoles";

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
              <Route path="/user-roles" element={<UsRoles />} />
              <Route path="/apl-sys-roles" element={<ApSysRol />} />
            </Routes>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
