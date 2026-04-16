import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
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
  const t = (id: string, message: string, description?: string) =>
    translate({id, message, description});

  const manualCards: ManualCard[] = [
    {
      title: t(
        'homepage.manual.pos.title',
        'POS User Manual',
        'Title for the POS manual card on the landing page',
      ),
      summary: t(
        'homepage.manual.pos.summary',
        'Daily operating guidance for cashier, shift lead, and in-store teams during live service.',
        'Summary for the POS manual card on the landing page',
      ),
      links: [
        {label: t('homepage.manual.pos.link.quickStart', 'Quick Start'), to: '/getting-started/quick-start-15-mins'},
        {label: t('homepage.manual.pos.link.startShift', 'Start Shift'), to: '/client/start-shift'},
        {label: t('homepage.manual.pos.link.checkout', 'Checkout & Payments'), to: '/client/checkout-and-payments'},
        {label: t('homepage.manual.pos.link.refunds', 'Refunds & Voids'), to: '/client/refunds-and-voids'},
      ],
    },
    {
      title: t(
        'homepage.manual.hq.title',
        'HQ User Manual',
        'Title for the HQ manual card on the landing page',
      ),
      summary: t(
        'homepage.manual.hq.summary',
        'Back-office guidance for managers and owners who maintain stores, menus, users, reports, and integrations.',
        'Summary for the HQ manual card on the landing page',
      ),
      links: [
        {label: t('homepage.manual.hq.link.overview', 'HQ Overview'), to: '/hq/overview'},
        {label: t('homepage.manual.hq.link.safeChanges', 'Making Safe HQ Changes'), to: '/hq/making-safe-hq-changes'},
        {label: t('homepage.manual.hq.link.storeSettings', 'Store Settings'), to: '/hq/store-settings/overview'},
        {label: t('homepage.manual.hq.link.menuCatalog', 'Menu & Catalog'), to: '/hq/menu-catalog/overview'},
        {label: t('homepage.manual.hq.link.reports', 'Reports'), to: '/hq/reports/overview'},
      ],
    },
    {
      title: t(
        'homepage.manual.mcp.title',
        'MCP User Manual',
        'Title for the MCP manual card on the landing page',
      ),
      summary: t(
        'homepage.manual.mcp.summary',
        'Developer-facing documentation for teams integrating AI agents and tooling with the X1 platform.',
        'Summary for the MCP manual card on the landing page',
      ),
      links: [
        {label: t('homepage.manual.mcp.link.overview', 'MCP Overview'), to: '/mcp/overview'},
        {label: t('homepage.manual.mcp.link.repo', 'Docs Repository'), to: 'https://github.com/caterlord/X1.Doc'},
        {label: t('homepage.manual.mcp.link.issues', 'Open Issues'), to: 'https://github.com/caterlord/X1.Doc/issues'},
        {label: t('homepage.manual.mcp.link.prs', 'Open Pull Requests'), to: 'https://github.com/caterlord/X1.Doc/pulls'},
      ],
    },
  ];

  const workflowLinks: WorkflowLink[] = [
    {
      title: t(
        'homepage.workflow.storeOps.title',
        'I need to run store operations',
        'Title for the store operations shortcut on the landing page',
      ),
      description: t(
        'homepage.workflow.storeOps.description',
        'Start with the POS guide for shift setup, ordering, payment handling, and closing procedures.',
        'Description for the store operations shortcut on the landing page',
      ),
      to: '/client/daily-operations',
    },
    {
      title: t(
        'homepage.workflow.hq.title',
        'I need to configure HQ safely',
        'Title for the HQ shortcut on the landing page',
      ),
      description: t(
        'homepage.workflow.hq.description',
        'Start with the HQ guide for scope rules, store settings, users, reports, and menu maintenance.',
        'Description for the HQ shortcut on the landing page',
      ),
      to: '/hq/making-safe-hq-changes',
    },
    {
      title: t(
        'homepage.workflow.docs.title',
        'I want to contribute to the docs',
        'Title for the documentation contribution shortcut on the landing page',
      ),
      description: t(
        'homepage.workflow.docs.description',
        'Use the public GitHub repository to report gaps, suggest edits, or submit documentation pull requests.',
        'Description for the documentation contribution shortcut on the landing page',
      ),
      to: 'https://github.com/caterlord/X1.Doc',
    },
  ];

  const contributionSteps = [
    t(
      'homepage.contribution.steps.issue',
      'Open an issue for gaps, outdated behavior, or unclear steps.',
      'First contribution step on the landing page',
    ),
    t(
      'homepage.contribution.steps.fork',
      'Fork the repository and make a focused change in your own branch.',
      'Second contribution step on the landing page',
    ),
    t(
      'homepage.contribution.steps.pr',
      'Submit a pull request with the related page update or screenshot change.',
      'Third contribution step on the landing page',
    ),
    t(
      'homepage.contribution.steps.reference',
      'Reference the issue so maintainers can review and merge faster.',
      'Fourth contribution step on the landing page',
    ),
  ];

  return (
    <Layout
      title={siteConfig.title}
      description={t(
        'homepage.meta.description',
        'X1 platform documentation for store teams, HQ admins, and developers',
        'Meta description for the landing page',
      )}
    >
      <main className={styles.page}>
        <section className={styles.heroSection}>
          <div className={`container ${styles.heroLayout}`}>
            <div className={styles.heroCopy}>
              <span className={styles.heroKicker}>
                <Translate
                  id="homepage.hero.kicker"
                  description="Kicker text above the landing page hero title"
                >
                  X1 Platform Documentation
                </Translate>
              </span>
              <Heading as="h1" className={styles.heroTitle}>
                <Translate
                  id="homepage.hero.title"
                  description="Hero title on the landing page"
                >
                  Documentation for POS, HQ, and MCP.
                </Translate>
              </Heading>
              <p className={styles.heroLead}>
                <Translate
                  id="homepage.hero.lead"
                  description="Hero lead paragraph on the landing page"
                >
                  Start with the manual that matches your role, then move directly to the page you need. The site is organized for store teams, HQ admins, and developers working with the X1 platform.
                </Translate>
              </p>
              <div className={styles.heroActions}>
                <Link className="button button--primary button--lg" to="/intro">
                  <Translate
                    id="homepage.hero.primaryCta"
                    description="Primary call-to-action button on the landing page hero"
                  >
                    Get Started
                  </Translate>
                </Link>
                <Link className="button button--secondary button--lg" to="/hq/overview">
                  <Translate
                    id="homepage.hero.secondaryCta"
                    description="Secondary call-to-action button on the landing page hero"
                  >
                    Browse HQ
                  </Translate>
                </Link>
              </div>
              <ul className={styles.signalList}>
                <li>
                  <Translate
                    id="homepage.hero.signal.one"
                    description="First hero signal bullet on the landing page"
                  >
                    Three manuals in one site: POS, HQ, and MCP.
                  </Translate>
                </li>
                <li>
                  <Translate
                    id="homepage.hero.signal.two"
                    description="Second hero signal bullet on the landing page"
                  >
                    Task-first navigation with direct links into common workflows.
                  </Translate>
                </li>
                <li>
                  <Translate
                    id="homepage.hero.signal.three"
                    description="Third hero signal bullet on the landing page"
                  >
                    Public GitHub repository for issues, edits, and pull requests.
                  </Translate>
                </li>
              </ul>
            </div>
            <div className={styles.heroPanel}>
              <div className={styles.panelBadge}>
                <Translate
                  id="homepage.panel.badge"
                  description="Badge text on the landing page quick-links panel"
                >
                  Start here
                </Translate>
              </div>
              <Heading as="h2" className={styles.panelTitle}>
                <Translate
                  id="homepage.panel.title"
                  description="Title on the landing page quick-links panel"
                >
                  Most common entry points
                </Translate>
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
              <span className={styles.sectionKicker}>
                <Translate
                  id="homepage.manualSection.kicker"
                  description="Kicker above the manual cards section on the landing page"
                >
                  Choose Your Manual
                </Translate>
              </span>
              <Heading as="h2" className={styles.sectionTitle}>
                <Translate
                  id="homepage.manualSection.title"
                  description="Title above the manual cards section on the landing page"
                >
                  Browse by manual
                </Translate>
              </Heading>
              <p className={styles.sectionLead}>
                <Translate
                  id="homepage.manualSection.lead"
                  description="Lead paragraph above the manual cards section on the landing page"
                >
                  Each section below groups the most useful starting pages for a different kind of reader.
                </Translate>
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
              <span className={styles.sectionKicker}>
                <Translate
                  id="homepage.contribution.kicker"
                  description="Kicker above the contribution section on the landing page"
                >
                  Open Source Docs
                </Translate>
              </span>
              <Heading as="h2" className={styles.sectionTitle}>
                <Translate
                  id="homepage.contribution.title"
                  description="Title above the contribution section on the landing page"
                >
                  Improve the manual with the standard public GitHub workflow.
                </Translate>
              </Heading>
              <p className={styles.sectionLead}>
                <Translate
                  id="homepage.contribution.lead"
                  description="Lead paragraph above the contribution section on the landing page"
                >
                  The documentation repository is public. If you spot a gap, want to improve wording, or need a missing screenshot documented, you can report it or submit a change directly through GitHub.
                </Translate>
              </p>
              <div className={styles.contributionActions}>
                <Link
                  className="button button--primary button--lg"
                  to="https://github.com/caterlord/X1.Doc"
                >
                  <Translate
                    id="homepage.contribution.primaryCta"
                    description="Primary call-to-action button in the contribution section"
                  >
                    View Repository
                  </Translate>
                </Link>
                <Link
                  className="button button--outline button--primary button--lg"
                  to="https://github.com/caterlord/X1.Doc/issues"
                >
                  <Translate
                    id="homepage.contribution.secondaryCta"
                    description="Secondary call-to-action button in the contribution section"
                  >
                    Submit an Issue
                  </Translate>
                </Link>
              </div>
            </div>
            <div className={styles.contributionCard}>
              <Heading as="h3" className={styles.contributionTitle}>
                <Translate
                  id="homepage.contribution.cardTitle"
                  description="Title for the contribution steps card on the landing page"
                >
                  Contribution flow
                </Translate>
              </Heading>
              <ol className={styles.contributionSteps}>
                {contributionSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
              <div className={styles.inlineLinks}>
                <Link to="https://github.com/caterlord/X1.Doc/pulls">
                  <Translate
                    id="homepage.contribution.inline.pullRequests"
                    description="Inline link label to view pull requests in the contribution card"
                  >
                    View pull requests
                  </Translate>
                </Link>
                <Link to="https://github.com/caterlord/X1.Doc/issues/new">
                  <Translate
                    id="homepage.contribution.inline.newIssue"
                    description="Inline link label to open a new issue in the contribution card"
                  >
                    Open a new issue
                  </Translate>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
