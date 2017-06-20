# film_website

<a href="https://ncskier.github.io/film_blog/">https://ncskier.github.io/film_blog/</a>

## How To Edit the Repo
* `commit` local changes
* `pull` from the repo
* `merge` any discrepencies
* make sure everything works
* `pull` again
* `push` changes to repo

## How To Embed YouTube or Vimeo
`{% include youtubePlayer.html id=videoId %}` or  
`{% include vimeoPlayer.html id=videoId %}`  
where `videoId` is the id of the video you want to include. It may be helpful
to include the `videoId` in your page's _front matter_ (which you can reference
from your page using `page.videoId`).
