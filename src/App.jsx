import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import About from './pages/About'
import Cast from './pages/Cast'
import Rating from './pages/Rating'
import Home from './pages/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <h1>Movie Review App</h1>
    <div style={{backgroundColor: 'grey'}}>
    <nav>
      <ul>
        <li ><Link to='/'  style={{ textDecoration: 'none' ,color: 'white'}}>Home</Link></li>
        <li ><Link to='/About'  style={{ textDecoration: 'none' ,color: 'white'}}>About</Link></li>
        <li><Link to='/Cast' style={{ textDecoration: 'none' ,color: 'white'}}>Cast</Link></li>
        <li><Link to='/Rating' style={{ textDecoration: 'none' ,color: 'white'}}>Rating</Link></li>
      </ul>
    </nav>
    </div>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/cast" element={<Cast/>}/>
      <Route path="/rating" element={<Rating/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
