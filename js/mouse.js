exports.pressed = false;
exports.x = 0;
exports.y = 0;

exports._start = function($leftPanel) {
    $leftPanel.addEventListener('mousemove', function (e) {
        exports.x = e.clientX;
        exports.y = e.clientY;
    });
    $leftPanel.addEventListener('mousedown', function () {
        exports.pressed = true;
    });
    $leftPanel.addEventListener('mouseup', function () {
        exports.pressed = false;
    });
};