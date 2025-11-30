"use client";

import * as React from "react";

type SectionStore = {
    get: () => string | null;
    subscribe: (cb: () => void) => () => void;
};

let currentSection: string | null = null;
const listeners = new Set<() => void>();

let intersectionObserver: IntersectionObserver | null = null;
let mutationObserver: MutationObserver | null = null;

let initialized = false;

function notify() {
    for (const cb of Array.from(listeners)) cb();
}

function initObserver() {
    if (initialized) return;
    if (typeof window === "undefined" || typeof document === "undefined") return;
    initialized = true;

    const handleIntersect: IntersectionObserverCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = (entry.target as Element).id || null;
                if (id !== currentSection) {
                    currentSection = id;
                    notify();
                }
            }
        });
    };

    intersectionObserver = new IntersectionObserver(handleIntersect, {
        root: null,
        rootMargin: "0px",
        threshold: 0.6,
    });

    const sections = document.querySelectorAll("section[id]");
    sections.forEach(section => intersectionObserver?.observe(section));

    mutationObserver = new MutationObserver(() => {
        const secs = document.querySelectorAll("section[id]");
        secs.forEach(s => intersectionObserver?.observe(s));
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    if (typeof window !== "undefined") {
        window.addEventListener("beforeunload", () => {
            intersectionObserver?.disconnect();
            mutationObserver?.disconnect();
        });
    }
}

export default function useSectionObserver(): SectionStore {
    const store = React.useMemo<SectionStore>(() => ({
        get: () => currentSection,
        subscribe: (cb: () => void) => {
            listeners.add(cb);
            return () => listeners.delete(cb);
        }
    }), []);

    React.useEffect(() => {
        initObserver();
    }, []);

    return store;
}