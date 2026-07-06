import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import "./App.css";
import Events from "./Pages/Events";
import EventDetail from "./Pages/EventDetail";
import Gallery from "./Pages/Gallery";
import Contact from "./Pages/Contact";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Default route for Home */}
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventDetail />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
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
