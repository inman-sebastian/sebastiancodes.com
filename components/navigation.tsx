"use client";

import useSectionObserver from "@/hooks/useSectionObserver";
import * as React from "react";

const navigationLinks = [
    { id: "projects", label: "Projects", href: "#projects" },
    { id: "clients", label: "Clients", href: "#clients" },
    { id: "thoughts", label: "Thoughts", href: "#thoughts" },
    { id: "praise", label: "Praise", href: "#praise" }
];

export type NavigationProps = {
    className?: string;
};

export default function Navigation({ className }: NavigationProps) {
    const store = useSectionObserver();

    const NavigationLink = React.memo(function NavigationLink({ id, label, href }: typeof navigationLinks[number]) {
        const [isActive, setIsActive] = React.useState<boolean>(() => store.get() === id);
        const index = navigationLinks.findIndex(link => link.id === id);
        const numberLabel = index < 9 ? `0${index + 1}` : `${index + 1}`;

        React.useEffect(() => {
            const unsub = store.subscribe(() => setIsActive(store.get() === id));
            return unsub;
        }, [id, store]);

        return (
            <li className="lg:my-4">
                <a href={href} aria-current={isActive && "page"} aria-label={label} className="group text-muted inline-flex items-center gap-3 transition-colors hover-focus:text-heading aria-[current=page]:text-heading">
                    <span aria-hidden="true" className="select-none">{numberLabel}</span>
                    <span aria-hidden="true" className={`inline-block ${isActive ? "w-[10ch]" : "w-[1.1ch]"} -mt-px select-none transition-all overflow-clip`}>
                        ///////////////////////////////////////////////
                    </span>
                    <span>{label}</span>
                </a>
            </li>
        );
    });

    return (
        <nav className={`hidden text-xs font-bold tracking-wide uppercase mt-12 lg:block ${className}`} aria-label="Main menu">
            <ol className="flex flex-row lg:flex-col lg:-my-4">
                {navigationLinks.map(({ id, label, href }) => (
                    <NavigationLink key={id} id={id} label={label} href={href} />
                ))}
            </ol>
        </nav>
    )
}