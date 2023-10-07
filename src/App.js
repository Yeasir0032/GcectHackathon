import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/login";
import Landing from "./pages/landing/Landing";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
