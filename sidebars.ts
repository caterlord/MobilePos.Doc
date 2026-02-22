import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  manualSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Start Here',
      items: [
        'getting-started/quick-start-15-mins',
        'getting-started/first-time-initialization',
        'getting-started/access-and-navigation',
        'getting-started/navigation-and-modules',
        'getting-started/roles-and-permissions',
      ],
    },
    {
      type: 'category',
      label: 'Run a Shift',
      items: [
        'client/daily-operations',
        'client/start-shift',
        'client/sales-flow',
        'client/checkout-and-payments',
        'client/payment-errors-and-retry',
        'client/refunds-and-voids',
        'client/end-of-day',
      ],
    },
    {
      type: 'category',
      label: 'Screen Guides',
      items: [
        'client/overview',
        'client/orders-overview',
        'client/online-orders',
        'client/inventory',
        'client/devices',
        'client/reports',
        'client/more-tools',
        'client/settings',
        'client/info',
      ],
    },
    {
      type: 'category',
      label: 'Function Guides',
      items: [
        'functions/overview',
        {
          type: 'category',
          label: 'Ordering',
          items: [
            'functions/sign-in',
            'functions/apply-discount',
            'functions/apply-service-charge',
            'functions/change-table',
            'functions/to-dine-in-to-takeaway',
            'functions/split-merge-transaction',
            'functions/member-login',
          ],
        },
        {
          type: 'category',
          label: 'Checkout and Completed Orders',
          items: [
            'functions/take-payment',
            'functions/void-vs-return',
            'functions/reopen-order',
            'functions/reprint-receipt',
          ],
        },
        {
          type: 'category',
          label: 'Devices and More Tools',
          items: [
            'functions/add-printer',
            'functions/pay-in-pay-out',
            'functions/day-end',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'HQ (Back Office, WIP)',
      items: ['hq/overview'],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        'reference/function-feature-map',
        'reference/terminology',
        'reference/troubleshooting',
        'reference/version-notes',
      ],
    },
  ],
};

export default sidebars;
