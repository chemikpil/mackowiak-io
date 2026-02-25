import type { VariantProps } from "tailwind-variants";
import { tv } from "tailwind-variants";

export const buttonVariants = tv({
    base: [
        'group/button', // Group name
        'inline-flex place-items-center justify-center gap-2 shrink-0 relative isolate', // Layout
        'text-sm whitespace-nowrap select-none', // Typography
        'rounded-xl px-4 border-0 appearance-none', // Appearance
        'transition-[scale_background_shadow] duration-[200ms] transform-gpu motion-reduce:transition-none', // Animations
        'cursor-pointer touch-none', // Interactions
        'outline-transparent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus', // Focus
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none aria-disabled:opacity-50 aria-disabled:cursor-not-allowed aria-disabled:pointer-events-none', // Disabled
        'data-pending:text-transparent', // Pending
        'active:scale-[0.98] data-pressed:scale-[0.98]', // Active
        '[&>svg]:-mx-0.5', // Rest
    ],
    variants: {
        variant: {
            primary: [
                'bg-primary text-primary-foreground shadow-button-primary hover:shadow-button-primary-hovered',
                'before:absolute before:inset-0 before:block before:rounded-xl before:opacity-16 before:bg-linear-(--button-primary-gradient) before:transition before:duration-[200ms]',
                'hover:before:opacity-24 data-hovered:before:opacity-24 active:before:opacity-0 data-pressed:before:opacity-0',
                '[&>span[data-spinner]]:text-primary-foreground',
            ],
            secondary: [
                'bg-secondary text-secondary-foreground shadow-button-secondary hover:shadow-button-secondary-hover',
                '[&>span[data-spinner]]:text-secondary-foreground'
            ],
            tertiary: [
                'bg-tertiary text-tertiary-foreground',
                'hover:bg-tertiary-hover data-hovered:bg-tertiary-hover',
                'active:bg-tertiary-hover data-pressed:bg-tertiary-hover',
                '[&>span[data-spinner]]:text-tertiary-foreground'
            ],
            ghost: [
                'text-foreground',
                'hover:bg-tertiary-hover data-hovered:bg-tertiary-hover',
                'active:bg-tertiary-hover data-pressed:bg-tertiary-hover',
                '[&>span[data-spinner]]:text-foreground',
                'disabled:opacity-25'
            ]
        },
        size: {
            sm: 'h-8 px-3',
            md: 'h-9',
            lg: 'h-10 px-4 text-base',
            'icon-sm': 'size-8 px-0',
            'icon-md': 'size-9 px-0',
            'icon-lg': 'size-10 px-0',
        },
    },
    defaultVariants: {
        variant: 'primary',
        size: 'md',
    }
});

export type ButtonVariants = VariantProps<typeof buttonVariants>;
