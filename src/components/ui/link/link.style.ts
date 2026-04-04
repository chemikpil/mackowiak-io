import type { VariantProps } from "tailwind-variants";
import { tv } from "tailwind-variants";

import { buttonVariants } from "@/components/ui/button/button.style";

export const linkVariants = tv({
	extend: buttonVariants,
	slots: {
		root: "no-underline inline-flex place-items-center justify-center gap-2 shrink-0",
	},
	variants: {
		variant: {
			link: {
				root: "p-0 hover:underline pressed:underline rounded-none",
			},
		},
	},
	compoundVariants: [
		{
			variant: "link",
			class: {
				root: "h-auto",
			},
		},
	],
	defaultVariants: {
		variant: "link",
	},
});

export type LinkVariants = VariantProps<typeof linkVariants>;
