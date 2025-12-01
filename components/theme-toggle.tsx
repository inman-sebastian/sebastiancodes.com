"use client";

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

    return (
        <div className="absolute top-0 -translate-y-full lg:pb-6 flex items-center gap-3 text-xs font-bold">
            <button
                type="button"
                onClick={() => setTheme("light")}
                aria-label="Use light theme"
                title="Light theme"
                className={`uppercase ${theme === "light" ? "text-heading" : "text-foreground/50"}`}>
                Light
            </button>
            <span aria-hidden="true" className="tracking-wide text-foreground/50">//</span>
            <button
                type="button"
                onClick={() => setTheme("dark")}
                aria-label="Use dark theme"
                title="Dark theme"
                className={`uppercase ${theme === "dark" ? "text-heading" : "text-foreground/50"}`}>
                Dark
            </button>
        </div>
    );
}