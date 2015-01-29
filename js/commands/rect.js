var toColor = require('../toColor');

/**
 * Draws a rectangle on the canvas
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {Object} props
 * @param {Object} args
 * @param {Function} respond
 */
module.exports = function(ctx, props, args, respond) {
    var color = toColor(props.r, props.g, props.b, props.a);

    if (args.stroke > 0) {
        ctx.strokeStyle = 'solid ' + args.stroke + 'px ' + color;
        ctx.strokeRect(args.x1, args.y1, args.x2 - args.x1, args.y2 - args.y1);
    } else {
        ctx.fillStyle = color;
        ctx.fillRect(args.x1, args.y1, args.x2 - args.x1, args.y2 - args.y1);
    }
};