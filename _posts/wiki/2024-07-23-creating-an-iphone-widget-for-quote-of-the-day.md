---
title: "Creating an iPhone Widget for Quote of the Day"
tags: [ios, scriptable, qotd]
excerpt: "Should be possible to do this on Android as well"
---

In my previous post, I shared how to display a random motivational quote on your website.
Today, we'll take it a step further and create an iPhone widget that shows a new quote every day.
This widget will use the awesome [Scriptable](https://scriptable.app/) app,
which allows you to run JavaScript code on your iPhone and provides custom APIs to modify the widget.

Here's how you can set up a widget that pulls data from a `quotes.json` file and displays it on your iPhone.


Copy and paste the following JavaScript code into the script editor.

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

// Create widget
let widget = new ListWidget();

// Set semi-transparent background color
widget.backgroundColor = new Color("#000000", 0.3); // Black color with 50% opacity

// Add quote text
let quoteText = widget.addText(randomQuote.quote);
quoteText.textColor = Color.white();
quoteText.font = Font.boldSystemFont(16);
quoteText.centerAlignText();

// Add attribution text
let attributionText = widget.addText("- " + randomQuote.attribution);
attributionText.textColor = Color.gray();
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

Save the script with a meaningful name, such as "qotd" and add the widget to your home screen.

Note that Scriptable also supports a widget on Lock Screen, but the quote needs to be small enough to view.

Here is how it looks on my phone.

![](assets/images/qotd1.PNG)

