import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';

function MainLayout() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white shadow-sm border-b">
        <Navigation />
      </header>
      <main className="flex-1 container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
