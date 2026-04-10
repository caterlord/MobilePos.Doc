import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

type ManualCard = {
  eyebrow: string;
  title: string;
  summary: string;
  audience: string;
  to: string;
  cta: string;
  quickLinks: Array<{
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
    eyebrow: 'Store teams',
    title: 'POS User Manual',
    summary:
      'Daily operating guidance for cashier, shift lead, and in-store teams during live service.',
    audience:
      'Use this if you need help with sign-in, sales flow, payment, refunds, devices, and day-end.',
    to: '/intro',
    cta: 'Open POS Manual',
    quickLinks: [
      {label: 'Quick Start', to: '/getting-started/quick-start-15-mins'},
      {label: 'Start Shift', to: '/client/start-shift'},
      {label: 'Checkout & Payments', to: '/client/checkout-and-payments'},
    ],
  },
  {
    eyebrow: 'HQ admins',
    title: 'HQ User Manual',
    summary:
      'Back-office guidance for managers and owners who maintain stores, menus, users, reports, and integrations.',
    audience:
      'Use this if you work in HQ and need step-by-step instructions with scope, verification, and escalation guidance.',
    to: '/hq/overview',
    cta: 'Open HQ Manual',
    quickLinks: [
      {label: 'HQ Overview', to: '/hq/overview'},
      {label: 'Store Settings', to: '/hq/store-settings/overview'},
      {label: 'Menu & Catalog', to: '/hq/menu-catalog/overview'},
    ],
  },
  {
    eyebrow: 'Developers and integrators',
    title: 'MCP User Manual',
    summary:
      'Developer-facing documentation for teams integrating AI agents and tooling with the X1 platform.',
    audience:
      'Use this if you are building workflows, automations, or integrations against the MCP layer.',
    to: '/mcp/overview',
    cta: 'Open MCP Manual',
    quickLinks: [
      {label: 'MCP Overview', to: '/mcp/overview'},
      {label: 'Docs Repository', to: 'https://github.com/caterlord/MobilePos.Doc'},
      {label: 'Report an Issue', to: 'https://github.com/caterlord/MobilePos.Doc/issues'},
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
  'Open an issue if you found a documentation gap, outdated behavior, or unclear instruction.',
  'Fork the repository and make your change in a focused branch if you want to propose a fix directly.',
  'Submit a pull request with the page update, screenshot change, or wording improvement.',
  'Reference the related issue so maintainers can review the context and merge the update faster.',
];

function ManualCard({
  eyebrow,
  title,
  summary,
  audience,
  to,
  cta,
  quickLinks,
}: ManualCard): ReactNode {
  return (
    <article className={styles.manualCard}>
      <div className={styles.cardHeader}>
        <span className={styles.eyebrow}>{eyebrow}</span>
        <Heading as="h2" className={styles.cardTitle}>
          {title}
        </Heading>
      </div>
      <p className={styles.cardSummary}>{summary}</p>
      <p className={styles.cardAudience}>{audience}</p>
      <div className={styles.cardActions}>
        <Link className="button button--primary button--lg" to={to}>
          {cta}
        </Link>
      </div>
      <ul className={styles.quickLinks}>
        {quickLinks.map((link) => (
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
                Find the right manual fast, then move straight into the task.
              </Heading>
              <p className={styles.heroLead}>
                This site now covers live POS operations, HQ back-office work, and
                MCP integration guidance. Pick the manual that matches your role,
                then jump directly to the workflow you need.
              </p>
              <div className={styles.heroActions}>
                <Link className="button button--primary button--lg" to="/intro">
                  Start With POS
                </Link>
                <Link className="button button--secondary button--lg" to="/hq/overview">
                  Open HQ Guide
                </Link>
              </div>
              <ul className={styles.signalList}>
                <li>Three manuals in one site: POS, HQ, and MCP.</li>
                <li>Written for operators, managers, admins, and developers.</li>
                <li>Public repository with issue tracking and contribution workflow.</li>
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
                Each entry point is organized around a different kind of work.
              </Heading>
              <p className={styles.sectionLead}>
                Use the manual cards below when you know your role. Each card
                includes the best first pages to reduce navigation time.
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
                can report it or submit a change directly.
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
