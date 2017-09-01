# film_blog

<a href="https://biasedmoviethoughts.com/">https://biasedmoviethoughts.com/</a>

## Edit the Repo
* `commit` local changes
* `pull` from the repo
* `merge` any discrepencies
* make sure everything works
* `pull` again
* `push` changes to repo

## Embed YouTube or Vimeo
`{% include youtubePlayer.html id=videoId %}` or  
`{% include vimeoPlayer.html id=videoId %}`  
where `videoId` is the id of the video you want to include. It may be helpful
to include the `videoId` in your page's _front matter_ (which you can reference
from your page using `page.videoId`).

## Use Makefile
To easily compile the jekyll site, type `make`  
If you want to include the flag for drafts, type `make drafts`
