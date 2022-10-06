import { BrowserRouter, Route, Routes } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import Category from './pages/category/Category';
import Detail from './pages/detail/Detail';

function Router() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes>
          <Route path='/' element={<Category />} />
          <Route path='/detail/:themeId' element={<Detail />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default Router;
