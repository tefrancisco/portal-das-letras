import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Page from './pages/Page';
import References from './pages/References';

function AppRoutes() {
  return (
    <Routes>

      // Rotas dos conteúdos do primeiro ano

      <Route path='/literatura/:contentId' element={<Page />} />
      <Route path='/info/' element={<References />} />
      <Route path='/poema' element={<Page contentId="poema" />} />
      <Route path='/generosliterarios' element={<Page contentId="generosliterarios"/>}/>
      <Route path='/trovadorismo' element={<Page contentId="trovadorismo"/>}/>
      <Route path='/humanismo' element={<Page contentId="humanismo"/>}/>
      <Route path='/classicismo' element={<Page contentId="classicismo"/>}/>
      <Route path='/quinhentismo' element={<Page contentId="quinhentismo"/>}/>
      <Route path='/barroco' element={<Page contentId="barroco"/>}/>
      <Route path='/arcadismo' element={<Page contentId="arcadismo"/>}/>
      
      // Rotas dos conteúdos do segundo ano

      <Route path='/romantismo' element={<Page contentId="romantismo" />} />
      <Route path='/realismo' element={<Page contentId="realismo" />} />
      <Route path='/naturalismo' element={<Page contentId="naturalismo" />} />
      <Route path='/parnasianismo' element={<Page contentId="parnasianismo" />} />
      <Route path='/simbolismo' element={<Page contentId="simbolismo" />} />


      // Rotas dos conteúdos do terceiro ano

      <Route path='/premodernismo' element={<Page contentId="premodernismo" />} />
      <Route path='/modernismo' element={<Page contentId="modernismo" />} />
      <Route path='/posmodernismo' element={<Page contentId="posmodernismo" />} />

      // Rota para a página de referências

      <Route path='/referencias' element={<References contentId="referencias" />} />


    </Routes>
  );
}

export default AppRoutes;