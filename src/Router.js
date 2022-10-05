import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import Category from './pages/category/Category';
import Detail from './pages/detail/Detail';

function Router() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path='/category' element={<Category />} />
        <Route path='/detail/:themeId' element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
