import { useState, useEffect } from 'react';

function useLocalStorage(key: string, initialValue: number) {
    const [value, setValue] = useState<number>(initialValue);

    useEffect(() => {
        // Only access localStorage in the browser
        if (typeof window !== 'undefined') {
            const storedValue = localStorage.getItem(key);
            if (storedValue !== null) {
                setValue(JSON.parse(storedValue));
            }
        }
    }, [key]);

    const setStoredValue = (newValue: number) => {
        setValue(newValue);
        if (typeof window !== 'undefined') {
            localStorage.setItem(key, JSON.stringify(newValue));
        }
    };

    return [value, setStoredValue] as const;
}

export default useLocalStorage;
