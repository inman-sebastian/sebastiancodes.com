"use client";

import * as React from "react";
import useTextContent from "@/hooks/useTextContent";

export type FluidHeadingProps = {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  children: React.ReactNode;
};

const FluidHeading = React.forwardRef<HTMLHeadingElement, FluidHeadingProps>(
  ({ as, className, children }, ref) => {
    const HeadingTag = as;
    const resizeObserver = React.useRef<ResizeObserver | null>(null);
    const headingRef = React.useRef<HTMLHeadingElement | null>(null);

    const textContent = useTextContent(children);

    return (
      <HeadingTag ref={ref} className={className}>
        {children}
      </HeadingTag>
    );
  },
);

export default FluidHeading;
