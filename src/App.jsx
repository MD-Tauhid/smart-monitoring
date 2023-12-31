import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

import './App.css'
import Home from './Components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Home></Home>
    </div>
  )
}

export default App
