var site = require('../');

/**
 * Gets the size of the screen
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {Object} props
 * @param {Object} args
 * @param {Function} respond
 */
module.exports = function(ctx, props, args, respond) {
    respond({
        width: site.$canvas.width,
        height: site.$canvas.height
    });
};