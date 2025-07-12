import { useEffect, useState } from 'react';

export function useNavigation() {
  const [navItems, setNavItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const staticNavItems = [{ path: '/', label: 'Home' }];

  useEffect(() => {
    setNavItems(staticNavItems);
  }, []);

  return { navItems, loading };
}
