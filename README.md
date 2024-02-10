# Mental Health and wellness Website



- Welcome to the <b>Universal Stress Relief Website</b>! 
- In today's fast-paced world, <u><b>` Stress `</b></u> has become an increasingly prevalent issue affecting people's mental well-being. This website serves as a valuable resource for individuals seeking effective methods to reduce stress and improve their overall quality of life.
- This project is a web page that provides news and insights on mental health and stress relief.

## Importance and Utility

- Stress can have detrimental effects on both physical and mental health, making it crucial to address and manage effectively. The Stress Relief Insights Website offers a range of resources, including informative articles, and guided sessions, all designed to empower users with practical tools for stress relief.

## How it Helps People Reduce Stress

- Through insightful articles, users can gain a deeper understanding of stress triggers and learn evidence-based strategies for coping and resilience. The stress assessment feature provides personalized insights into individual stress levels, enabling users to identify areas for improvement. 

- <b> `Join us on the Stress Relief Insights Website and take the first step towards a healthier, happier, and stress-free life!!` </b>



## Overview

- The page is built using HTML, CSS, and JavaScript. The following instructions will guide you on how to retrieve the code from GitHub, set it up on VSCode, and run it. Additionally, we will explain the HTML and JavaScript code in detail.

```
- stress-relief-website/
- │
- ├── index.html
- ├── styles.css
- ├── main.js
- └── README.md 
```



## Tools Used

- HTML5
- CSS3
- JavaScript


you can download [vscode](https://code.visualstudio.com/download) to practice the code.

## Setup

To get started with this project, ensure you have the following:

1. Linux, Windows, or MacOS
2. 4GB RAM
3. 10MB Storage






### Steps

1. Clone this repository
    ```
    git clone https://github.com/LameckKambi/Phase1-Project-LameckKambi.git
    ```

2. Open the cloned repo on Visual Studio Code.
3. Using LiveServer, open the `index.html` file.


- <u><b>`Now you're good to go.`</b></u>

## Demo

The app, when run, looks as follows:

![Landing page](top.png)



![Middle Section](bottom.png)


## Authors

This repo is currently being maintained by:

- Lameck Kambi


## Code Review

### HTML Code
The HTML code for this project is structured as follows:
- The header section contains the page title, navigation menu, and logo.
- The main section contains the blog content, videos, and news cards.
- The footer section contains the container menu with links to mental health resources and stress relief activities.
The navigation menu and container menu are implemented using unordered lists (ul) and list items (li). The links in the navigation menu are implemented using anchor tags (a) with href attributes that point to the corresponding stress relief insights. Similarly, the links in the container menu are implemented using anchor tags with href attributes that point to the relevant mental health resources and stress relief activities.
- - - 
```
<!DOCTYPE html> 
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mental Health and Wellness News</title>
  <link rel="stylesheet" href="styles.css">
</head>

<body>

  <header>
    <h1>Universal Stress Relief</h1>
    <nav>
      <ul>
        <li><a href="https://www.verywellmind.com/things-to-do-if-you-feel-lonely-5081371" target="_blank">Loneliness</a></li>
      <li><a href="https://www.talkspace.com/blog/how-to-deal-with-sadness/" target="_blank">Sadness</a></li>
      <li><a href="https://www.huffpost.com/entry/4-ways-to-find-direction-when-you-are-feeling-confused_b_5798e0dde4b0e339c2400320" target="_blank">Confusion</a></li>
      <li><a href="https://www.betterhealth.vic.gov.au/health/conditionsandtreatments/anxiety-treatment-options" target="_blank">Anxiety</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <div class="blog-content">
      <h2>Stress Relief Insights</h2>
      <p>Blogging content ...</p>
      <div class="video-container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Q0m6MB7Dr30" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <p>.content..</p>
      <div class="video-container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/15GaKTP0gFE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <p>.content.</p>
      <div class="video-container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/rukcQcZ1NYE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
    <div class="grid" id="grid">
      <!-- News cards will be dynamically added here -->
    </div>
  </main>

  <footer>
    <div class="container-menus">
      <ul>
        <li><a href="https://www.who.int/news-room/feature-stories/mental-well-being-resources-for-the-public" target="_blank">Mental Health Resources</a></li>
        <li><a href="https://www.stress.org/15-stress-reducing-activities-you-can-do-at-home-according-to-experts" target="_blank">Stress Relief Activities</a></li>
      </ul>
    </div>
  </footer>

  <script src="main.js"></script>
</body>
</html> 
```
- - - 

### JavaScript Code
The JavaScript code for this project is structured as follows:
- The DOMContentLoaded event listener was used to fetch news data from the News API and create news cards dynamically.
- The createNewsCard function was used to create a news card with a title, description, image, and link.
- The forEach method was used to iterate over the articles and create news cards for each article.
- The catch method was used to handle errors that may occur during the fetch request.

To add more functionality to the project, event listeners were added to the navigation links in the header section. When a link is clicked, it takes the user to the corresponding stress relief insights. Similarly, event listeners are added to the container menu links in the footer section. When a link is clicked, it takes the user to the relevant mental health resources and stress relief activities.

- - - 
```
window.addEventListener('DOMContentLoaded', () => {
  const API_KEY = "e6adf30107cd4e48bb9efdcfb577d6c2";
  const grid = document.getElementById("grid");

  // Function to create a news card
  const createNewsCard = (title, description, image, link) => {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardImage = document.createElement('img');
    cardImage.src = image;
    cardImage.alt = title;

    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');

    const cardTitle = document.createElement('h3');
    cardTitle.textContent = title;

    const cardDescription = document.createElement('p');
    cardDescription.textContent = description;

    const cardLink = document.createElement('a');
    cardLink.textContent = "Read More";
    cardLink.href = link;
    cardLink.target = "_blank";

    cardContent.appendChild(cardTitle);
    cardContent.appendChild(cardDescription);
    cardContent.appendChild(cardLink);

    card.appendChild(cardImage);
    card.appendChild(cardContent);

    grid.appendChild(card);
  };


// Fetch news data from the News API
const request = fetch(`https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=${API_KEY}`);
request.then(result => result.json())
  .then(body => {
    const articles = body.articles;

    // Create news cards
    articles.forEach(article => {
      const title = article.title;
      const description = article.description;
      const image = article.urlToImage;
      const link = article.url;

      createNewsCard(title, description, image, link);
    });
  })
  .catch(error => {
    console.error(error);
  });
});


  //event listeners for the navigation links
  const lonelinessLink = document.querySelector('a[href="#loneliness"]');
  lonelinessLink.addEventListener('click', () => {
    window.location.href = "https://www.verywellmind.com/things-to-do-if-you-feel-lonely-5081371";
  });

  const sadnessLink = document.querySelector('a[href="#sadness"]');
  sadnessLink.addEventListener('click', () => {
    window.location.href = "https://www.talkspace.com/blog/how-to-deal-with-sadness/";
  });

  const confusionLink = document.querySelector('a[href="#confusion"]');
  confusionLink.addEventListener('click', () => {
    window.location.href = "https://www.huffpost.com/entry/4-ways-to-find-direction-when-you-are-feeling-confused_b_5798e0dde4b0e339c2400320";
  });

  const anxietyLink = document.querySelector('a[href="#anxiety"]');
  anxietyLink.addEventListener('click', () => {
    window.location.href = "https://www.betterhealth.vic.gov.au/health/conditionsandtreatments/anxiety-treatment-options";
  });

```
- - - 



## License

This project is ported under the MIT License.

```
Copyright 2024 Lameck Kambi
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```