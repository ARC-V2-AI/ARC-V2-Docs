// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	 site: 'https://arc-v2-ai.github.io',
  base: '/ARC-V2-Docs',

	integrations: [
		starlight({
			title: 'ARC-V2 Documentation',
			description: 'Official documentation for the ARC-V2 ecosystem.',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/ARC-V2-AI' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
		}),
	],
});
