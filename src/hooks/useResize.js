import { useEffect, useState } from 'react';

export const useResize = () => {
  const [size, setSize] = useState();

  useEffect(() => {
    const getSize = () => setSize(window.innerWidth);

    getSize();

    window.addEventListener('resize', getSize);

    return () => window.removeEventListener('resize', getSize);
  }, []);

  return size;
};
