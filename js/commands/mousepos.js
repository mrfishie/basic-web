var mouse = require('../mouse');

/**
 * Gets the location of the mouse
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {Object} props
 * @param {Object} args
 * @param {Function} respond
 */
module.exports = function(ctx, props, args, respond) {
    respond({
        x: mouse.x,
        y: mouse.y
    });
};