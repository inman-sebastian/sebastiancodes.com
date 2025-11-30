export type ContainerProps = {
    children: React.ReactNode
}

export default function Container({ children }: ContainerProps) {
    return <div className="@container max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-8 px-8 lg:px-22 py-8 lg:py-0">{children}</div>
}