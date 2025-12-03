export type GridProps = {
    className?: string;
    children?: React.ReactNode;
}

export default function Grid({ className = "", children }: GridProps) {
    return (
        <div className={`group/grid grid grid-cols-1 gap-2 pointer-events-none **:pointer-events-auto ${className}`}>
            {children}
        </div>
    )
}