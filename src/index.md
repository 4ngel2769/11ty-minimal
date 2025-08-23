---
title: Home
layout: home.njk
---

# Hi, I'm {{ site.author }} 👋

<div class="location-row">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
    <path d="M12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995L16.9497 15.9497ZM12 13C10.8954 13 10 12.1046 10 11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11C14 12.1046 13.1046 13 12 13Z"></path>
  </svg>
  <span>{{ site.location }}</span>
</div>

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
    <div class="excerpt">
    {% if project.date %}<small>{{ project.date | dateFull }}</small>{% endif %}
    {% if project.data.excerpt %}{% if project.date %} · {% endif %}{{ project.data.excerpt }}{% endif %}
    </div>
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
