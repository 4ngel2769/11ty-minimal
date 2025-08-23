---
title: Demo API Integration
excerpt: Shows how to fetch and display data from an API.
layout: project.njk
permalink: /projects/api/
date: 2025-08-03
---

This project fetches data from a public API and displays it on the page.

```js
fetch('https://api.example.com/data')
  .then(res => res.json())
  .then(data => console.log(data));
```

You can use any API you like!
