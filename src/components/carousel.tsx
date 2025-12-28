import { ArrowLeft01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { motion } from "motion/react";
import {
	Carousel as MotionCarousel,
	useCarousel as useMotionCarousel,
} from "motion-plus/react";

import { Button } from "@/components/ui/button";

function Navigation() {
	const { currentPage, totalPages, nextPage, prevPage, gotoPage } =
		useMotionCarousel();

	return (
		<div className="flex place-items-center gap-4 mx-auto px-4 py-3 bg-muted rounded-2xl w-fit">
			<Button
				variant="ghost"
				size="icon-md"
				onClick={prevPage}
				isDisabled={currentPage === 0}
			>
				<HugeiconsIcon icon={ArrowLeft01Icon} size={24} />
			</Button>

			<div className="flex gap-2">
				{Array.from({ length: totalPages }).map((_, index) => (
					<motion.div
						// biome-ignore lint/suspicious/noArrayIndexKey: use simple index
						key={index}
						className="size-2 bg-muted-foreground rounded-full cursor-pointer transition-colors will-change-transform data-[active=true]:bg-foreground data-[active=true]:w-4 hover:bg-foreground/60"
						data-active={currentPage === index}
						onClick={() => gotoPage(index)}
						whileHover={{ scale: 1.2 }}
						whileTap={{ scale: 0.9 }}
						style={{ borderRadius: 8 }}
						layout
					/>
				))}
			</div>

			<Button
				variant="ghost"
				size="icon-md"
				onClick={nextPage}
				isDisabled={currentPage === totalPages - 1}
			>
				<HugeiconsIcon icon={ArrowRight01Icon} size={24} />
			</Button>
		</div>
	);
}

type SlideItem = {
	name: string;
	className: string;
};

function Slide({ items }: { items: SlideItem[] }) {
	return (
		<section className="grid grid-cols-3 grid-rows-2 gap-4 w-full relative">
			{items.map((item) => (
				<div
					key={item.name}
					className={`rounded-xl bg-muted ${item.className}`}
				/>
			))}
		</section>
	);
}

export function Carousel() {
	let slides = [
		[
			{ name: "1", className: "aspect-4/5" },
			{ name: "2", className: "aspect-17/10 col-span-2" },
			{ name: "3", className: "aspect-17/10 col-span-2" },
			{ name: "4", className: "aspect-4/5" },
		],
		[
			{ name: "1", className: "aspect-4/5" },
			{ name: "2", className: "aspect-4/5" },
			{ name: "3", className: "aspect-4/5" },
			{ name: "4", className: "aspect-4/5" },
			{ name: "5", className: "aspect-4/5" },
			{ name: "6", className: "aspect-4/5" },
		],
		[
			{ name: "1", className: "aspect-4/5" },
			{ name: "2", className: "aspect-17/10 col-span-2" },
			{ name: "4", className: "aspect-4/5" },
			{ name: "5", className: "aspect-4/5" },
			{ name: "6", className: "aspect-4/5" },
		],
	];

	return (
		<MotionCarousel
			className="w-full relative [&_.ticker-item]:w-full"
			items={slides.map((slide, index) => (
				// biome-ignore lint/suspicious/noArrayIndexKey: use simple index
				<Slide key={index} draggable={false} items={slide} />
			))}
			gap={16}
			snap="page"
			loop={false}
		>
			<Navigation />
		</MotionCarousel>
	);
}
