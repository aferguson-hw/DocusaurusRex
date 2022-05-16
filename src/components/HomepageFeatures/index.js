import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Authorization API',
    link: '/api/authorization',
    Svg: require('@site/static/img/auth.svg').default,
    description: (
      <>
        Implements the OAuth 2.0 authorization and controls access to the Healthwise APIs. Your application
        must have an access token from the Authorization API before that application can use any other 
        Healthwise APIs.
      </>
    ),
  },
  {
    title: 'Content API',
    link: '/api/content',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        You can request Healthwise content of various types using the Content API. 
      </>
    ),
  },
  {
    title: 'Search API',
    link: '/api/search',
    Svg: require('@site/static/img/search.svg').default,
    description: (
      <>
        Supports search interfaces based on keyword searches for articles and health
        concepts in the taxonomy. Results support faceted search interfaces. 
      </>
    ),
  },
  {
    title: 'Taxonomy API',
    link: '/api/taxonomy',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Provides a taxonomy of health concepts that organizes the content library. You can
        use the taxonomy for navigation interfaces and for integrating the Healthwise
        taxonomy into your taxonomy. 
      </>
    ),
  },
  {
    title: 'Triage API',
    link: '/api/triage',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Transactional-based, stateless service that provides access to symptom topics
        questions, definitions, and dispositions. 
      </>
    ),
  },
];

function Feature({Svg, title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="mig" />
      </div>
      <div className="text--center padding-horiz--md">
        <a href={link}>{title}</a>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
