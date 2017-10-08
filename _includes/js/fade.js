/*
 * Fade Animation
 */

var fadeIns = document.getElementsByClassName("fadein");
var duration = 100.0

for (var i = 0; i < fadeIns.length; i++) {
    let element = fadeIns[i];
    element.style.opacity = 0.0;
    window.setTimeout(function() { fadeIn(element, duration); }, i*(duration-0.0));
}

function fadeIn(element, duration) {
    var op = 0.0;       // initial opacity
    var t = 0.0;
    var dt = 10;
    var timer = setInterval(function () {
        if (t >= duration) {
            element.style.opacity = 1.0;
            clearInterval(timer);
        }
        element.style.opacity = op;
        t += dt;
        // op = t/duration;
        op = (t/duration) ** 2.0;
    }, dt);
}