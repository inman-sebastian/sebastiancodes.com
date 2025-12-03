import Icon, { type IconProps } from "@/components/icon";

export type PillProps = {
    icon?: IconProps
    className?: string;
    children: React.ReactNode;
}

export default function Pill({ icon, className = "", children }: PillProps) {
    return (
        <dd className={`group/pill bg-surface rounded-sm py-3 px-4 inline-flex items-center gap-3 ${className}`}>
            {icon && <Icon name={icon.name} className={`-ml-0.5 ${icon?.className}`} />}
            <span className="text-xs font-bold tracking-wide leading-none uppercase inline-flex items-center gap-3">{children}</span>
        </dd>
    )
}