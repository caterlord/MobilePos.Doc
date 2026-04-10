import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

type ManualCard = {
  title: string;
  summary: string;
  links: Array<{
    label: string;
    to: string;
  }>;
};

type WorkflowLink = {
  title: string;
  description: string;
  to: string;
};

const manualCards: ManualCard[] = [
  {
    title: 'POS User Manual',
    summary:
      'Daily operating guidance for cashier, shift lead, and in-store teams during live service.',
    links: [
      {label: 'Quick Start', to: '/getting-started/quick-start-15-mins'},
      {label: 'Start Shift', to: '/client/start-shift'},
      {label: 'Checkout & Payments', to: '/client/checkout-and-payments'},
      {label: 'Refunds & Voids', to: '/client/refunds-and-voids'},
    ],
  },
  {
    title: 'HQ User Manual',
    summary:
      'Back-office guidance for managers and owners who maintain stores, menus, users, reports, and integrations.',
    links: [
      {label: 'HQ Overview', to: '/hq/overview'},
      {label: 'Making Safe HQ Changes', to: '/hq/making-safe-hq-changes'},
      {label: 'Store Settings', to: '/hq/store-settings/overview'},
      {label: 'Menu & Catalog', to: '/hq/menu-catalog/overview'},
      {label: 'Reports', to: '/hq/reports/overview'},
    ],
  },
  {
    title: 'MCP User Manual',
    summary:
      'Developer-facing documentation for teams integrating AI agents and tooling with the X1 platform.',
    links: [
      {label: 'MCP Overview', to: '/mcp/overview'},
      {label: 'Docs Repository', to: 'https://github.com/caterlord/MobilePos.Doc'},
      {label: 'Open Issues', to: 'https://github.com/caterlord/MobilePos.Doc/issues'},
      {label: 'Open Pull Requests', to: 'https://github.com/caterlord/MobilePos.Doc/pulls'},
    ],
  },
];

const workflowLinks: WorkflowLink[] = [
  {
    title: 'I need to run store operations',
    description:
      'Start with the POS guide for shift setup, ordering, payment handling, and closing procedures.',
    to: '/client/daily-operations',
  },
  {
    title: 'I need to configure HQ safely',
    description:
      'Start with the HQ guide for scope rules, store settings, users, reports, and menu maintenance.',
    to: '/hq/making-safe-hq-changes',
  },
  {
    title: 'I want to contribute to the docs',
    description:
      'Use the public GitHub repository to report gaps, suggest edits, or submit documentation pull requests.',
    to: 'https://github.com/caterlord/MobilePos.Doc',
  },
];

const contributionSteps = [
  'Open an issue for gaps, outdated behavior, or unclear steps.',
  'Fork the repository and make a focused change in your own branch.',
  'Submit a pull request with the related page update or screenshot change.',
  'Reference the issue so maintainers can review and merge faster.',
];

function ManualCard({
  title,
  summary,
  links,
}: ManualCard): ReactNode {
  return (
    <article className={styles.manualCard}>
      <Heading as="h2" className={styles.cardTitle}>
        {title}
      </Heading>
      <p className={styles.cardSummary}>{summary}</p>
      <ul className={styles.quickLinks}>
        {links.map((link) => (
          <li key={link.label}>
            <Link to={link.to}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="X1 platform documentation for store teams, HQ admins, and developers"
    >
      <main className={styles.page}>
        <section className={styles.heroSection}>
          <div className={`container ${styles.heroLayout}`}>
            <div className={styles.heroCopy}>
              <span className={styles.heroKicker}>X1 Platform Documentation</span>
              <Heading as="h1" className={styles.heroTitle}>
                Documentation for POS, HQ, and MCP.
              </Heading>
              <p className={styles.heroLead}>
                Start with the manual that matches your role, then move directly
                to the page you need. The site is organized for store teams, HQ
                admins, and developers working with the X1 platform.
              </p>
              <div className={styles.heroActions}>
                <Link className="button button--primary button--lg" to="/intro">
                  Get Started
                </Link>
                <Link className="button button--secondary button--lg" to="/hq/overview">
                  Browse HQ
                </Link>
              </div>
              <ul className={styles.signalList}>
                <li>Three manuals in one site: POS, HQ, and MCP.</li>
                <li>Task-first navigation with direct links into common workflows.</li>
                <li>Public GitHub repository for issues, edits, and pull requests.</li>
              </ul>
            </div>
            <div className={styles.heroPanel}>
              <div className={styles.panelBadge}>Start here</div>
              <Heading as="h2" className={styles.panelTitle}>
                Most common entry points
              </Heading>
              <div className={styles.panelLinks}>
                {workflowLinks.map((item) => (
                  <Link key={item.title} className={styles.panelLink} to={item.to}>
                    <strong>{item.title}</strong>
                    <span>{item.description}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={styles.manualsSection}>
          <div className="container">
            <div className={styles.sectionIntro}>
              <span className={styles.sectionKicker}>Choose Your Manual</span>
              <Heading as="h2" className={styles.sectionTitle}>
                Browse by manual
              </Heading>
              <p className={styles.sectionLead}>
                Each section below groups the most useful starting pages for a
                different kind of reader.
              </p>
            </div>
            <div className={styles.manualGrid}>
              {manualCards.map((card) => (
                <ManualCard key={card.title} {...card} />
              ))}
            </div>
          </div>
        </section>

        <section className={styles.contributionSection}>
          <div className={`container ${styles.contributionLayout}`}>
            <div className={styles.contributionCopy}>
              <span className={styles.sectionKicker}>Open Source Docs</span>
              <Heading as="h2" className={styles.sectionTitle}>
                Improve the manual with the standard public GitHub workflow.
              </Heading>
              <p className={styles.sectionLead}>
                The documentation repository is public. If you spot a gap, want
                to improve wording, or need a missing screenshot documented, you
                can report it or submit a change directly through GitHub.
              </p>
              <div className={styles.contributionActions}>
                <Link
                  className="button button--primary button--lg"
                  to="https://github.com/caterlord/MobilePos.Doc"
                >
                  View Repository
                </Link>
                <Link
                  className="button button--outline button--primary button--lg"
                  to="https://github.com/caterlord/MobilePos.Doc/issues"
                >
                  Submit an Issue
                </Link>
              </div>
            </div>
            <div className={styles.contributionCard}>
              <Heading as="h3" className={styles.contributionTitle}>
                Contribution flow
              </Heading>
              <ol className={styles.contributionSteps}>
                {contributionSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
              <div className={styles.inlineLinks}>
                <Link to="https://github.com/caterlord/MobilePos.Doc/pulls">
                  View pull requests
                </Link>
                <Link to="https://github.com/caterlord/MobilePos.Doc/issues/new">
                  Open a new issue
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
