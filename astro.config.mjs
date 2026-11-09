// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages project-site URL for ARC-V2-Docs.
  site: 'https://arc-v2-ai.github.io',
  base: '/ARC-V2-Docs',

  integrations: [
    starlight({
      title: 'ARC V2 Documentation',
      description:
        'Official documentation for the ARC-V2 ecosystem.',

      logo: {
        src: './src/assets/arc-mark.svg',
        alt: 'ARC V2',
      },
      favicon: '/favicon.svg',

      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/ARC-V2-AI',
        },
      ],

      // Generates direct links to edit documentation pages in the docs repo.
      editLink: {
        baseUrl: 'https://github.com/ARC-V2-AI/ARC-V2-Docs/edit/main/',
      },

      lastUpdated: true,
      customCss: ['./src/styles/arc-theme.css'],

      // Keep the framing of code blocks crisp and consistent with the site.
      expressiveCode: {
        styleOverrides: {
          borderRadius: '3px',
        },
      },
    }),
  ],
});
