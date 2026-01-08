import { Carousel as MotionCarousel } from "motion-plus/react";
import { twMerge } from "tailwind-merge";

import { slides } from "@/db/photos";
import { Navigation } from "./navigation";
import { Photo } from "./photo";

type SlideItem = {
	name: string;
	className: string;
	image: string;
};

function Slide({ items }: { items: SlideItem[] }) {
	return (
		<section className="grid grid-cols-3 grid-rows-2 gap-4 w-full relative overflow-hidden">
			{items.map((item) => (
				<li
					key={item.name}
					className={twMerge("rounded-xl overflow-hidden", item.className)}
				>
					<Photo {...item} />
				</li>
			))}
		</section>
	);
}

export function Gallery() {
	return (
		<MotionCarousel
			className="w-full relative [&_.ticker-item]:w-full"
			items={slides.map((slide, index) => <Slide key={index} items={slide} />)}
			gap={16}
			snap="page"
			loop={false}
		>
			<Navigation />
		</MotionCarousel>
	);
}
