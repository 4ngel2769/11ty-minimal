---
title: Home
layout: home.njk
---

# Hi, I'm angeldev0
### Cybersecurity Researcher & Embedded Systems Developer

I specialize in cybersecurity, ethical hacking, and embedded systems development, with extensive experience in Docker, virtual environments, networking, and server management.  
My work involves uncovering vulnerabilities, creating secure devices, and developing innovative solutions using ESP32 microcontrollers.

---

## // My Projects

I enjoy building things. Whether that's radio tools, scripts, hacking devices, applications, or anything in between.

<div class="list-pad">
<ul>
{% for project in collections.latestProjects %}
  <li>
    <a href="{{ project.url }}">{{ project.data.title }}</a>
    {% if project.date %}<div class="excerpt"><small>{{ project.date | dateFull }}</small></div>{% endif %}
    {% if project.data.excerpt %}<div class="excerpt">{{ project.data.excerpt }}</div>{% endif %}
  </li>
{% endfor %}
</ul>
<a href="/projects" style="display:inline-block;margin-top:0.5rem;">See more projects →</a>
</div>

---

## // Blog

Read my thoughts and insights:

<div class="list-pad">
<ul>
{% for post in collections.latestBlog %}
  <li>
    <a href="{{ post.url }}">{{ post.data.title }}</a>
    <div class="excerpt">
      {% if post.date %}<small>{{ post.date | dateFull }}</small>{% endif %}
      {% if post.data.excerpt %}{% if post.date %} · {% endif %}{{ post.data.excerpt }}{% endif %}
    </div>
  </li>
{% endfor %}
</ul>
<a href="/blog" style="display:inline-block;margin-top:0.5rem;">See more blog posts →</a>
</div>
