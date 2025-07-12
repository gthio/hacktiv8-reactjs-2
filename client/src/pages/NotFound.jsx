import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Sorry, the page you are looking for doesn't exist.</p>
      <Link to="/">Go Back Home</Link>
    </div>
  );
}

export default NotFound;
