---
title: "Bringing Motivation to Your Day: Quote of the Day Project"
tags: [jekyll, qotd]
excerpt: "a.k.a qotd"
---

In our busy lives, a good quote can provide the motivation we need to keep going.
I often look for these bits of wisdom and wanted an easy way to include them in my daily routine.
So, I created a straightforward solution: displaying a random motivational quote on my website, and eventually, as a widget on my phone.

## The Goal
The aim is simple: each day, a randomly selected quote from my collection is displayed.

## Basic Setup
I don't want to write a full-fledge web service to maintain the quotes data structure.
I decided to just have a `quote.json` file on my [github](https://github.com/svaderia/quote-of-the-day) repository.
I will add new quotes to this json file, and use it as the data storage.

## Displaying Quotes on Your Website

To achieve this, we utilize custom JavaScript and HTML, which fetches and displays a random quote from the JSON file.

Here’s a step-by-step guide to setting it up on your website:

### JavaScript Code

This script fetches the quotes from a JSON file, selects a random quote based on the current date, and displays it on the webpage.

```javascript
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

The `src` attribute in the `<script>` tag uses the Liquid format for compatibility with Jekyll. Adjust it according to your platform.

The `<p>` tag with the link directs users to a blog post explaining the purpose behind this feature.

You can see this setup in action on my [website](https://svaderia.github.io).
For additional styling details, refer to [this commit](https://github.com/svaderia/svaderia.github.io/commit/9704cadbca356e3d4b092c17d6bd988513c11695).


## Adding New Quotes
To simplify the process of adding new quotes, I created a Python script. This script is located in the `scripts/bin/qt` file of my repository.
After setting up the script, I used `stow --target=$HOME scripts` to create a symlink in my `$HOME/bin` folder. This allows me to easily add new quotes using the `qt` command.

## Future Plans: Custom Widget for iPhone
I plan to extend this feature to my iPhone by developing a custom widget. Stay tuned for updates on this exciting addition.

## Conclusion
Feel free to adopt and adapt this setup for your own use, and let’s spread some motivation together!
