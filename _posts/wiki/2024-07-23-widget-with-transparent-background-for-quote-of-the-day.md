---
title: "Widget with transparent background for Quote of the Day"
tags: [ios, scriptable, qotd]
excerpt: "who likes solid colors?"
---

> This is a 3 part series, here are other parts.  
> Part 1: [Bringing Motivation to Your Day: Quote of the Day Project](/wiki/bringing-motivation-to-your-day-quote-of-the-day-project/)  
> Part 2: [Creating an iPhone Widget for Quote of the Day](/wiki/creating-an-iphone-widget-for-quote-of-the-day/)  

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

## Transparent background for shuffled wallpapers
The obvious limitation of the previous approach is that if your background changes you need to regenerate the cropped images for the background.
If you don't change your background frequently, you might still be okay with updating the widget when you change.

I love to shuffle my wallpapers frequently. I used *iOS* feature that sets *nature* and *city* type wallpapers every hour.

Now rather than letting *iOS* decide the shufftle, I created a *Shortcut*.
Every time this shortcut is triggered, 
* It chooses a random photo from my photos album 
* Crop it to appropriate dimensions
* Save the *Cropped Photo* to a location on iCloud
* Triggers a Scriptable Script
  * Read the photo from the saved location on iCloud
  * Create all the slices used for the widget. I modified the [no-background]() script a little.
* Set the *Cropped Photo* to Wallpaper.

Here is a link to the [shortcut](https://www.icloud.com/shortcuts/8998e4e3b26f40dcb37398e266a27ab3).
You just need to have the Scriptable app installed for this shortcut to work.
The scriptable script can be found [here](https://github.com/svaderia/quote-of-the-day/blob/main/scripts/no-background-shortcut.js).

Now once you have this shortcut, you can trigger this from any automation whenever you want.
I trigger it, once every few hours.

## Example
Here is how the transparent background looks. It is not perfect, but so is life :)

![image]({{ site.url }}{{ site.baseurl }}/assets/images/qotd2.jpeg)
