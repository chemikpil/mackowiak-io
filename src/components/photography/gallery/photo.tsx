import { motion } from "motion/react";

export function Photo({ name, src }: { name: string; src: string }) {
	return (
		<motion.img
			layoutId={`${name}-image`}
			src={src}
			alt={name}
			loading="lazy"
			className="size-full object-cover"
		/>
	);
}
