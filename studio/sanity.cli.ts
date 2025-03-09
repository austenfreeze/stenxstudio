import { defineCliConfig } from 'sanity/cli';


export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'exu6nklw',
    dataset: process.env.SANITY_STUDIO_DATASET || 'production',
    studiohost: 'stenxstudio',
  },
  autoUpdates: true,
});
