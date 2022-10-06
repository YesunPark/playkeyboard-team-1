import { useState } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import Category from './pages/category/Category';
import Detail from './pages/detail/Detail';

function Router() {
  const [activeIndex, setActiveIndex] = useState('LIVE');

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes>
          <Route path='/' element={<Category activeIndex={activeIndex} setActiveIndex={setActiveIndex} />} />
          <Route path='/detail/:themeId' element={<Detail />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default Router;
