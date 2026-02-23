import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: string;
  to: string;
  cta: string;
};

const featureList: FeatureItem[] = [
  {
    title: 'Client POS Operations',
    description:
      'Cashier and in-store workflows: start shift, sales, payment handling, void/refund, and end of day.',
    to: '/client/overview',
    cta: 'Open Client Docs',
  },
  {
    title: 'Multilingual Manual',
    description:
      'The manual is configured for English, zh-HK, and zh-CN with a locale switcher in the top bar.',
    to: '/intro',
    cta: 'View Language Setup',
  },
  {
    title: 'HQ Back Office (WIP)',
    description:
      'HQ documentation is reserved while HQ features are still evolving. Client docs are the first release focus.',
    to: '/hq/overview',
    cta: 'Check HQ Status',
  },
];

function FeatureCard({title, description, to, cta}: FeatureItem): ReactNode {
  return (
    <article className={clsx('col col--4', styles.cardWrap)}>
      <div className={styles.card}>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <Link className="button button--outline button--primary" to={to}>
          {cta}
        </Link>
      </div>
    </article>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {featureList.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
