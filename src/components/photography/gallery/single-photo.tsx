import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";

import { useGalleryContext } from "./gallery-context";

interface SinglePhotoProps {
	name: string;
	src: string;
	aspectRatio: string;
	onClick: VoidFunction;
}

export function SinglePhoto({
	name,
	src,
	aspectRatio,
	onClick,
}: SinglePhotoProps) {
	const { baseZIndex, zStack } = useGalleryContext();

	return (
		<div
			onClick={onClick}
			className="fixed inset-0 flex justify-center place-items-center"
			style={{ zIndex: baseZIndex + zStack.indexOf("image") }}
		>
			<motion.div
				layoutId={name}
				initial={{
					borderRadius: 12,
				}}
				animate={{
					borderRadius: 32,
				}}
				exit={{
					borderRadius: 12,
				}}
				className={twMerge(
					"opacity-100! overflow-hidden max-w-[80vw] max-h-[80vh] will-change-[transform,opacity] rounded-4xl",
				)}
				style={{
					aspectRatio: `${aspectRatio} auto`,
					height: "auto",
					width: "100%",
				}}
			>
				<motion.img
					layoutId={`${name}-image`}
					src={src}
					alt={name}
					className="size-full object-cover"
					style={{ zIndex: baseZIndex + zStack.indexOf("image") }}
				/>
			</motion.div>
		</div>
	);
}
