function animate(ele, attr, target, duration) {
    var begin = getCss(ele, attr);
    var change = target - begin;
    var times = 0;
    var interval = 10;
    _animate();
    function _animate() {
        window.clearInterval(ele.timer);
        times += interval;
        if (times >= duration) {
            ele.style[attr] = target + 'px';
            window.clearInterval(ele.timer);
            ele.timer = null;
        } else {
            ele.style[attr] = times / duration * change + begin + 'px';
            ele.timer = window.setInterval(_animate, interval);
        }
    }
}
