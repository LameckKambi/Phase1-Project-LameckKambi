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

  
