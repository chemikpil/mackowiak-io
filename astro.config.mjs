// @ts-check
import path from "node:path";
import { fileURLToPath } from "node:url";
import node from "@astrojs/node";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
	output: "server",
	adapter: node({
		mode: "standalone",
	}),
	integrations: [react()],

	vite: {
		// @ts-ignore
		plugins: [tailwindcss()],
		resolve: {
			alias: [
				{
					find: "@",
					replacement: path.resolve(__dirname, "./src"),
				},
			],
		},
	},
});
