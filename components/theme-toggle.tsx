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

    const toggleTheme = React.useCallback(() => {
        setTheme(prev => {
            if (prev === "light") return "dark";
            if (prev === "dark") return "light";
            return "light"; // default fallback
        });
    }, []);


    if (!mounted) return null;

    return (
        <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title="Toggle theme"
            className="size-8 flex items-center justify-center rounded-sm bg-surface text-heading transition-colors">
            <Icon name="theme" />
        </button>
    );
}