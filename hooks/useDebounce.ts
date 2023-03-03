import React from "react";

const useDebounce = (value: any, milisec: number) => {
  const [debouncedValue, setDebouncedValue] = React.useState<any>(value);

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, milisec);

    return () => {
      clearTimeout(handler);
    };
  }, [value, milisec]);

  return debouncedValue;
};

export default useDebounce;
