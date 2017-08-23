---
title: Styling in kramdown
tags: [Jekyll]
---

A year spent in **Artificial Intelligence** is enough to make one believe in god. --Alan Perlis
{: .notice--info}

I always wondered how someone can use this notices and buttons. And finally, I'm also able to do it :v:. 
Thanks to [Michael Rose](https://mademistakes.com/), he gave an amazing guide to use and customize his theme `minimal mistakes`.
While going through the guide, I came across a good explanation of using Kramdown Markdown renderer for styling 
markdown posts.

# Buttons
You can make simple buttons very easily using built in kramdown support for `.btn` class.

```html
<a href="#" class="btn">Link Text</a>
```

| Button Type   | Example | Class | Kramdown |
| ------        | ------- | ----- | ------- |
| Default       | [Text](#link){: .btn} | `.btn` | `[Text](#link){: .btn}` |
| Success       | [Text](#link){: .btn .btn--success} | `.btn .btn--success` | `[Text](#link){: .btn .btn--success}` |
| Warning       | [Text](#link){: .btn .btn--warning} | `.btn .btn--warning` | `[Text](#link){: .btn .btn--warning}` |
| Danger        | [Text](#link){: .btn .btn--danger} | `.btn .btn--danger` | `[Text](#link){: .btn .btn--danger}` |
| Info          | [Text](#link){: .btn .btn--info} | `.btn .btn--info` | `[Text](#link){: .btn .btn--info}` |
| Inverse       | [Text](#link){: .btn .btn--inverse} | `.btn .btn--inverse` | `[Text](#link){: .btn .btn--inverse}` |
| Light Outline | [Text](#link){: .btn .btn--light-outline} | `.btn .btn--light-outline` | `[Text](#link){: .btn .btn--light-outline}` |

| Button Size | Example | Class | Kramdown |
| ----------- | ------- | ----- | -------- |
| X-Large     | [X-Large Button](#){: .btn .btn--x-large} | `.btn .btn--x-large` | `[Text](#link){: .btn .btn--x-large}` |
| Large       | [Large Button](#){: .btn .btn--large} | `.btn .btn--large` | `[Text](#link){: .btn .btn--large}` |
| Default     | [Default Button](#){: .btn} | `.btn` | `[Text](#link){: .btn}` |
| Small       | [Small Button](#){: .btn .btn--small} | `.btn .btn--small` | `[Text](#link){: .btn .btn--small}` |

# Notices
Notice can catch your attention very easily. It's a best way to highlight any point.
Following code snippet will produce below notice.
```markdown
**Watch out!** This paragraph of text has been emphasized with the `{: .notice}` class.
{: .notice}
```
`.notice` tag highlights paragraph above it. This paragraph can have Markdown formatting.
Here is some examples of different type of notices.  

**Watch out!** This paragraph of text has been emphasized with the `{: .notice}` class.
{: .notice}

**Watch out!** This paragraph of text has been emphasized with the `{: .notice--primary}` class.
{: .notice--primary}

**Watch out!** This paragraph of text has been emphasized with the `{: .notice--info}` class.
{: .notice--info}

**Watch out!** This paragraph of text has been emphasized with the `{: .notice--warning}` class.
{: .notice--warning}

**Watch out!** This paragraph of text has been emphasized with the `{: .notice--success}` class.
{: .notice--success}

**Watch out!** This paragraph of text has been emphasized with the `{: .notice--danger}` class.
{: .notice--danger}