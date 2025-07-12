import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './pages/NotFound';
import Page from './pages/Page';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Page />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
