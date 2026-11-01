// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  documentationSidebar: [
    {
      type: 'doc',
      id: 'documentation/index',
      label: 'Overview',
    },
    {
      type: 'doc',
      id: 'documentation/personas',
      label: 'Personas',
    },
    {
      type: 'doc',
      id: 'documentation/state-of-the-art',
      label: 'State of the Art',
    },
    {
      type: 'doc',
      id: 'documentation/use-cases',
      label: 'Use Cases',
    },
    {
      type: 'doc',
      id: 'documentation/requirements',
      label: 'Requirements',
    },
    {
      type: 'doc',
      id: 'documentation/architecture',
      label: 'Architecture',
    },
    {
      type: 'doc',
      id: 'documentation/mockups',
      label: 'UI Mockups',
    },
  ],
  minutesSidebar: [
    {
      type: 'doc',
      id: 'minutes/index',
      label: 'Overview',
    },
    {
      type: 'category',
      label: 'Advisors Minutes',
      collapsed: false,
      items: [
        'minutes/advisors/minute-01',
        'minutes/advisors/minute-03',
        'minutes/advisors/minute-05',
        'minutes/advisors/minute-06',
        'minutes/advisors/minute-07',
      ],
    },
    {
      type: 'category',
      label: 'Team Minutes',
      collapsed: false,
      items: [
        'minutes/team/minute-02',
        'minutes/team/minute-04',
      ],
    },
  ],
};

module.exports = sidebars;
