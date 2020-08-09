import { useState, useEffect, DependencyList } from 'react';

/**
 * Hook for getting the result of a promise.
 * @param promise
 * @param deps param that will be forwarded to useEffect.
 * @param defaultValue default value of the promise value (before it resolves)
 * @returns [result, loading, error] [the result of the promise when it resolves, true iff promise is not resolved, error if it exists]
 */
export const useAsync: <T, E = any>(
  promise: () => Promise<T>,
  dep?: DependencyList,
  defaultValue?: T | null
) => [T | null, boolean, E | null] = <T, E>(
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
  return [result, loading, error];
};
