import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Agora também importamos Routes e Route
import './App.css';
import { LoadingScreen } from './components/LoadingScreen';
import './index.css';
import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { Cards } from './components/sections/Cards';
import { First } from './components/sections/First';
import { Second } from './components/sections/Second';
import { Third } from './components/sections/Third';
import Page from './components/pages/Page'; // Importando o componente de páginas dinâmicas

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <>
        {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <Routes>
          {/* Página Inicial */}
          <Route path='/' element={
            <>
              <Home />
              <About />
              <Cards />
              <First />
              <Second />
              <Third />
            </>
          } />

          {/* Rotas Dinâmicas - Conteúdo de Literatura */}
          <Route path='/literatura/:contentId' element={<Page />} />
          
        </Routes>
      </>
    </Router>
  );
}

export default App;