import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddEmployeeForm from "./Components/AddEmployeeForm";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/addEmployee" element={<AddEmployeeForm />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
