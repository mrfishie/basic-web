var toColor = require('../toColor');

/**
 * Draws a point on the canvas
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {Object} props
 * @param {Object} args
 * @param {Function} respond
 */
module.exports = function(ctx, props, args, respond) {
    var color = toColor(props.r, props.g, props.b, props.a);

    ctx.fillStyle = color;

    var halfSize = args.size / 2;
    ctx.fillRect(args.x - halfSize, args.y - halfSize, args.x + halfSize, args.y + halfSize);
};