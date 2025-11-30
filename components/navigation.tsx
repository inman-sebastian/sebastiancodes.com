"use client";

import useSectionObserver from "@/hooks/useSectionObserver";
import * as React from "react";

const navigationLinks = [
    { id: "projects", label: "Projects", href: "#projects" },
    { id: "thoughts", label: "Thoughts", href: "#thoughts" },
    { id: "playground", label: "Playground", href: "#playground" }
];

export default function Navigation() {
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
                <a href={href} aria-current={isActive && "page"} aria-label={label} className="group text-muted inline-flex items-center transition-colors hover-focus:text-heading aria-[current=page]:text-heading">
                    <span aria-hidden="true" className="text-xs tracking-wide select-none">{numberLabel}</span>
                    <span className={`inline-block ${isActive ? "w-12" : "w-6"} h-px mx-4 -mt-px bg-current transition-all group-hover-focus:w-12`} />
                    <span className="text-xs tracking-widest uppercase">{label}</span>
                </a>
            </li>
        );
    });

    return (
        <nav className="hidden text-sm font-bold uppercase text-widest mt-[72px] lg:block" aria-label="Main menu">
            <ol className="flex flex-row lg:flex-col lg:-my-4">
                {navigationLinks.map(({ id, label, href }) => (
                    <NavigationLink key={id} id={id} label={label} href={href} />
                ))}
            </ol>
        </nav>
    )
}