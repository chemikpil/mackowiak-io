import type { VariantProps } from "tailwind-variants";
import { tv } from "tailwind-variants";

export const loaderVariants = tv({
    slots: {
        root: "",
        wave1: "animate-[wave_1.2s_cubic-bezier(0,0,0.2,1)_infinite]",
        wave2: "animate-[wave_1.2s_cubic-bezier(0,0,0.2,1)_0.15s_infinite]",
        wave3: "animate-[wave_1.2s_cubic-bezier(0,0,0.2,1)_0.3s_infinite]",
        wave4: "animate-[wave_1.2s_cubic-bezier(0,0,0.2,1)_0.45s_infinite]",
    },
    variants: {
        size: {
            sm: { root: "size-3" },
            md: { root: "size-4" },
            lg: { root: "size-5" },
        },
    },
    defaultVariants: {
        size: "md",
    },
});

export type LoaderVariants = VariantProps<typeof loaderVariants>;
