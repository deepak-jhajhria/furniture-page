import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import AboutUs from './pages/AboutUs'
import Shop from './pages/Shop'
import { useEffect, useState } from 'react'
import Preloder from './components/Preloder'

function App() {
  const [screenLoading, setScreenLoading] = useState(false);
  useEffect(() => {
    setScreenLoading(true);
    document.body.classList.add("overflow-hidden")
    setTimeout(() => {
      setScreenLoading(false);
      document.body.classList.remove("overflow-hidden")
    }, 0);
  }, []);
  return (
    <div>
      {screenLoading ? (<Preloder />) : (<div>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/shop' element={<Shop />} />
        </Routes>
      </div>)}
    </div>
  )
}

export default App
