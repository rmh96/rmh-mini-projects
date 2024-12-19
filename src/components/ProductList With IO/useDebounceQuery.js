import { useEffect, useState } from "react";

export const useDebounceQuery = (query, delay) => {
  const [debounceQuery, setDebounceQuery] = useState(query);

  useEffect(() => {
    const handleQuery = setTimeout(() => {
      setDebounceQuery(query);
    }, delay);
    return () => clearTimeout(handleQuery);
  });
  return [debounceQuery];
};
