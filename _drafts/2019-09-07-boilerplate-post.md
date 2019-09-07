---
layout: post
title: "Boilerplate Post Title"
author: "Author Name"
categories: # at the moment this distinguishes "trailers" from "main" posts
# examples we've used so far:
  - movies
  # - trailers # only use this if you also want to see your post in the trailers feed
  - anime
  - main # only use this if you want to see your draft post on the main feed
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
imageSrc: "https://m.media-amazon.com/images/M/MV5BMjIyNjk1OTgzNV5BMl5BanBnXkFtZTcwOTU0OTk1Mw@@._V1_SX1500_CR0,0,1500,999_AL_.jpg"
imageAlt: "Describe the image for screen-readers or if it doesn't load"
# optional [bottom/middle/top] to align the image in the post preview
previewAlign: middle
---

<!-- This includes the image at the top of your post -->
{% include centered-image.html src=page.imageSrc alt=page.imageAlt %}

Write your post here :)

### Notes
* `make` to build and view your page (view in browser at [localhost:4000](http://localhost:4000))
* `make drafts` to build and view your page if it's in the `_drafts` directory
* [markdown cheat sheet](https://www.markdownguide.org/cheat-sheet/)
* You can write html in the markdown file
* Write your post in your preferred text editor, then copy and paste it into here
