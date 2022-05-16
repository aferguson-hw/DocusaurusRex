/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  documentationSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Getting Started'
    }, 
    {
      type: 'doc',
      id: 'auth',
      label: 'Authorization'
    }, 
    {
      type: 'category',
      label: 'Content',
      items: [
        {
          type: 'doc',
          id: 'articles'
        },
        {
          type: 'doc',
          id: 'topics'
        }
      ]
    },
    {
      type: 'doc',
      id: 'localizations',
      label: 'Localizations'
    },
    {
      type: 'category',
      label: 'Tutorials',
      items: [
        {
          type: 'doc',
          id: 'how-to-find-content'
        },
        {
          type: 'doc',
          id: 'building-article-template'
        }
      ]
    },
  ],
  apiSidebar: ['api', 'authorization', 'content', 'search', 'taxonomy', 'triage']
  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};

module.exports = sidebars;
