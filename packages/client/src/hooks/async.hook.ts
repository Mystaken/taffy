import { useState, useEffect, DependencyList } from 'react';

export interface UseAsyncReturn<T, E = any> {
  value: T | null;
  isLoading: boolean;
  isError: E | null;
  setValue: (value: T) => void;
}

export const useAsync: <T, E = any>(
  promise: () => Promise<T>,
  dep?: DependencyList,
  defaultValue?: T | null
) => UseAsyncReturn<T, E> = <T, E>(
  promise: () => Promise<T>,
  deps?: DependencyList,
  defaultValue?: T | null
) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [result, setResult] = useState<T | null>(defaultValue ?? null);
  const [error, setError] = useState<E | null>(null);

  useEffect(() => {
    let mounted = true;
    promise()
      .then(res => {
        if (mounted) {
          setResult(res);
        }
        setLoading(false);
      })
      .catch(e => {
        setError(e);
      });
    return () => {
      mounted = false;
    };
  }, deps);
  return {
    value: result,
    isLoading: loading,
    isError: error,
    setValue: setResult
  };
};
