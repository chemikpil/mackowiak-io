import type { ButtonProps as AriaButtonProps } from "react-aria-components";
import {
	Button as AriaButton,
	composeRenderProps,
} from "react-aria-components";

import { Spinner } from "@/components/ui/spinner";
import type { ButtonVariants } from "./button.style";
import { buttonVariants } from "./button.style";

interface ButtonProps extends AriaButtonProps, ButtonVariants {
	ref?: React.Ref<HTMLButtonElement>;
}

export function Button({
	className,
	variant,
	size,
	ref,
	children,
	...props
}: ButtonProps) {
	return (
		<AriaButton
			className={composeRenderProps(className, (className, renderProps) =>
				buttonVariants({ ...renderProps, variant, size, className }),
			)}
			ref={ref}
			{...props}
		>
			{composeRenderProps(children, (children, { isPending }) => (
				<>
					{isPending && (
						<span
							aria-hidden
							data-spinner
							className="flex absolute inset-0 justify-center items-center"
						>
							<Spinner />
						</span>
					)}
					{children}
				</>
			))}
		</AriaButton>
	);
}

Button.displayName = "Ogar-UI.Button";
