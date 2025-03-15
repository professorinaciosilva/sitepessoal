'use client';

import { useCallback, useEffect } from 'react';

export const useRecursiveTimeout = (callback, delay) => {
  const savedCallback = useCallback(callback, [callback]);

  useEffect(() => {
    let id = 0;
    const tick = () => {
      const timeoutId = setTimeout(() => {
        id = requestAnimationFrame(tick);
        savedCallback();
      }, delay);
      return timeoutId;
    };
    const timeoutId = tick();

    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(id);
    };
  }, [savedCallback, delay]);
};