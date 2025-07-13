import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainLayout from './layouts/MainLayout';
import CafeDetailPage from './pages/CafeDetailPage';
import CafePage from './pages/CafePage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<CafePage />} />
        <Route path="cafe/:id" element={<CafeDetailPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
