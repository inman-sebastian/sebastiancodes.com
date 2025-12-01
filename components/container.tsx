export type ContainerProps = {
    className?: string;
    children: React.ReactNode;
}

export default function Container({ className, children }: ContainerProps) {
    return <div className={`@container max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-22 xl:gap-44 px-8 lg:px-22 py-8 lg:py-0 ${className}`}>{children}</div>
}