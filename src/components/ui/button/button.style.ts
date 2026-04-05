import type { VariantProps } from "tailwind-variants";
import { tv } from "tailwind-variants";

export const buttonVariants = tv({
    slots: {
        root: [
            "group/button", // Group name
            "flex place-items-center justify-center relative isolate", // Layout
            "text-sm whitespace-nowrap select-none", // Typography
            "rounded-xl px-4 border-0 appearance-none", // Appearance
            "transition-[scale_background_shadow] duration-[200ms] transform-gpu motion-reduce:transition-none", // Animations
            "touch-none", // Interactions
            "outline-transparent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus", // Focus
            "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none aria-disabled:opacity-50 aria-disabled:cursor-not-allowed aria-disabled:pointer-events-none", // Disabled
            "active:scale-[0.98] data-pressed:scale-[0.98]", // Active
            "[&>svg]:-mx-0.5", // Rest
        ],
        content: [
            "inline-flex place-items-center justify-center gap-2 shrink-0",
        ],
    },
    variants: {
        variant: {
            primary: {
                root: [
                    "bg-primary text-primary-foreground",
                    "hover:bg-primary-hover data-hovered:bg-primary-hover",
                    "active:bg-primary-hover data-pressed:bg-primary-hover",
                ],
            },
            secondary: {
                root: [
                    "bg-secondary text-secondary-foreground",
                    "hover:bg-secondary-hover data-hovered:bg-secondary-hover",
                    "active:bg-secondary-hover data-pressed:bg-secondary-hover",
                ],
            },
            tertiary: {
                root: [
                    "shadow-[0_0_0_1px_oklch(0_0_0_/_0.12)] dark:shadow-[0_0_0_1px_oklch(1_0_0_/_0.12)]",
                    "hover:shadow-[0_0_0_1px_oklch(0_0_0_/_0.18)] dark:hover:shadow-[0_0_0_1px_oklch(1_0_0_/_0.18)]",
                ],
            },
            ghost: {
                root: [
                    "text-foreground",
                    "hover:bg-tertiary-hover data-hovered:bg-tertiary-hover",
                    "active:bg-tertiary-hover data-pressed:bg-tertiary-hover",
                    "[&>span[data-spinner]]:text-foreground",
                ],
            },
        },
        size: {
            sm: {
                root: ["h-8 px-3"],
            },
            md: {
                root: ["h-9"],
            },
            lg: {
                root: ["h-10 px-4 text-base"],
            },
            "icon-sm": {
                root: ["size-8 px-0"],
            },
            "icon-md": {
                root: ["size-9 px-0"],
            },
            "icon-lg": {
                root: ["size-10 px-0"],
            },
        },
        isError: {
            true: {
                root: [
                    [
                        "after:absolute after:inset-0 after:rounded-xl after:z-0 after:pointer-events-none after:bg-danger/25",
                    ],
                    [
                        "animate-horizontal-vibration annimation-duration-200 animate-iteration-count-once",
                    ],
                ],
            },
        },
    },
    defaultVariants: {
        variant: "primary",
        size: "md",
    },
});

export type ButtonVariants = VariantProps<typeof buttonVariants>;
