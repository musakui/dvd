import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'

const favicon = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>📀</text></svg>`

export default defineConfig({
  base: '/dvd/',
	plugins: [
		createHtmlPlugin({
			minify: true,
			inject: {
				data: {
					favicon,
				},
			},
		}),
	],
	build: {
		chunkSizeWarningLimit: 800,
	},
})