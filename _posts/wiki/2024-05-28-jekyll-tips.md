---
title: "Jekyll Tips"
tags: [jekyll]
excerpt: "Things I learnt and want to remember"
---

### Refer links in footnotes

Sometimes inserting a link inplace will take a lot of space and might break the flow of what you write. 
For example [Google](www.google.com) will be written as `[Google](www.google.com)`.
You ca actually make it shorter:
```md

Here is a [Reference](ref)

...

[ref]: www.google.com

```


### Create Footnotes

You can create Footnotes by adding `[^1]` after a word and then write the footnote like following later.
```md
[^1]: Here is a footnote that you can do
```

### Create Collapsible Section

<details>
<summary>This is how you do it</summary>
You might need to create collapsible section in future.
{% highlight bash %}
# This is how you highlight inside it.
{% endhighlight %}

You also need surround the below highlight with a `raw` tag so that the `highlight` tag is not processed.
Read more [here](https://ozzieliu.com/2016/04/26/writing-liquid-template-in-markdown-with-jekyll/)


</details>

{% raw %}
```markdown
<details>
<summary>This is how you do it</summary>
You might need to create collapsible section in future.
{% highlight markdown %}
This is how you highlight inside it.
{% endhighlight %}
</details>
```

{% endraw %}
### Link to a header in the same page

Here is how you link to a section in a page. [Link like this](#link-to-a-header-in-the-same-page)
```md
[Link like this](#link-to-a-header-in-the-same-page)
```

### Utility classed for minimal mistakes
Refer : [https://mmistakes.github.io/minimal-mistakes/docs/utility-classes/](https://mmistakes.github.io/minimal-mistakes/docs/utility-classes/)

### Include another markdown file
[https://github.com/jekyll/jekyll/issues/1303#issuecomment-21067548](https://github.com/jekyll/jekyll/issues/1303#issuecomment-21067548)

### Add markdown content in notice

{% capture notice-text %}
When you want to do multiline
* markdown content like this
  - you need to use a different trick
{% endcapture %}

<div class="notice--info">
  {{ notice-text | markdownify }}
</div>

{%  raw %}
```markdown
{% capture notice-text %}
When you want to do multiline
* markdown content like this
  - you need to use a different trick
{% endcapture %}

<div class="notice--info">
  {{ notice-text | markdownify }}
</div>

```
{% endraw %}
