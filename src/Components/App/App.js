import { Route, Routes } from "react-router-dom";
import Form from "../pages/Form/Form";
import { UserRoles } from "../pages/Form/UserRoles";
import MainPage from "../pages/MainPage/MainPage";
import { Users } from "../pages/Users/Users";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/users" element={<Users />} />
        <Route path="/forms" element={<Form />} />
        <Route path="/user-roles" element={<UserRoles />} />
      </Routes>
    </div>
  );
}

export default App;
