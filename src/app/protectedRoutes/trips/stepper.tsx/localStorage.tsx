import { useState } from 'react';

function useLocalStorage(key: string, initialValue: number) {
    const [value, setValue] = useState(() => {
        const storedValue = localStorage.getItem(key);
        return storedValue !== null ? JSON.parse(storedValue) : initialValue;
    });

    const setStoredValue = (newValue: number) => {
        setValue(newValue);
        localStorage.setItem(key, JSON.stringify(newValue));
    };

    // Place the return array directly after `return`
    return [value, setStoredValue] as const;
}

export default useLocalStorage;
