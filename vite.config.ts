import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
		  'skeleton-v2': '/node_modules/skeleton-v2', // Alias for Skeleton v2
		},
	  },
});
