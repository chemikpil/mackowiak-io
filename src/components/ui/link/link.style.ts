import type { VariantProps } from "tailwind-variants";
import { tv } from "tailwind-variants";

import { buttonVariants } from '@/components/ui/button'

export const linkVariants = tv({
    extend: buttonVariants,
    base: 'no-underline',
    variants: {
        variant: {
            link: 'p-0 hover:underline pressed:underline rounded-none'
        },
    },
    compoundVariants: [
        {
            variant: 'link',
            className: 'h-auto'
        }
    ],
    defaultVariants: {
        variant: 'link',
    }
})

export type LinkVariants = VariantProps<typeof linkVariants>;