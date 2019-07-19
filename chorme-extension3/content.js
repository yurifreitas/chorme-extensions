let prevTarget = null;

window.addEventListener('click', function(e) {
    var target = e.target;
    if (target !== prevTarget) {
        console.log(target);
        prevTarget = target;
    }
});