import * as React from "react";

export default function useTextContent(children: React.ReactNode) {
    return React.useMemo(() => {
        if (typeof children === "string") {
            return children;
        } else if (Array.isArray(children)) {
            return children.map(child => (typeof child === "string" ? child : "")).join("");
        }
        return "";
    }, [children]);
}