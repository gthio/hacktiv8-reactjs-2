import { Link, useLocation } from 'react-router-dom';
import { useNavigation } from '../hooks/useNavigation';

function Navigation() {
  const location = useLocation();
  const { navItems, loading } = useNavigation();

  if (loading) {
    return (
      <nav className="navigation">
        <div className="nav-brand">
          <Link to="/">Your App</Link>
        </div>
        <div className="nav-loading">Loading...</div>
      </nav>
    );
  }

  return (
    <nav className="navigation">
      <div className="nav-brand"></div>
      <ul className="nav-links">
        {navItems.map(item => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={location.pathname === item.path ? 'active' : ''}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
