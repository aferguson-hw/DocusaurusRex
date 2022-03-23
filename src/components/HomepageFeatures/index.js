import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
        ut labore et dolore magna aliqua. A scelerisque purus semper eget duis at tellus at urna. 
        Sit amet mattis vulputate enim nulla aliquet porttitor lacus. 
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Lectus proin nibh nisl condimentum id. Diam maecenas ultricies mi eget. 
        Libero volutpat sed cras ornare arcu dui. Eget nullam non nisi est sit. 
        Proin fermentum leo vel orci porta.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Nibh ipsum consequat nisl vel. Est placerat in egestas erat imperdiet sed euismod nisi. 
        Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Eget nullam non nisi est sit. 
        Proin fermentum leo vel orci porta.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="mig" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
