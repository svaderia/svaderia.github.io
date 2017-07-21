---
layout: archive
author_profile: true
permalink: /til/
---

{{ page.excerpt | markdownify }}
# Today I learned
{% for post in site.categories['til'] %}
  {% include archive-single.html %}
{% endfor %}
