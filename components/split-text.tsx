import "./split-text.css";

export type HeadingProps = {
    className?: string;
    children: string;
}

export default function Heading({ className, children }: HeadingProps) {
    const segmenter = new Intl.Segmenter(undefined, { granularity: "grapheme" });
    const characters = Array.from(segmenter.segment(children), s => s.segment.replace(/\s/, "\u00A0"));

    return (<div split-text="" aria-label={children} className={className}>
        {characters.map((char, index) => <span key={index} aria-hidden="true">{char}</span>)}
    </div>)
}