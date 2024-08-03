---
title: DSA
layout: single
header:
  teaser: /assets/images/spacefilling.jpg
excerpt: My notes on DSA
classes: wide
sidebar:
  nav: posts
---

{% assign navigation = site.data.navigation['dsa'] %}
{% for nav in navigation %}
{% if nav.title != 'PYSKI' %}
  <h2>
    {% if nav.url %}
      <a href="{{ nav.url | relative_url }}" rel="permalink">{{ nav.title }}</a>
    {% else %}
      {{ nav.title }}
    {% endif %}
  </h2>
  {% if nav.children != null%}
    {% for child in nav.children %}
        {% for post in site.posts %}
          {% if post.url contains child.url %}
              {% if post.id == page.id %}{% continue %}{% endif %}
              {% include custom-archive-single.html %}
          {% endif %}
        {% endfor %}
    {% endfor %}
  {% endif %}
{% endif %}
{% endfor %}

## Other Notes

{% for post in site.posts %}
  {% if post.tags contains "dsa" and post.tags contains "other" %}
      {% if post.id == page.id %}{% continue %}{% endif %}
      {% include custom-archive-single.html %}
  {% endif %}
{% endfor %}
