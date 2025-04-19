import { defineIntegration } from "astro-integration-kit";
import { astroAsides, astroDirectivesRestorationIntegration } from "./asides.ts";

export const integration = defineIntegration({
	name: "astro-asides",
	setup() {
		return {
			hooks: {
        'astro:config:setup': ({ updateConfig }) => {
          updateConfig({
            markdown: {
              remarkPlugins: [astroAsides()],
            },
          });
        }
      },
      integrations: [astroDirectivesRestorationIntegration()],
		};
	},
});
