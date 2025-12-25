import type { SpinnerVariants } from "./spinner.style";
import { spinnerVariants } from "./spinner.style";

interface SpinnerProps
	extends React.HTMLAttributes<SVGSVGElement>,
		SpinnerVariants {
	ref?: React.Ref<SVGSVGElement>;
}

export function Spinner({ size, ref, className, ...props }: SpinnerProps) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-label="loading"
			className={spinnerVariants({ size, className })}
			ref={ref}
			{...props}
		>
			<title>Loading</title>
			<path d="M21 12a9 9 0 1 1-6.219-8.56" />
		</svg>
	);
}

Spinner.displayName = "Ogar-UI.Spinner";
