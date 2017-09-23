---
layout: archive
author_profile: true
permalink: /til/
description: "Hey, I'm Shyamal Vaderia, a Machine Learning enthusiast and Python lover, pursuing B.E.(Hons) in Computer Science from BITS Pilani, Pilani Campus, India."
header:
  image: /assets/images/til.jpg
---

{{ page.excerpt | markdownify }}
# Today I learned
{% for post in site.categories['til'] %}
  {% include archive-single.html %}
{% endfor %}
