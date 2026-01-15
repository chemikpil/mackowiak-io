import { frame, motion } from "motion/react";
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
	const { baseZIndex, zStack, setActiveIndex, activeIndex } =
		useGalleryContext();

	return (
		<motion.div
			key={`${name}-wrapper`}
			onTap={() => {
				frame.postRender(() => {
					onClick();
				});
			}}
			className="fixed inset-0 flex justify-center place-items-center py-24 px-10"
			style={{ zIndex: baseZIndex + zStack.indexOf("image") }}
		>
			<motion.div
				layoutId={name}
				initial={{
					borderRadius: 12,
					opacity: 1,
				}}
				animate={{
					borderRadius: 32,
					opacity: 1,
				}}
				exit={{
					borderRadius: 12,
					opacity: 0,
					transition: {
						delay: 0.28,
					},
				}}
				className={twMerge(
					"overflow-hidden will-change-[transform,opacity] rounded-4xl",
					"portrait:w-full portrait:h-auto landscape:h-full landscape:w-auto",
				)}
				style={{
					aspectRatio,
					maxWidth:
						aspectRatio === "17/10"
							? "calc(100vw * 17 / 10)"
							: "calc(100vw * 4 / 5)",
					maxHeight:
						aspectRatio === "17/10"
							? "calc(100vw * 10 / 17)"
							: "calc(100vw * 5 / 4)",
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
		</motion.div>
	);
}
