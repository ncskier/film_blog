# Biased Movie Thoughts

<h2><a href="https://biasedmoviethoughts.com/">https://biasedmoviethoughts.com/</a></h2>
<br>
<img alt="biased movie thoughts logo" src="https://dmn0f9g56xzxa.cloudfront.net/logo/movie-thoughts-logo-animation.gif" width="200px">

## Notes for writing a new post

### 1. Write your post
Write your post in a text editor with spellcheck ;)

Keep track of any images you want to use

### 2. Create a new Markdown (`.md`) file
* Regular posts go in the directory `main/_posts/`
* Trailer posts go in the directory `trailers/_posts/`

Use the boilerplate posts found at

* `_drafts/2019-09-07-boilerplate-post.md`
* `_drafts/2019-09-07-boilerplate-trailer.md`

Name the file with the format: `yyyy-mm-dd-POST-NAME.md`

#### Embed YouTube or Vimeo video
Paste `{% include youtubePlayer.html id=videoId %}` or
`{% include vimeoPlayer.html id=videoId %}`
where `videoId` is the id of the video you want to include.

### 3. View your new post
Enter the `make` command in your Terminal

* `make drafts` will build posts in the `_drafts` directory
* make sure your terminal window is in this repo (the `film_blog` directory)

Navigate to [localhost:4000](localhost:4000) in your browser.

Type `[control]` + `c` in your terminal to stop your pages from being served to
`localhost:4000`

(these `make` commands are shortcuts defined in the `makefile`)

## Notes for publishing your post(s)

### Git add
Add all of the files you would like to add to GitHub

```
git add [path to file]
```

`git add` command documentation is [here](https://git-scm.com/docs/git-add)

### Git commit
Commit these changes with a descriptive message

```
git commit -m "my descriptive message"
```

`git commit` command documentation is [here](https://git-scm.com/docs/git-commit)

### Git pull & merge/rebase
This can be a little more complicated, but if there are conflicting files in the
git repository, then we need to fix these conflicts before pushing our current
changes.

```
git pull
```

Resolve the merge conflicts if there are any

```
git add .
git commit
```

Note, `git commit` will open up the vim text editor with a pre-populated commit
message. You can type `:wq` then `[enter]` to write and quit this editor.

### Git push
Push these changes to the GitHub repository

```
git push
```

`git push ` command documentation is [here](https://git-scm.com/docs/git-push)

### Summary/Overview for editing the Repo
* `commit` local changes
* `pull` from the repo
* `merge` or `rebase` any discrepancies
* `make` sure everything works
* `push` changes to repo
