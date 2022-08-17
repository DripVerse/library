import { defineClientConfig } from "@vuepress/client";
import { setupPWA } from "/Users/ani/Documents/acyclic/apps/dripverse/library/node_modules/vuepress-plugin-pwa2/lib/client/composables/setup";
import SWUpdatePopup from "/Users/ani/Documents/acyclic/apps/dripverse/library/node_modules/vuepress-plugin-pwa2/lib/client/components/SWUpdatePopup";


export default defineClientConfig({
  setup: () => {
    setupPWA();
  },
  rootComponents: [
    SWUpdatePopup,
    
  ],
});