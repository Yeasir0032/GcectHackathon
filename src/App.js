import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/login";
import Landing from "./pages/landing/Landing";
import Registration from "./pages/login/register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
