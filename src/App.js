import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/login";
import Registration from "./pages/login/register";
import HomeBanner from "./pages/landing/Landing";
import Navbar from "./pages/navbar/navbar";
import Library from "./pages/Library/library";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeBanner />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Registration />} />
          <Route path="/library" element={<Library />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
