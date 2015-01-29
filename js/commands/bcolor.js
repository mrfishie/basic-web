var toColor = require('../toColor');
var site = require('../');

/**
 * Changes the canvas background color
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {Object} props
 * @param {Object} args
 * @param {Function} respond
 */
module.exports = function(ctx, props, args, respond) {
    ctx.fillStyle = toColor(args.r, args.g, args.b);
    ctx.fillRect(0, 0, site.$canvas.width, site.$canvas.height);
};