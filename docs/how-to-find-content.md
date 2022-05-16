---
sidebar-position: 1
title: Finding Articles & Topics
slug: /tutorials/finding-content
---

## How to find all the articles and topics
There are two ways to get all the articles and topics. Both work, but each has different advantages.

### Content Service
The first approach is to use the Content Service. There are two endpoints that will get you topics and articles.

`https://content.healthwise.net/topics` gets you a collection of topics that you can loop through.

`https://content.healthwise.net/articles` gets you a collection of articles that you can loop through.

These Content Service endpoints are the more straightforward approach. However, these endpoints don't provide any information about the organization of these articles and topics. They are simply items in a collection.

### Taxonomy API
The second approach is to use the Taxonomy API. The taxonomy is the organization system for the library. It groups content into the subjects that describe the content. For this approach you will need to create a list of all the concepts as described in this guide. Each concept response message contains a complete list of the articles and topics that are indexed to that concept.

#### The Process
1. Call each concept via `https://taxonomy.healthwise.net/concepts/{id}`
2. Parse the data.content atribute in the response to find the topics and articles that relate to a given concept.

The below object shows the section of the response message containing the details for topics and articles related to "Strep Throat".

```json
"content": {
    "topicAspects": [
        {
            "id": "definition",
            "label": "Definition",
            "topics": [
                {
                    "id": "116E31D6-1210-5364-A227-9C2E272B15B7",
                    "href": "https://content.healthwise.net/topics/116E31D6-1210-5364-A227-9C2E272B15B7",
                    "type": "hwDefinition",
                    "title": "Strep Throat"
                }
            ]
        },
        {
            "id": "diagnostics",
            "label": "Diagnostics",
            "topics": [
                {
                    "id": "1FDC0BB6-F565-4DA1-9DDE-909F85952BDB",
                    "href": "https://content.healthwise.net/topics/1FDC0BB6-F565-4DA1-9DDE-909F85952BDB",
                    "type": "hwInfoConcept",
                    "detailLevel": "mainPoint",
                    "title": "How is strep throat diagnosed?"
                },
                {
                    "id": "EDFEA9A0-70E2-4337-A05E-40011F37F41C",
                    "href": "https://content.healthwise.net/topics/EDFEA9A0-70E2-4337-A05E-40011F37F41C",
                    "type": "hwInfoConcept",
                    "detailLevel": "summary",
                    "title": "How is strep throat diagnosed?"
                },
                {
                    "id": "823849B7-DA29-451B-A7C3-A777FE05B966",
                    "href": "https://content.healthwise.net/topics/823849B7-DA29-451B-A7C3-A777FE05B966",
                    "type": "hwInfoConcept",
                    "detailLevel": "fullDetail",
                    "title": "How is strep throat diagnosed?"
                }
            ]
        }
        //... signifies response results were removed for brevity
        ...
    ],
    "articleAspects": [
        {
            "id": "Subject",
            "label": "Subject",
            "articles": [
                {
                    "id": "hw54524",
                    "href": "https://content.healthwise.net/articles/hw54524",
                    "type": "testdetail",
                    "title": "Rapid Strep Test for Strep Throat"
                },
                {
                    "id": "hw54745",
                    "href": "https://content.healthwise.net/articles/hw54745",
                    "type": "major",
                    "title": "Strep Throat"
                },
                //... signifies response results were removed for brevity
                ...
            ]
        }
    ]
}
```