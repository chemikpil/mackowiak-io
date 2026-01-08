import { frame, motion, useMotionValue } from "motion/react";
import { Carousel as MotionCarousel } from "motion-plus/react";
import { twMerge } from "tailwind-merge";

import { useGalleryContext } from "./gallery-context";
import { Navigation } from "./navigation";
import { Photo } from "./photo";

function Slide({ page = 0 }: { page: number }) {
	let { slides, baseZIndex, zStack, setActiveIndex } = useGalleryContext();
	let items = slides[page];
	let zIndex = useMotionValue(0);
	let activeZIndex = baseZIndex + zStack.indexOf("image");

	return (
		<section className="grid grid-cols-3 grid-rows-2 gap-4 w-full relative overflow-hidden cursor-pointer">
			{items.map((item) => (
				<motion.li
					key={item.name}
					onTap={() => {
						frame.postRender(() => {
							setActiveIndex(item.id);
							zIndex.set(activeZIndex);
						});
					}}
					layoutId={item.name}
					onLayoutAnimationStart={() => zIndex.set(activeZIndex)}
					onLayoutAnimationComplete={() => zIndex.set(0)}
					className={twMerge(
						"rounded-xl overflow-hidden focus-visible:outline-none relative bg-muted",
						"flex justify-center place-items-center",
						"will-change-[transform,opacity] touch-none select-none",
						item.className,
					)}
					style={{ zIndex }}
				>
					<Photo {...item} />
				</motion.li>
			))}
		</section>
	);
}

export function Carousel() {
	const { slides } = useGalleryContext();

	return (
		<MotionCarousel
			className="w-full relative [&_.ticker-item]:w-full"
			items={slides.map((_, index) => <Slide key={index} page={index} />)}
			gap={16}
			snap="page"
			loop={false}
		>
			<Navigation />
		</MotionCarousel>
	);
}
