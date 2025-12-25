import type { VariantProps } from "tailwind-variants";
import { tv } from "tailwind-variants";

export const spinnerVariants = tv({
    base: "animate-spin",
    variants: {
        size: {
            sm: "size-4",
            md: "size-5",
            lg: "size-6",
        },
    },
    defaultVariants: {
        size: "md",
    },
});

export type SpinnerVariants = VariantProps<typeof spinnerVariants>;