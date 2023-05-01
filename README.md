# Job-Listing-With-Filtering

This is a solution to the [Job Listings with Filtering Challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of Contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
  - [Code Snippet](#code-snippet)
- [Author](#author)

## Overview

### The Challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Filter job listings based on the categories

### Screenshot

Desktop View
![Desktop View](./preview.png)

### Links

- Solution URl: [Solution Site](https://github.com/aniru-dh21/Job-Listing-With-Filtering)
- Live Site URL: [Live Site]()

## My Process

### Built With

- Semantic HTML5 Markup
- Flexbox
- CSS Grid
- Mobile-First Workflow
- Vanilla Javascript

### What I Learned

In regards to the project and tasks organization for this challenge, I found useful to break down the challenge into smaller pieces of work, and to make commits for small chunks of code helped me to track better the progress.

In the technical stuff, I learned how to apply:

- Named parameters in functions using object literals.

```js
function createCardElement({ elementType, container, properties, attributes }) {
  //..
}
```

- The spread operator.

```js
cardElement.setAttribute("data-labels", [job.role, job.level, ...job.languages, ...job.tools]);
```
 - Working on a mobile-first approach taking the best of Flexbox and CSS Grid.
 
 ```css
/* card element in smaller viewports */
.card {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
}

/* card element in medium viewports*/
.card {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
}
```
- A more functional way to write JavaScript.

- I also practiced a lot of how to manipulate the DOM (create elements, add classes, set/get attributes, and so on). 

### Code Snippet

Data Taken for Listings

```js
{
      "id": 1,
      "company": "Photosnap",
      "logo": "./images/photosnap.svg",
      "new": true,
      "featured": true,
      "position": "Senior Frontend Developer",
      "role": "Frontend",
      "level": "Senior",
      "postedAt": "1d ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["HTML", "CSS", "JavaScript"],
      "tools": []
    }
```

Function To Display Job Listings
```js
function createJobDetailsSection({ 
    companyName, 
    newBadge, 
    featuredBadge, 
    position, 
    postedAt, 
    contract, 
    location 
    }) {
    const jobDetailsContainer = document.createElement("div");
    jobDetailsContainer.classList.add("details__container") 

    createCardElement({
        elementType: "p",
        container: jobDetailsContainer,
        attributes: { class: "company__name"},
        properties: { innerText: companyName }
    });

    const badges = createBadge(newBadge, featuredBadge);
    badges.forEach(badge => {
        jobDetailsContainer.appendChild(badge)
    });

    createCardElement({
        elementType: "h3",
        container: jobDetailsContainer,
        attributes: { class: "job__position"},
        properties: { innerText: position }
    });

    createCardElement({
        elementType: "p",
        container: jobDetailsContainer,
        attributes: { class: "post__details"},
        properties: { innerText: postedAt }
    });

    createCardElement({
        elementType: "p",
        container: jobDetailsContainer,
        attributes: { class: "post__details"},
        properties: { innerText: "•" }
    });

    createCardElement({
        elementType: "p",
        container: jobDetailsContainer,
        attributes: { class: "post__details"},
        properties: { innerText: contract }
    });

    createCardElement({
        elementType: "p",
        container: jobDetailsContainer,
        properties: { innerText: "•" },
        attributes: { class: "post__details"},
    });

    createCardElement({
        elementType: "p",
        container: jobDetailsContainer,
        attributes: { class: "post__details"},
        properties: { innerText: location }
    });

    return jobDetailsContainer;
}
```

## Author

- Frontend Mentor - [@aniru-dh21](https://www.frontendmentor.io/profile/aniru-dh21)
- [LinkedIn](https://www.linkedin.com/in/ramachandra-anirudh-vemulapalli-554b551ba/)
