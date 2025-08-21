---
title: Home
layout: home.njk
---

# Hi, I'm Angel, Cybersecurity Researcher & Embedded Systems Developer

I specialize in cybersecurity, ethical hacking, and embedded systems development, with extensive experience in Docker, virtual environments, networking, and server management.  
My work involves uncovering vulnerabilities, creating secure devices, and developing innovative solutions using ESP32 microcontrollers.

---

### MY PROJECTS

I enjoy building things. Whether that's radio tools, scripts, hacking devices, applications, or anything in between.  
Take a look at my arsenal of projects:

<ul>
{% for project in collections.projects | reverse | slice(0, 3) %}
  <li><a href="{{ project.url }}">{{ project.data.title }}</a></li>
{% endfor %}
</ul>
<a href="/projects" style="display:inline-block;margin-top:0.5rem;">See more projects →</a>

---

### BLOG

Read my thoughts and insights:

<ul>
{% for post in collections.blog | reverse | slice(0, 3) %}
  <li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
{% endfor %}
</ul>
<a href="/blog" style="display:inline-block;margin-top:0.5rem;">See more blog posts →</a>
