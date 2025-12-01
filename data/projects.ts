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
    }
] as const;

export default projects;