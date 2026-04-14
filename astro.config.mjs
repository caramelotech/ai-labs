import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://caramelotech.github.io',
  base: '/ai-labs',
  integrations: [
    starlight({
      title: 'AI Labs',
      customCss: ['./src/styles/custom.css'],
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/caramelotech/ai-labs',
        },
      ],
      defaultLocale: 'root',
      locales: {
        root: { label: 'Português', lang: 'pt-BR' },
      },
    }),
  ],
});
