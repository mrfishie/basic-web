var mouse = require('../mouse');
var site = require('../');

/**
 * Gets the distance between the mouse and the canvas center, between -1 and 1
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {Object} props
 * @param {Object} args
 * @param {Function} respond
 */
module.exports = function(ctx, props, args, respond) {
    var centerX = site.$canvas.width / 2;
    var centerY = site.$canvas.height / 2;

    var offsetX = mouse.x - centerX;
    var offsetY = mouse.y - centerY;
    respond({
        x: Math.max(-1, Math.min(offsetX / centerX, 1)),
        y: Math.max(-1, Math.min(offsetY / centerY, 1)),
        z: 0 // TODO
    });
};