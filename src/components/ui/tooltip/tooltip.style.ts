import type { VariantProps } from "tailwind-variants";
import { tv } from "tailwind-variants";

export const tooltipVariants = tv({
    slots: {
        base: 'group bg-primary text-primary-foreground text-xs rounded-xl drop-shadow-md will-change-transform box-border px-4 py-2',
        arrow: 'block fill-primary group-placement-bottom:rotate-180 group-placement-left:-rotate-90 group-placement-right:rotate-90'
    },
    variants: {
        isEntering: {
            true: {
                base: 'animate-in fade-in placement-bottom:slide-in-from-top-0.5 placement-top:slide-in-from-bottom-0.5 placement-left:slide-in-from-right-0.5 placement-right:slide-in-from-left-0.5 ease-out duration-200'
            }
        },
        isExiting: {
            true: 'animate-out fade-out placement-bottom:slide-out-to-top-0.5 placement-top:slide-out-to-bottom-0.5 placement-left:slide-out-to-right-0.5 placement-right:slide-out-to-left-0.5 ease-in duration-150'
        }
    }
});

export type TooltipVariants = VariantProps<typeof tooltipVariants>;
