var toColor = require('../toColor');
var site = require('../');

/**
 * Changes the TTY text color
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {Object} props
 * @param {Object} args
 * @param {Function} respond
 */
module.exports = function(ctx, props, args, respond) {
    var color = toColor(args.r, args.g, args.b);
    if (site.$terminal) site.$terminal.style.color = color;
};