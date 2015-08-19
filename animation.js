var timerId;

var moveUp = function() {
    move('#title').sub('top', 40).end();
    var top = document.getElementById('title').style.top;
    if (top == '0px') {
        clearInterval(timerId);
        setInterval(cycle, 1130);
    }
}


var cycleDirection = 1;
var cycle = function() {
    if (cycleDirection == 1)
        move('#t1').add('top', 20).end();
    else
        move('#t1').sub('top', 20).end();
    cycleDirection = -cycleDirection;        
}

var audio = document.querySelector('audio');
audio.addEventListener('playing', function() {
    var top = document.getElementById('title').style.top;
    if (top != '0px')
        timerId = setInterval(moveUp, 1180);
});