import { Route, Routes } from 'react-router-dom'
import gsap, { Power3 } from 'gsap'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import AboutUs from './pages/AboutUs'
import Shop from './pages/Shop'
import { useEffect, useState } from 'react'
import Preloder from './components/Preloder'
function App() {
  let tl = new gsap.timeline();
  let ease = Power3.easeOut();
  const [screenLoading, setScreenLoading] = useState(false);
  useEffect(() => {
    setScreenLoading(true);
    document.body.classList.add("overflow-hidden")
    setTimeout(() => {
      setScreenLoading(false);
      document.body.classList.remove("overflow-hidden")
    }, 3000);
  }, []);
  return (
    <div>
      <div>
        {
          screenLoading ? (<Preloder />) : (<div>
            <Header timeline={tl} ease={ease} />
            <Routes>
              <Route path='/' element={<Home timeline={tl} ease={ease} />} />
              <Route path='/about' element={<AboutUs />} />
              <Route path='/shop' element={<Shop />} />
            </Routes>
          </div>)}
      </div>
    </div>
  )
}

export default App
