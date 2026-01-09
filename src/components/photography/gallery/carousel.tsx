import { frame, motion, useMotionValue } from "motion/react";
import { Carousel as MotionCarousel } from "motion-plus/react";
import { twMerge } from "tailwind-merge";

import { useGalleryContext } from "./gallery-context";
import { Navigation } from "./navigation";

interface ThumbnailProps {
	id: number;
	src: string;
	name: string;
	aspectRatio: string;
}

function Thumbnail({ id, src, name, aspectRatio }: ThumbnailProps) {
	let { baseZIndex, zStack, setActiveIndex } = useGalleryContext();
	let zIndex = useMotionValue(0);
	let activeZIndex = baseZIndex + zStack.indexOf("thumbnail");

	return (
		<motion.li
			key={src}
			onTap={() => {
				frame.postRender(() => {
					setActiveIndex(id);
					zIndex.set(activeZIndex);
				});
			}}
			layoutId={name}
			onLayoutAnimationStart={() => zIndex.set(activeZIndex)}
			onLayoutAnimationComplete={() => zIndex.set(0)}
			className={twMerge(
				"overflow-hidden focus-visible:outline-none bg-muted",
				"flex justify-center place-items-center",
				"will-change-[transform,opacity] touch-none select-none",
				aspectRatio === "17/10" ? "col-span-2 aspect-17/10" : "aspect-4/5",
			)}
			style={{
				zIndex,
				height: aspectRatio === "17/10" ? "auto" : "100%",
				width: aspectRatio === "17/10" ? "100%" : "auto",
				borderRadius: 12,
			}}
		>
			<motion.img
				layoutId={`${name}-image`}
				src={src}
				alt={name}
				className="size-full object-cover"
			/>
		</motion.li>
	);
}

function Slide({ page = 0 }: { page: number }) {
	let { slides, currentPage } = useGalleryContext();
	let items = slides[page];

	return (
		<section
			className={twMerge(
				"grid grid-cols-3 grid-rows-2 gap-4 w-full cursor-pointer",
			)}
			style={{
				pointerEvents: page === currentPage ? "auto" : "none",
			}}
		>
			{items.map((item) => (
				<Thumbnail key={item.src} {...item} />
			))}
		</section>
	);
}

export function Carousel() {
	const { slides } = useGalleryContext();

	return (
		<MotionCarousel
			className="w-full relative [&_.ticker-item]:w-full scrollbar-hide"
			items={slides.map((_, index) => <Slide key={index} page={index} />)}
			gap={16}
			snap="page"
			loop={false}
		>
			<Navigation />
		</MotionCarousel>
	);
}
