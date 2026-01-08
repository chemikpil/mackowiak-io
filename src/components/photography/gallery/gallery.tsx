import { AnimatePresence, MotionConfig, motion } from "motion/react";
import { useState } from "react";

import { slides } from "@/db/photos";
import { useEscToClose } from "@/hooks/use-esc-to-close";
import { Carousel } from "./carousel";
import { GalleryProvider } from "./gallery-context";

const baseZIndex = 2000;
const zStack = ["overlay", "thumbnail", "image"];

export function Gallery() {
	let [activeIndex, setActiveIndex] = useState<number | false>(false);

	useEscToClose(activeIndex !== false, () => setActiveIndex(false));

	let activeImage = slides.flat().find((item) => item.id === activeIndex);
	console.log(activeImage);

	return (
		<GalleryProvider
			value={{ baseZIndex, zStack, slides, activeIndex, setActiveIndex }}
		>
			<MotionConfig
				transition={{ type: "spring", bounce: 0.1, visualDuration: 0.3 }}
			>
				<Carousel />
				<AnimatePresence>
					{activeIndex !== false && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							key="overlay"
							onClick={() => setActiveIndex(false)}
							className="fixed inset-0 bg-background/90 flex pointer-events-none will-change-[opacity]"
							style={{ zIndex: baseZIndex + zStack.indexOf("overlay") }}
						/>
					)}
				</AnimatePresence>
			</MotionConfig>
		</GalleryProvider>
	);
}
