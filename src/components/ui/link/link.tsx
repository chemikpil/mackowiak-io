import type { LinkProps as AriaLinkProps } from "react-aria-components";
import { Link as AriaLink, composeRenderProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

import type { LinkVariants } from "./link.style";
import { linkVariants } from "./link.style";

interface LinkProps extends AriaLinkProps, LinkVariants {}

export function Link({ className, variant, size, ...props }: LinkProps) {
    const { root, content } = linkVariants();

    return (
        <AriaLink
            className={composeRenderProps(className, (className, renderProps) =>
                twMerge(
                    root({ ...renderProps, variant, size, className }),
                    content({ variant, size }),
                ),
            )}
            {...props}
        />
    );
}
