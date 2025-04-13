import './App.css'
// Importing a component
import { LoadingScreen  } from './components/LoadingScreen'
import './index.css'
import { useState } from 'react'
import { Navbar} from './components/Navbar'
import { MobileMenu} from './components/MobileMenu'
import { Home } from './components/sections/Home'
import { About } from './components/sections/About'
import { Cards } from './components/sections/Cards'
import { First } from './components/sections/First'
import { Second } from './components/sections/Second'
import { Third } from './components/sections/Third'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
    {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)}/>}
      <div className='{min-h-screen transition-opacity duration-700  ${isLoaded ? "opacity-100" : "opacity-0} bg-black text-gray-100}'>


      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Home />
      <About />
      <Cards />
      <First />
      <Second />
      <Third />

      </div>
    </>
  )
}

export default App
