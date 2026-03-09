import type { VariantProps } from "tailwind-variants";
import { tv } from "tailwind-variants";

export const logoVariants = tv({
  base: "**:data-[slot=broken-glasses]:hidden",
  variants: {
    variant: {
      default: {},
      ui: "[--glasses-stop-1:oklch(0.659_0.188_250.769)] [--glasses-stop-2:oklch(0.655_0.213_321.332)] [--glasses-stop-3:oklch(0.65_0.238_18.289)] [--glasses-stop-4:oklch(0.757_0.177_59.992)]",
      broken: "**:data-[slot=glasses]:hidden **:data-[slot=broken-glasses]:block",
    },
  },
});

export type LogoVariants = VariantProps<typeof logoVariants>;
