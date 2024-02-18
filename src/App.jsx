import { Routes , Route , useLocation, Link } from 'react-router-dom';
import Home from './pages/Home';
import Resume from './pages/Resume';
import RoutesMap from './components/RoutesMap';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
  

  return (
    <>
      <Header/>
      <RoutesMap/>
      <Footer/>
    </>
  )
}

export default App
