import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      const newSearchParams = new URLSearchParams();
      if (query.trim()) {
        newSearchParams.set('q', query);
      }
      setSearchParams(newSearchParams, { replace: true });
    }, 300);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [query]); // Remove setSearchParams from dependency array

  const handleSearchChange = e => {
    setQuery(e.target.value);
  };

  return (
    <div className="filter-box">
      <input
        type="text"
        placeholder="Search cafes..."
        value={query}
        onChange={handleSearchChange}
        className="search-input"
      />
    </div>
  );
}

export default Filter;
