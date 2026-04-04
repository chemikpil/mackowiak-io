import type { ButtonProps as AriaButtonProps } from "react-aria-components";
import {
    Button as AriaButton,
    composeRenderProps,
} from "react-aria-components";

import {
    LoadingSwap,
    type LoadingSwapProps,
} from "@/components/shared/loading-swap/loading-swap";

import type { ButtonVariants } from "./button.style";
import { buttonVariants } from "./button.style";

interface ButtonProps extends AriaButtonProps, ButtonVariants {
    ref?: React.Ref<HTMLButtonElement>;
    swapOptions?: Omit<LoadingSwapProps, "children" | "isError" | "isPending">;
}

export function Button({
    className,
    variant,
    size,
    ref,
    children,
    isError = false,
    swapOptions,
    ...props
}: ButtonProps) {
    const { root, content } = buttonVariants();
    return (
        <AriaButton
            className={composeRenderProps(className, (className, renderProps) =>
                root({ ...renderProps, variant, size, isError, className }),
            )}
            ref={ref}
            {...props}
        >
            {composeRenderProps(children, (children, { isPending }) => (
                <LoadingSwap
                    isPending={isPending}
                    isError={isError}
                    {...swapOptions}
                >
                    <span className={content({ variant, size })}>
                        {children}
                    </span>
                </LoadingSwap>
            ))}
        </AriaButton>
    );
}

Button.displayName = "Ogar-UI.Button";
