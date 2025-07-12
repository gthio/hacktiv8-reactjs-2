import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';

function MainLayout() {
  return (
    <div className="main-layout">
      <header className="layout-header">
        <Navigation />
      </header>
      <main className="layout-content">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
