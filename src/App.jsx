import { Routes , Route , useLocation, Link } from 'react-router-dom';
import Home from './pages/Home';
import Resume from './pages/Resume';
function App() {
  

  return (
    <>
        <Link to='/'>Home</Link>
        <Link to='/resume'>resume</Link>
        <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/resume' element={<Resume/>}></Route>
    </Routes>
    </>
  )
}

export default App
