import { useState, useEffect } from "react";
import { getItem, setItem } from "../utils/LocalStorage";

export function usePersistedState<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    const storedValue = getItem(key);
    return (storedValue as T) || initialValue;
  });

  useEffect(() => {
    setItem(key, value);
  }, [value]);

  return [value, setValue] as const;
}
