var arr = ['red', 'blue', "yellow", "green", "pink"];
var box = document.querySelector('.box');
var i = 0;
setInterval(function() {
    box.style.background = arr[i];
    i++;
    if (i >= 4) {
        i = 0;
    }
}, 2000)