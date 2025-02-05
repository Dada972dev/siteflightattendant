import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: '🏛️ Welcome', // Fixed the label string by properly closing the quote
      items: [
        '🏛️intro/intro', // Properly formatted the item
      ],
    },
    {
      type: 'category',
      label: '🎓 The job', // Properly formatted label with a space
      items: [
        '💻developpement/💻developpement',
      ],
    },
  ],
};

export default sidebars;
