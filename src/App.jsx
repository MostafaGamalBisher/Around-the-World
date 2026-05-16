import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LayoutPage from './pages/LayoutPage';
import CountryPage from './pages/CountryPage';
import NoPage from './pages/NoPage';

function App() {
  return (
    <BrowserRouter basename="/Around-the-World">
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<HomePage />} />
          <Route path=":country" element={<CountryPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
