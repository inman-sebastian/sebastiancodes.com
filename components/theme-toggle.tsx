"use client";

import Icon from "@/components/icon";
import * as React from "react";

export type ThemeToggleProps = {
    defaultTheme?: "light" | "dark" | "system";
}

export default function ThemeToggle(props: ThemeToggleProps) {
    const { defaultTheme = "system" } = props;
    const [theme, setTheme] = React.useState<"light" | "dark" | "system">(defaultTheme);
    const [mounted, setMounted] = React.useState(false);

    // On mount, read the preferred color scheme from system
    React.useEffect(() => {
        if (typeof window === "undefined") return;
        setMounted(true);
        if (defaultTheme === "system") {
            const isDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
            setTheme(isDark ? "dark" : "light");
        }
    }, [defaultTheme]);

    // Apply theme to document
    React.useEffect(() => {
        if (typeof document === "undefined") return;
        const root = document.documentElement;
        if (theme === "dark") {
            root.classList.add("dark");
            root.classList.remove("light");
        } else {
            root.classList.remove("dark");
            root.classList.add("light");
        }
    }, [theme]);

    if (!mounted) return null;

    return (
        <div className="flex items-center gap-3 lg:gap-2 text-xs uppercase font-bold">
            <button
                type="button"
                onClick={() => setTheme("light")}
                aria-label="Toggle theme"
                title="Toggle theme"
                className={`${theme === "light" ? "" : "opacity-50"}`}>
                Light
            </button>
            <span className="tracking-wide opacity-50">//</span>
            <button
                type="button"
                onClick={() => setTheme("dark")}
                aria-label="Toggle theme"
                title="Toggle theme"
                className={`${theme === "dark" ? "" : "opacity-50"}`}>
                Dark
            </button>
        </div>
    );
}