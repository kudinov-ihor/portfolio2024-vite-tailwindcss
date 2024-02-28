import { useState, Suspense } from "react";
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
      <main className="dark:bg-[#333333] h-full">
        <Suspense fallback={''}>
          <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
          <RoutesMap />
          <Footer />
        </Suspense>
      </main>
    </div>
  );
}

export default App;
