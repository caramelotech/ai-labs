import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://caramelotech.github.io",
  base: "/ai-labs",
  integrations: [
    starlight({
      title: "Caramelo Tech",
      customCss: ["./src/styles/custom.css"],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/caramelotech",
        },
        {
          icon: "linkedin",
          label: "LinkedIn",
          href: "https://www.linkedin.com/company/caramelotech/",
        },
        {
          icon: "instagram",
          label: "Instagram",
          href: "https://www.instagram.com/caramelo_tech/",
        },
      ],
      defaultLocale: "root",
      locales: {
        root: { label: "Português", lang: "pt-BR" },
      },
      sidebar: [
        {
          label: "Fundamentos",
          autogenerate: { directory: "fundamentos" },
        },
        {
          label: "LLM",
          autogenerate: { directory: "llm" },
        },
        {
          label: "Engenharia de Prompt",
          autogenerate: { directory: "engenharia-de-prompt" },
        },
        {
          label: "Agents",
          autogenerate: { directory: "agents" },
        },
        {
          label: "Full Cycle IA Tech Week",
          autogenerate: { directory: "full-cycle-IA-tech-week" },
        },
        { label: "Recursos", slug: "recursos" },
      ],
    }),
  ],
});
