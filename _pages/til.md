---
layout: archive
author_profile: true
permalink: /til/
header:
  image: /assets/images/til.jpg
---

{{ page.excerpt | markdownify }}
# Today I learned
{% for post in site.categories['til'] %}
  {% include archive-single.html %}
{% endfor %}
