import type { TooltipProps as AriaTooltipProps } from "react-aria-components";
import {
	Tooltip as AriaTooltip,
	TooltipTrigger as AriaTooltipTrigger,
	composeRenderProps,
	OverlayArrow,
} from "react-aria-components";
import { tooltipVariants } from "./tooltip.style";

export function TooltipTrigger(
	props: React.ComponentProps<typeof AriaTooltipTrigger>,
) {
	return <AriaTooltipTrigger {...props} />;
}

TooltipTrigger.displayName = "Ogar-UI.TooltipTrigger";

interface TooltipProps extends Omit<AriaTooltipProps, "children"> {
	ref?: React.Ref<HTMLDivElement>;
	children?: React.ReactNode;
}

export function Tooltip({ children, className, ref, ...props }: TooltipProps) {
	const { base, arrow } = tooltipVariants();

	return (
		<AriaTooltip
			className={composeRenderProps(className, (className, renderProps) =>
				base({ ...renderProps, className }),
			)}
			ref={ref}
			offset={10}
			{...props}
		>
			<OverlayArrow>
				<svg
					width={8}
					height={8}
					viewBox="0 0 8 8"
					aria-hidden="true"
					className={arrow()}
				>
					<path d="M0 0 L4 4 L8 0" />
				</svg>
			</OverlayArrow>
			{children}
		</AriaTooltip>
	);
}

Tooltip.displayName = "Ogar-UI.Tooltip";
