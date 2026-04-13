---
id: create-a-blog-post
title: Create a Blog Post
sidebar_position: 3
sidebar_label: Create a Blog Post
tags: []
---

# Create a Blog Post

Docusaurus generates a post page, blog index, tag pages, and RSS feed automatically.

## Create your first post

Create a file at `blog/2021-02-28-greetings.md`:

```md title="blog/2021-02-28-greetings.md"
---
slug: greetings
title: Greetings!
authors:
  - name: Joel Marcey
    title: Co-creator of Docusaurus 1
    url: https://github.com/JoelMarcey
    image_url: https://github.com/JoelMarcey.png
  - name: Sébastien Lorber
    title: Docusaurus maintainer
    url: https://sebastienlorber.com
    image_url: https://github.com/slorber.png
tags: [greetings]
---

Your post is now part of the blog index and tag system.
```

The post is available at [http://localhost:3000/blog/greetings](http://localhost:3000/blog/greetings).

## Production tips

- Keep titles specific and outcome-oriented.
- Add one clear topic per post.
- Use tags that match your information architecture.
- Add a short summary before the truncate marker when using long-form posts.
