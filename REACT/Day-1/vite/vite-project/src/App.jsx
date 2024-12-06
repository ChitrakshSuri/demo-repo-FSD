import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Ensure you import these
import MainLayout from "./components/MainLayout";
import Login from "./components/Login";
import Registeration from "./components/Registeration";
import { useState } from "react";
import Dashboard from "./components/Dashboard";

function App() {
  const [store, setStore] = useState("");
  return (
    <div>
      {JSON.stringify(store)}
      <BrowserRouter>
        <Routes>
          {/* Route for the home page */}
          <Route path="/" element={<MainLayout />}>
            <Route path="/login" element={<Login regDataLogin={store} />} />
            <Route
              path="/registeration"
              element={<Registeration regData={setStore} />}
            />
          </Route>
        </Routes>
        <Routes>
          <Route path="/dash" element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
