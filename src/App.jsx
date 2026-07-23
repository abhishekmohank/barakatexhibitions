import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import EventDetail from "./Pages/EventDetail";
import ScrollToTop from "./Components/ScrollToTop";
import FloatingContactButton from "./Components/FloatingContactButton";
import { ADMIN_PATH } from "./adminConfig";

// Code-split: the admin panel (auth, dashboard, upload logic) is only
// downloaded when someone actually navigates to ADMIN_PATH, not bundled
// into what every public visitor loads.
const AdminRoot = lazy(() => import("./Pages/Admin/AdminRoot"));

// Code-split: Home, Events, About, Gallery, Achievements, and Contact use
// framer-motion for their animations, which is heavy enough (~44KB gzipped)
// that it shouldn't be in the bundle every page pays for - EventDetail
// stays light since it doesn't use it.
const Home = lazy(() => import("./Pages/Home"));
const Events = lazy(() => import("./Pages/Events"));
const About = lazy(() => import("./Pages/About"));
const Gallery = lazy(() => import("./Pages/Gallery"));
const Achievements = lazy(() => import("./Pages/Achievements"));
const Contact = lazy(() => import("./Pages/Contact"));

const pageFallback = (
  <div className="min-h-screen flex items-center justify-center">
    <p className="text-gray-500">Loading…</p>
  </div>
);

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <FloatingContactButton />
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={pageFallback}>
                <Home />
              </Suspense>
            }
          />{" "}
          {/* Default route for Home */}
          <Route
            path="/about"
            element={
              <Suspense fallback={pageFallback}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="/events"
            element={
              <Suspense fallback={pageFallback}>
                <Events />
              </Suspense>
            }
          />
          <Route path="/events/:id" element={<EventDetail />} />
          <Route
            path="/gallery"
            element={
              <Suspense fallback={pageFallback}>
                <Gallery />
              </Suspense>
            }
          />
          <Route
            path="/achievements"
            element={
              <Suspense fallback={pageFallback}>
                <Achievements />
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense fallback={pageFallback}>
                <Contact />
              </Suspense>
            }
          />
          <Route
            path={ADMIN_PATH}
            element={
              <Suspense fallback={pageFallback}>
                <AdminRoot />
              </Suspense>
            }
          />
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
