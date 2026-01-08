import { slides } from "@/db/photos";
import { createContext } from "@/lib/create-context";

export const [GalleryProvider, useGalleryContext] = createContext<{
    baseZIndex: number;
	zStack: string[];
	slides: typeof slides;
    activeIndex: number | false;
    setActiveIndex: (index: number | false) => void;
}>({
    name: "GalleryContext",
    strict: true,
    errorMessage:
        "useGalleryContext: `context` is undefined. Seems you forgot to wrap component within <Gallery />",
});