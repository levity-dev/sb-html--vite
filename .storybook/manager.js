import { addons } from '@storybook/manager-api';
 
addons.setConfig({
  sidebar: {
    collapsedRoots: ["global", "*"],
    showRoots: false,
  },
});