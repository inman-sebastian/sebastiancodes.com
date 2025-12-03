import toTitleCase from "@/helpers/toTitlecase";

export type SectionProps = {
    id: string;
    index?: `${number}`;
    title?: string;
    className?: string;
    children?: React.ReactNode;
}

export default function Section({ index, id, title, className = "", children }: SectionProps) {
    const sectionTitle = title ?? toTitleCase(id);
    const sectionIndex = index && (Number.parseInt(index) < 9 ? `0${Number.parseInt(index)}` : `${Number.parseInt(index)}`);

    return (
        <>
            <section id={id} aria-labelledby={title ? `${id}-title` : undefined} className="group/section">
                <div className="mb-6">
                    <h2 className="font-sans! text-xs font-bold tracking-wide uppercase text-muted flex items-center gap-3">
                        {sectionIndex && (
                            <>
                                <span>{sectionIndex}</span>
                                <span>//</span>
                            </>
                        )}
                        <span id={`${id}-title`}>{sectionTitle}</span>
                    </h2>
                </div>
                <div className={`relative z-0 ${className}`}>
                    {children}
                </div>
            </section>
            <hr className="border-white/5" />
        </>
    )
}