var mouse = require('../mouse');

/**
 * Finds if the mouse is pressed
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {Object} props
 * @param {Object} args
 * @param {Function} respond
 */
module.exports = function(ctx, props, args, respond) {
    respond(mouse.pressed ? 1 : 0);
};