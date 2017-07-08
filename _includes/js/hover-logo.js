/*
 * Logo Hover Animation
 */

let div = document.getElementById('logo-div');

div.onmouseout = function () {
  let img = document.getElementById('logo');
  img.src = "https://d195nid4sd8yh0.cloudfront.net/logo/movie-thoughts-logo.png";
};

div.onmouseover = function () {
  let img = document.getElementById('logo');
  img.src = "https://d195nid4sd8yh0.cloudfront.net/logo/movie-thoughts-logo-animation.gif";
};
