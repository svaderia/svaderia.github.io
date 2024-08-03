---
title: Other Notes
layout: single
author_profile: false
permalink: /dsa/other/
sidebar:
  title: My Notes
  nav: dsa
---

{% for post in site.posts %}
  {% if post.tags contains "dsa" and post.tags contains "other" %}
      {% if post.id == page.id %}{% continue %}{% endif %}
      {% include custom-archive-single.html %}
  {% endif %}
{% endfor %}
