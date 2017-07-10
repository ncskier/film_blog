/*
 * Logo Hover Animation
 */

let div = document.getElementById('logo-div');

div.onmouseout = function () {
  let img = document.getElementById('logo');
  img.src = "https://dmn0f9g56xzxa.cloudfront.net/logo/movie-thoughts-logo.png";
};

div.onmouseover = function () {
  let img = document.getElementById('logo');
  img.src = "https://dmn0f9g56xzxa.cloudfront.net/logo/movie-thoughts-logo-animation.gif";
};
