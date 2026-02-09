import Navbar from "./components/navbar/navbar.jsx";
import Footer from "./components/footer/footer.jsx";

import Home from "./pages/home/home.jsx";
import Projects from "./pages/projects/projects.jsx";
import Resume from "./pages/resume/resume.jsx";
import About from "./pages/aboutme/aboutme.jsx";
import NotFound from "./pages/notfound/notfound.jsx";


import { Routes, Route } from "react-router-dom";
import Particles from "./components/particles/particles.jsx";
import "./index.css";

function App() {
  return (
    <>
      {/* Particles Background */}
      <div
        style={{
          width: "100%",
          height: "100vh",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      >
        <Particles
          particleColors={["#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />

        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
