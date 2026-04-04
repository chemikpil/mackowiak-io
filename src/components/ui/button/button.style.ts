import type { VariantProps } from "tailwind-variants";
import { tv } from "tailwind-variants";

export const buttonVariants = tv({
    slots: {
        root: [
            "group/button", // Group name
            "[--button-radius:var(--radius-xl)]", // Custom variables
            "flex place-items-center justify-center relative isolate", // Layout
            "text-sm whitespace-nowrap select-none", // Typography
            "rounded-(--button-radius) px-4 border-0 appearance-none", // Appearance
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
                    "[--button-shadow:0_0_0_1px_var(--primary),0_2px_4px_-2px_oklch(0_0_0_/_0.20),0_4px_6px_-1px_oklch(0_0_0_/_0.4),inset_0_1px_0.5px_0_oklch(1_0_0_/_0.2)]", // Light custom variables
                    "[--button-shadow-hover:0_0_0_1px_var(--primary),0_2px_4px_-2px_oklch(0_0_0_/_0.32),0_4px_6px_-1px_oklch(0_0_0_/_0.6),inset_0_1px_0.5px_0_oklch(1_0_0_/_0.2)]",
                    "dark:[--button-shadow:0_0_0_1px_oklch(1_0_0_/_0.2),0_2px_4px_-2px_oklch(0_0_0_/_0.45),0_4px_6px_-1px_oklch(0_0_0_/_0.45),inset_0_-1px_0_0_oklch(0_0_0_/_0.24)]", // Dark custom variables
                    "dark:[--button-shadow-hover:0_0_0_1px_oklch(1_0_0_/_0.2),0_2px_4px_-2px_oklch(0_0_0_/_0.6),0_4px_6px_-1px_oklch(0_0_0_/_0.6),inset_0_-1px_0_0_oklch(0_0_0_/_0.4)]",
                    "relative bg-primary text-primary-foreground shadow-(--button-shadow) transition-shadow duration-200 ease-in-out", // Colors
                    "before:absolute before:rounded-(--button-radius) before:inset-0 before:bg-linear-to-b before:from-primary-foreground before:to-primary-foreground/0 before:opacity-24 dark:before:bg-linear-to-t dark:before:opacity-11",
                    "before:transition before:duration-200 before:ease-in-out",
                    "hover:shadow-(--button-shadow-hover) hover:before:opacity-32 data-hovered:before:opacity-32 dark:hover:before:opacity-24 dark:data-hovered:before:opacity-24",
                    "active:before:opacity-0 data-pressed:before:opacity-0 dark:active:before:opacity-0 dark:data-pressed:before:opacity-0",
                ],
            },
            secondary: {
                root: [
                    "[--button-shadow:0_0_0_1px_oklch(0_0_0_/_0.06),0_2px_4px_-2px_oklch(0_0_0_/_0.08),0_4px_6px_-1px_oklch(0_0_0_/_0.06),inset_0_1px_1px_0_oklch(1_0_0)]", // Light custom variables
                    "[--button-shadow-hover:0_0_0_1px_oklch(0_0_0_/_0.12),0_2px_4px_-2px_oklch(0_0_0_/_0.1),0_4px_6px_-1px_oklch(0_0_0_/_0.08),inset_0_1px_1px_0_oklch(1_0_0)]",
                    "dark:[--button-shadow:0_0_0_1px_oklch(1_0_0_/_0.12),0_2px_4px_-2px_oklch(0_0_0_/_0.24),0_4px_6px_-2px_oklch(0_0_0_/_0.24),inset_0_-1px_0.5px_0_oklch(0_0_0_/_0.6)]", // Dark custom variables,
                    "dark:[--button-shadow-hover:0_0_0_1px_oklch(1_0_0_/_0.2),0_2px_4px_-2px_oklch(0_0_0_/_0.4),0_4px_6px_-2px_oklch(0_0_0_/_0.4),inset_0_-1px_0.5px_0_oklch(0_0_0_/_0.8)]",
                    "bg-secondary text-secondary-foreground shadow-(--button-shadow) transition-shadow duration-200 ease-in-out",
                    "hover:shadow-(--button-shadow-hover)",
                ],
            },
            tertiary: {
                root: [
                    "bg-tertiary text-tertiary-foreground",
                    "hover:bg-tertiary-hover data-hovered:bg-tertiary-hover",
                    "active:bg-tertiary-hover data-pressed:bg-tertiary-hover",
                    "[&>span[data-spinner]]:text-tertiary-foreground",
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
                        "after:absolute after:inset-0 after:rounded-(--button-radius) after:z-0 after:pointer-events-none after:bg-danger/25",
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
