---
title: My Projects
layout: projects.njk
permalink: /projects/
---

# My Projects

Here is a list of my projects. Click on any project to learn more about it.

<ul>
{% for project in collections.projects %}
  <li><a href="{{ project.url }}">{{ project.data.title }}</a></li>
{% endfor %}
</ul>
