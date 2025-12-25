import type { LinkProps as AriaLinkProps } from "react-aria-components";
import { Link as AriaLink, composeRenderProps } from "react-aria-components";

import type { LinkVariants } from "./link.style";
import { linkVariants } from "./link.style";

interface LinkProps extends AriaLinkProps, LinkVariants {}

export function Link({ className, variant, size, ...props }: LinkProps) {
	return (
		<AriaLink
			className={composeRenderProps(className, (className, renderProps) =>
				linkVariants({ ...renderProps, variant, size, className }),
			)}
			{...props}
		/>
	);
}
