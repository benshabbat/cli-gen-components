import { useState, useEffect } from 'react';

interface useFetchReturn {
  state: any;
  setState: (value: any) => void;
}

const useFetch = (): useFetchReturn => {
  const [state, setState] = useState<any>(null);

  useEffect(() => {
    // Add your effect logic here
    return () => {
      // Cleanup
    };
  }, []);

  return { state, setState };
};

export default useFetch;
