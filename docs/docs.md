---
layout: page
title: Documentation
permalink: /docs/
---

<ul>
{% for doc in site.docs %}
  <li><a href="{{ doc.url }}">{{ doc.title }}</a></li>
{% endfor %}
</ul>
