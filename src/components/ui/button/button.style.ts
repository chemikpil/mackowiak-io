import type { VariantProps } from "tailwind-variants";
import { tv } from "tailwind-variants";

export const buttonVariants = tv({
    base: [
        'relative isolate shrink-0 whitespace-nowrap outline-transparent inline-flex cursor-pointer touch-none place-items-center justify-center gap-2 rounded-xl', 
        'active:scale-96 data-pressed:scale-96',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus',
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none aria-disabled:opacity-50 aria-disabled:cursor-not-allowed aria-disabled:pointer-events-none',
        'data-pending:text-transparent',
        'transform-gpu motion-reduce:transition-none transition',
        '[&>svg]:-mx-0.5'
    ],
    variants: {
        variant: {
            primary: [
                'bg-primary text-primary-foreground shadow-button-primary not-disabled:inset-shadow-[0_1px_--theme(--color-white/20%)] border-primary border',
                'hover:bg-primary-hover data-hovered:bg-primary-hover',
                'active:bg-primary-hover data-pressed:bg-primary-hover',
                '[&>span[data-spinner]]:text-primary-foreground',
                
            ],
            secondary: [
                'bg-secondary text-secondary-foreground shadow-button-secondary border-border border',
                'hover:bg-secondary-hover data-hovered:bg-secondary-hover',
                'active:bg-secondary-hover data-pressed:bg-secondary-hover',
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
                '[&>span[data-spinner]]:text-foreground'
            ]
        },
        size: {
            sm: 'h-8 px-3 text-sm',
            md: 'h-9 px-4 text-sm',
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
