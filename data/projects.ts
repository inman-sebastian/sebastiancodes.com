export interface Project {
    href: string;
    title: string;
    description: string;
    primaryLanguage: string;
}

const projects: readonly Project[] = [
    {
        href: "/projects/project-1",
        title: "Project One",
        description: "Veniam mollit Lorem ipsum aute exercitation excepteur aute occaecat nulla ad aliqua quis occaecat. In officia culpa in labore minim.",
        primaryLanguage: "typescript"
    },
    {
        href: "/projects/project-2",
        title: "Project Two",
        description: "Veniam mollit Lorem ipsum aute exercitation excepteur aute occaecat nulla ad aliqua quis occaecat. In officia culpa in labore minim.",
        primaryLanguage: "python"
    },
    {
        href: "/projects/project-3",
        title: "Project Three",
        description: "Veniam mollit Lorem ipsum aute exercitation excepteur aute occaecat nulla ad aliqua quis occaecat. In officia culpa in labore minim.",
        primaryLanguage: "rust"
    },
    {
        href: "/projects/project-4",
        title: "Project Four",
        description: "Veniam mollit Lorem ipsum aute exercitation excepteur aute occaecat nulla ad aliqua quis occaecat. In officia culpa in labore minim.",
        primaryLanguage: "go"
    }
] as const;

export default projects;