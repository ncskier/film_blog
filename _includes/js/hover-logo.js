/*
 * Logo Hover Animation
 */

let div = document.getElementById('logo-div');

div.onmouseout = function () {
  let img = document.getElementById('logo');
  img.src = "{{ '/assets/images/movie-thoughts-logo.png' | relative_url }}";
};

div.onmouseover = function () {
  let img = document.getElementById('logo');
  img.src = "{{ '/assets/images/movie-thoughts-logo-animation.gif' | relative_url }}";
};
