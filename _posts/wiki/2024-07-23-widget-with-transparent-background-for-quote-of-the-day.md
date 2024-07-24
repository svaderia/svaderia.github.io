---
title: "Widget with transparent background for Quote of the Day"
tags: [ios, scriptable, qotd]
excerpt: "who likes solid colors?"
---

Now as you might have already noticed in the last post, The background of widget is not exciting.
I don't have a good sense in design to understand which color would make this more attractive.
But I wondered, wouldn't a transparent background look cooler?

Unfortunetly, *iOS* doesn't natively allow any home screen widget to have a transparent background.

## Transparent background for static wallpaper
Now one thing to observe is that *iOS* does allow you to set a picture as a background. 
Which means that if you set the exactly same picture as what is in your wallpaper as a background, 
it will give an illusion that you have *transparent* background.

Check out this amazing script by supermon: [supermamon/scriptable-no-background](https://github.com/supermamon/scriptable-no-background) 

Very briefly, when you run this script independently with a screenshot of your black home screen, 
it will generate different cropped images for different positions of the widget.

Now once that is done, you can choose one of these cropped image as the widget background depending
on the position of your widget, either at run-time or hard-coded in the script.

Here is the updated script I use.

```javascript
// These are the important lines
const nobg = importModule('no-background')
const widget = new ListWidget()
widget.backgroundImage = await nobg.getSlice('medium-top')
```

Following is the full script if you just want to copy.
```javascript

const URL = 'https://raw.githubusercontent.com/svaderia/quote-of-the-day/main/quotes.json';

// Fetch quotes
const response = await new Request(URL).loadJSON();
const quotes = response;

// Get today's date and create a seed
const today = new Date().toISOString().split('T')[0];
const seed = today.split('-').join('');

// Generate a seeded random number
function seededRandom(seed) {
  let x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

const randomIndex = Math.floor(seededRandom(seed) * quotes.length);
const randomQuote = quotes[randomIndex];


// Add quote text
let quoteText = widget.addText(randomQuote.quote);
quoteText.textColor = Color.white();
quoteText.font = Font.boldSystemFont(16);
quoteText.centerAlignText();

// Add attribution text
let attributionText = widget.addText("- " + randomQuote.attribution);
attributionText.textColor = new Color("#000000", 0.5);

attributionText.font = Font.italicSystemFont(12);
attributionText.centerAlignText();

// Set the widget
if (config.runsInWidget) {
  Script.setWidget(widget);
} else {
  widget.presentMedium();
}

Script.complete();
```
