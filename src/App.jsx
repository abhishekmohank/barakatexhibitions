import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import "./App.css";
import Events from "./Pages/Events";
import Gallery from "./Pages/Gallery";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Default route for Home */}
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />{" "}
          {/* Add a route for "/login" */}
          {/* Add a catch-all route for unmatched paths (optional) */}
          <Route
            path="*"
            element={
              <div>
                <h1>404: Not Found</h1>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
