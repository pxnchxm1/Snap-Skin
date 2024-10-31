"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";
import { IoIosMoon } from "react-icons/io";
import { IoSunny } from "react-icons/io5";

const ThemeToggler = () => {
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        console.log("Current theme:", theme);
    }, [theme]);

    return (
        <section className="relative mt-2">
            <button aria-label="Toggle Theme" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                <IoSunny className={`text-4xl transition-all duration-800 ease-in-out transform ${theme === "dark" ? "opacity-0 scale-0 rotate-90" : "opacity-100 scale-100 rotate-0"}`} />
                <IoIosMoon
                    className={`absolute top-0 text-4xl left-0.3 transition-all duration-800 ease-in-out transform ${
                        theme === "dark" ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-0 rotate-90"
                    }`}
                />
            </button>
        </section>
    );
};

export default ThemeToggler;