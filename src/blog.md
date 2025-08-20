---
title: Blog
layout: blog.njk
permalink: /blog/
---

# Blog Posts

<ul>
{% for post in collections.blog %}
  <li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
{% endfor %}
</ul>
