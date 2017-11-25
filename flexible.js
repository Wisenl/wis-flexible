;(function (win) {
    // var timer;
    var dpr = win.devicePixelRatio || 1;
    var doc = win.document;
    var docEl = doc.documentElement;
    var metaEl = doc.querySelector('meta[name="viewport"]');
    if (!metaEl) {
        metaEl = doc.createElement('meta');
        metaEl.setAttribute('name', 'viewport');
        docEl.firstElementChild.appendChild(metaEl)
    }
    function refreshRem() {
        dpr = win.devicePixelRatio || 1;
        var scale = parseFloat(1 / dpr).toFixed(4);
        var screenWidth = win.screen.width;
        var width = screenWidth * dpr;
        docEl.setAttribute('data-dpr', dpr);
        metaEl.setAttribute('content', 'width=' + width + ', initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
        docEl.style.fontSize = parseFloat(width / 3.75).toFixed(2) + 'px';
        console.log('run flexible', dpr, docEl.style.fontSize)
    }

    win.addEventListener('resize', function() {
        // clearTimeout(timer);
        // timer = setTimeout(refreshRem, 300);
        refreshRem();
    }, false);

    if (doc.readyState === 'complete') {
        doc.body.style.fontSize = 12 * dpr + 'px';
    } else {
        doc.addEventListener('DOMContentLoaded', function() {
            doc.body.style.fontSize = 12 * dpr + 'px';
        }, false);
    }
    refreshRem();
})(window)
