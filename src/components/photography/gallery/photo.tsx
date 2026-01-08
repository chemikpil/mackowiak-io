type Photo = {
	name: string;
	image: string;
};

export function Photo({ name, image }: Photo) {
	return (
		<img
			src={image}
			alt={name}
			loading="lazy"
			className="size-full object-cover"
		/>
	);
}
