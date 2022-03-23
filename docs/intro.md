---
sidebar_position: 1
---

# Documentation Overview

How does the sidebar work?

## Understanding the sidebar

In the root of the project you'll notice a file called sidebars.js. The overall strucutre of this file is:

```javascript
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
};
```

Our folder structure for this particular sidebar is:

```
- docs
  - tutorial-basics
  - tutorial-extras
  intro.md
```

The `autogenerated` type for the `tutorialSidebar` in `sidebars.js` indicates that the sidebar
will correspond to the folder structure for the project. 

## Nested Pages

Each folder in the docs directory corresponds to one of the collapsible items in the sidebar.
There is a `_category_.json` file in each that allows you to set the collapsible menu item's 
name and position in the overall sidebar.

```json
{
  "label": "Collapsible Sidebar Menu",
  "position": 2
}
```

Each md file internal to this folder corresponds to a page in that sidebar menu. You can organize
them by setting their `sidebar_position` in the document header information. 

```
---
sidebar_position: 1
---
```

The page name will correspond to either:
- The `title` value in the document header information
- The `# Header Value` for the document if a title is not present in the document header information

## Summary
Pretty cool huh?