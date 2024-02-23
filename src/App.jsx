import { useState, Suspense } from "react";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import RoutesMap from "./components/RoutesMap";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode && "dark"} `}>
      <main className="dark:bg-[#333333]">
        <Suspense fallback={''}>
          <Header toggleDarkMode={toggleDarkMode} />
          <RoutesMap />
          <Footer />
        </Suspense>
      </main>
    </div>
  );
}

export default App;
