import { Route, Routes } from "react-router-dom";
import Form from "../pages/Form/Form";
import MainPage from "../pages/MainPage/MainPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/forms" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
