import { useEffect, useState } from "react";

const useToggleTheme = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.documentElement.classList.add('dark');
            setIsDarkMode(true);
        }
        else {
            document.documentElement.classList.remove('dark');
            setIsDarkMode(false);
        }

    }, []);

    const handleToggleTheme = () => {
        setIsDarkMode(preMode => {
            const newMode = !preMode;
            if (newMode) {
                document.documentElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            }
            else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('theme', 'light')
            }
            return newMode;
        })
    };

    return [isDarkMode, handleToggleTheme];
};

export default useToggleTheme;
