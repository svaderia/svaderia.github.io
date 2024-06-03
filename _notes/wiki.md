---
title: Wiki
layout: archive
taxonomy: Wiki
header:
  teaser: /assets/images/wiki.webp
excerpt: Unpolished notes for reference
tagline: "Hello, How are you doing"
classes: wide
sidebar:
  nav: posts
---

{% capture notice-text %}

This page contains notes I've written for my future reference. They might be less refined, but that's okay.  
There are two types of content here : 

* [Wiki](#wiki) : Unrefined notes which someone might find useful.
* [Snippets](#snippets) : This is purely for myself, don't waste your time on this, unless you want to.

{% endcapture %}

<div class="notice--warning">
  {{ notice-text | markdownify }}
</div>

{% assign entries_layout = page.entries_layout | default: 'list' %}

{% assign wikis = site.categories["Wiki"] | where_exp: "post", "post.snippet == false" %}
{% assign snippets = site.categories["Wiki"] | where_exp: "post", "post.snippet == true" %}


## Wiki
{% for post in wikis %}
  {% include archive-single.html type=entries_layout %}
{% endfor %}

<a href="#page-title" class="back-to-top">{{ site.data.ui-text[site.locale].back_to_top | default: 'Back to Top' }} &uarr;</a>

## Snippets
{% for post in snippets %}
  {% include archive-single.html type=entries_layout %}
{% endfor %}

<a href="#page-title" class="back-to-top">{{ site.data.ui-text[site.locale].back_to_top | default: 'Back to Top' }} &uarr;</a>



