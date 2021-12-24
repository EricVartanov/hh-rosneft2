'use strict'

function banner_resize() {
    var banners = [].slice.call(document.querySelectorAll('.idc-bg-wrapper'));
    banners.forEach(function(elem) {
        return elem.style.width = document.documentElement.clientWidth + 'px';
    });
}

document.onreadystatechange = function() {
    if (document.readyState === 'complete') {
        // Ваш скрипт


        window.addEventListener('resize', function() {
            banner_resize();
        });
        banner_resize();
    }
};