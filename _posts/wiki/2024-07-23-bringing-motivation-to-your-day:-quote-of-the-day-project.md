---
title: "Bringing Motivation to Your Day: Quote of the Day Project"
tags: [jekyll, qotd]
excerpt: "a.k.a qotd"
---

In our busy lives, the right quote can serve as a beacon of motivation, inspiring us to push forward and seize the day. I often find myself seeking these snippets of wisdom, and I wanted a way to incorporate them into my daily routine more seamlessly. This led me to create a simple, yet effective solution: displaying a random motivational quote on my website, and eventually, as a widget on my phone.

## The Goal

The aim is straightforward: each day, a randomly selected quote from my collection is displayed. This ensures that I start each day with a fresh dose of inspiration.

## Displaying Quotes on Your Website

To achieve this, we utilize custom JavaScript and HTML, which fetches and displays a random quote from a JSON file. Here’s a step-by-step guide to setting it up on your website:

### JavaScript Code

This script fetches the quotes from a JSON file, selects a random quote based on the current date, and displays it on the webpage.

```js
document.addEventListener("DOMContentLoaded", function () {
  fetch('https://raw.githubusercontent.com/svaderia/quote-of-the-day/main/quotes.json')
    .then(response => response.json())
    .then(quotes => {
      const today = new Date().toISOString().split('T')[0];
      const seed = today.split('-').join('');
      const randomIndex = Math.floor(seededRandom(seed) * quotes.length);
      const randomQuote = quotes[randomIndex];
      document.getElementById('quote').innerText = randomQuote.quote;
      document.getElementById('attribution').innerText = "- " + randomQuote.attribution;
    })
    .catch(error => console.error('Error fetching the quote:', error));
});

// https://stackoverflow.com/a/19303725
function seededRandom(seed) {
  let x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}
```

### HTML Code

Add the following HTML snippet to your webpage. Ensure you link the JavaScript correctly based on your setup.

```html
<script src="{{ '/assets/js/quote.js' | relative_url }}"></script>

<div>
  <div class="quote-of-the-day notice">
    <p id="quote">Loading</p>
    <footer id="attribution"></footer>
  </div>
  <p class="quote-info"><a href="/path-to-your-post">What's this?</a></p>
</div>
```

The `src` attribute in the `<script>` tag uses the Liquid format for compatibility with Jekyll. Adjust it according to your platform. The `<p>` tag with the link directs users to a blog post explaining the purpose behind this feature.

You can see this setup in action on my [website](https://svaderia.github.io). For additional styling details, refer to [this commit](https://github.com/svaderia/svaderia.github.io/commit/9704cadbca356e3d4b092c17d6bd988513c11695).

## Future Plans: Custom Widget for iPhone

I plan to extend this feature to my iPhone by developing a custom widget. Stay tuned for updates on this exciting addition.

## Adding New Quotes

To simplify the process of adding new quotes, I created a Python script. This script is located in the `scripts/bin/qt` file of my repository.

After setting up the script, I used `stow --target=$HOME scripts` to create a symlink in my `$HOME/bin` folder. This allows me to easily add new quotes using the `qt` command.

## Conclusion

This project is a small but meaningful attempt to infuse daily life with a bit more inspiration. By integrating random quotes into my daily routine, I hope to maintain a positive and motivated mindset. Feel free to adopt and adapt this setup for your own use, and let’s spread some motivation together!