import { useEffect } from "react";

export function useEscToClose(isOpen: boolean, close: () => void) {
	useEffect(() => {
		function handleKeyDown(e: KeyboardEvent) {
			if (e.key === "Escape" && isOpen) {
				close();
			}
		}

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [isOpen, close]);
}
