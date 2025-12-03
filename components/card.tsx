import Icon from "@/components/icon";

type CardPropsBase = {
  href?: string;
  title?: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
};

type CardPropsCommon = CardPropsBase & {
  type?: "common";
};

type CardPropsProject = CardPropsBase & {
  type?: "project";
  primaryLanguage?: string;
};

type CardPropsThought = CardPropsBase & {
  type?: "thought";
  primaryTopic?: string;
  datePublished?: string;
};

type CardPropsTestimonial = CardPropsBase & {
  type?: "testimonial";
  authorName?: string;
  authorRole?: string;
  authorCompany?: string;
};

export type CardProps =
  | CardPropsCommon
  | CardPropsProject
  | CardPropsThought
  | CardPropsTestimonial;

export default function Card({
  type = "common",
  href,
  className,
  children,
  ...props
}: CardProps) {
  const Wrapper = ({
    className,
    children,
  }: {
    className?: string;
    children: React.ReactNode;
  }) => {
    return href ? (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={className}
      >
        {children}
      </a>
    ) : (
      <div className={className}>{children}</div>
    );
  };

  return (
    <article
      className={`relative w-full rounded-sm bg-surface ${href && "transform-gpu transition-all lg:group-hover-focus/grid:opacity-25 lg:hover-focus:opacity-100 lg:hover-focus:scale-[1.1] hover-focus:z-10"} ${className}`}
    >
      <Wrapper className="group/card h-full flex flex-col justify-between p-8 lg:p-10 relative z-10 rounded-sm">
        {type === "project" ||
          (type === "thought" && (
            <div className="flex-1">
              {"primaryLanguage" in props &&
                props.primaryLanguage && (
                  <p className="text-xs font-bold tracking-widest uppercase transition-colors mb-6">
                    {props.primaryLanguage}
                  </p>
                )}
              {type === "thought" &&
                "primaryTopic" in props &&
                props.primaryTopic && (
                  <p className="text-xs font-bold tracking-widest uppercase transition-colors mb-6">
                    {props.primaryTopic}
                  </p>
                )}
            </div>
          ))}
        {type === "thought" &&
          "datePublished" in props &&
          props.datePublished && (
            <p className="text-sm font-medium tracking-wide mb-2">
              {props.datePublished}
            </p>
          )}
        {props.title && (
          <h3 className="text-lg font-semibold leading-tight text-heading mb-2">
            {props.title}
          </h3>
        )}
        {props.description && <p>{props.description}</p>}
        {type === "testimonial" ? (
          <>
            <Icon name="quote" className="size-10 mb-6 opacity-25" />
            <blockquote className="flex-1 flex flex-col justify-end">
                <p className="text-md font-handwriting">{children}</p>
                {"authorName" in props && props.authorName && (
                    <cite className="mt-4 font-semibold text-sm text-heading">- {props.authorName}</cite>
                )}
            </blockquote>
          </>
        ) : (
          children
        )}
      </Wrapper>
    </article>
  );
}
