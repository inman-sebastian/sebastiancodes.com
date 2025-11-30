type CardPropsBase = {
    href?: string;
    title?: string;
    description?: string;
    className?: string;
}

type CardPropsProject = CardPropsBase & {
    type: "project";
    primaryLanguage?: string;
}

type CardPropsThought = CardPropsBase & {
    type: "thought";
    primaryTopic?: string;
    datePublished?: string;
}

export type CardProps = CardPropsProject | CardPropsThought;

export default function Card({ type, href, className, ...props }: CardProps) {
    const Wrapper = ({ className, children }: { className?: string; children: React.ReactNode }) => {
        return href 
            ? <a 
                href={href} 
                target={href.startsWith("http") ? "_blank" : undefined} 
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined} 
                className={className}>{children}</a> 
            : <div className={className}>{children}</div>;
    }

    return (
        <article className={`relative rounded-sm transition-all bg-surface lg:group-hover-focus:opacity-40 lg:hover-focus:opacity-100 lg:hover-focus:scale-[1.1] hover-focus:z-10 ${className}`}>
            <Wrapper className="h-full flex flex-col justify-between p-8 lg:p-10 relative z-10 rounded-sm">
                <div className="flex-1">
                    <p className="text-xs font-bold tracking-widest uppercase text-heading transition-colors">
                        {type === "project" && "primaryLanguage" in props && props.primaryLanguage}
                        {type === "thought" && "primaryTopic" in props && props.primaryTopic}
                    </p>
                </div>
                {type === "thought" && "datePublished" in props && props.datePublished && (
                    <p className="text-sm font-medium tracking-wide mt-2 inline-flex items-center gap-1.5">
                        {props.datePublished}
                    </p>
                )}
                <h3 className="mt-2 text-lg font-semibold leading-tight text-heading">{props.title}</h3>
                {props.description && <p className="mt-4">{props.description}</p>}
            </Wrapper>
        </article>
    )
}