---
sidebar_position: 2
title: Article Templates
slug: /tutorials/article-templates
---

## Building a Basic Template for Articles
In order to build a template for an article, the first thing you need to do is request an article from the Content API. An example request: `https://content.healthwise.net/articles/cpain/en-us`.

### The Data
Based on the above request, here is a simplified look at the response message that you will be using as the raw materials to populate your article template.

```json
{
    "status": 200,
    "links": {...},
    "data": {
        ...
        "resources": {
            "css": [ JSON ],
            "javascript": [ JSON ],
            "inline": "Javascript as a string"
        },
        "title": {
            "consumer": "Chronic Pain",
            "englishConsumer": "Chronic Pain"
        },
        "abstract": { JSON },
        "legal": {
            "logo": "HTML as a string",
            "copyright": "HTML as a string",
            "disclaimer": "HTML as a string"
        },
        "navigation": { "html": "HTML as a string" },
        "credits": { JSON },
        "pageTemplate": "HTML as a string",
        "topics": [
            {
                "id": "tr2757",
                "title": { "consumer": "Topic Overview" },
                "lang": "en-us",
                "navigable": true,
                "type": "HwSectionOverview",
                "html": "HTML as a string"
            }
        ],
        "worksConsulted": [ JSON ],
        "consumerResources": [ JSON ],
        "relatedTopics": [ JSON ]
    }
}
```

## Article Template
The response message provides discrete components that you can incorporate into your page template. 

Key Components:
- The title of the article (data.title.consumer)
- An optional navigation bar (data.navigation)
- An array of topics constituting the body of the article (data.topics[n].html)
- Credits for the medical reviewers (data.credits)
- Legal terms of use and disclaimers (data.legal)

## Usage compliance
For your implementation to meet Healthwise compliance requirements, you must include all of these components in your page. Each of these components is either a JSON object or an HTML string. Use the features of your templating languate to embed the parts into your page.

## A compliant example
The following code sample shows a fully compliant HTML template incorporating Bootstrap styling for layout.

```html
<article>
    <div class="row">
        <div class="col-md-9">
            <!-- the title of the  document -->
            <h1>  {{article.data.title.consumer}} </h1>
            <!-- These are the topics found in the article.data.topics object.
                    The links in each topic must be modified before they are so they
                    match your application's URL pattern. -->

            {% for topic in topics %}
            <div> {{topic}}  </div>
            {% endfor %}

            {% if article.data.transcript %}
            <h3>Video Transscript</h3>
            {{article.data.transcript.html}}
            {% endif %}
            <!-- the credits -->
            <div class="row">
                <div>
                    <p><label>Author:</label> {{article.data.credits.author.name}}</p>
                    <p><label> Reviewers:</label></p>
                    <ul>
                        {% for reviewer in article.data.credits.primaryReviewers %}
                        <li><a href="{{reviewer.profileId}}">{{reviewer.name}}</a></li>
                        {% endfor %}

                        {% for reviewer in article.data.credits.secondaryReviewers %}
                        <li><a href="{{reviewer.profileId}}">{{reviewer.name}}</a></li>
                        {% endfor %}
                    </ul>
                </div>
            </div>
            <hr/>
            <!-- copyright and disclaimer -->
            <div class="row">
                <div class="col-md-2">{{article.data.legal.logo|safe}}</div>
                <div class="col-md-10">
                    <div class="row">{{article.data.legal.disclaimer}}</div>
                    <div class="row">{{article.data.legal.copyright}}</div>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <!-- the navigation bar -->
            <!-- the links in the navigation bar need to be transformed to match 
                    the URL pattern of your application.  -->
            <div> {{navigation}} </div>
        </div>
    </div>
</article>
```

## Hyperlinks in Articles
The articles contain links to other articles and supporting documents. Consider the following guidelines for managing links in each area of an article
- You must modify the href attribute of each anchor tag in each topic to work with the URL pattern of your application
- You do not need to modify the links in the navigation stack (or bar) because these only link to anchors within the same article
- The links in the legal area reference a fully qualified domain at Healthwise and work as delivered
- The credits area provides links from the name of the reviewer to their profile

## Displaying content in modal windows
Definitions and MultiMedia document types are short and supplementary content and commonly appear as modal windows. Presenting these documents as modal windows lets the users focus on the article without transitioning the page. You can identify the document type from the data-document-type attribute on the anchor tag. The following code sample shows the anchor tag for a definition document. Line breaks were added for readability.

```html
<a class="HwLinkDefinition" 
    data-hwid="sti150867" 
    href="document/sti150867/sti150867-sec" 
    data-document-type="Definition" 
    data-document-href="sti150867" 
    data-section-href="sti150867-sec">
    <span class="HwLinkText">immune system</span>
</a>
```

Complete the following steps to present content in a modal window
- Add JavaScript that detects when a user selects a link to a Definition or MultiMedia document type
- Request the Definition or MultiMedia article from the Content API
- Use your CSS framework to present the Definition or MultiMedia article in a modal window