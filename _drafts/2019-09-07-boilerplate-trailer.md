---
layout: post
title: "Boilerplate Trailer Title"
author: "Author Name"
categories: # at the moment this distinguishes "trailers" from "main" posts
# examples we've used so far:
  - movies
  - trailers
  - anime
tags: # tags are use for the "Related Posts" section
# examples we've used so far:
  - anime
  - movie
  - tv
  - trailer
  - trailer tuesdays
  - music mondays
  - biased thoughts
  - quick thoughts
  - random thoughts
  - rant

# required for [image] preview type (used in "main" posts)
#imageSrc: "http://www.imagesite.com/path/to/image"
#imageAlt: "Describe the image for screen-readers or if it doesn't load"
# optional [bottom/middle/top] to align the image in the post preview
#previewAlign: middle

# required for [trailer] preview type (used in "trailer" posts)
youtubeId: "KlLMlJ2tDkg"
---

<!-- This includes the YouTube video for a Trailer post -->
{% include youtubePlayer.html id=page.youtubeId %}

<br>

Write your trailer post here :)

### Notes
* `make` to build and view your page (view in browser at [localhost:4000](http://localhost:4000))
* `make drafts` to build and view your page if it's in the `_drafts` directory
* [markdown cheat sheet](https://www.markdownguide.org/cheat-sheet/)
* You can write html in the markdown file
* Write your post in your preferred text editor, then copy and paste it into here
