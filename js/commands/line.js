var toColor = require('../toColor');

/**
 * Draws a line on the canvas
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {Object} props
 * @param {Object} args
 * @param {Function} respond
 */
module.exports = function(ctx, props, args, respond) {
    var color = toColor(props.r, props.g, props.b, props.a);

    ctx.strokeStyle = 'solid ' + args.width + 'px ' + color;
    ctx.beginPath();
    ctx.moveTo(args.x1, args.y1);
    ctx.lineTo(args.x2, args.y2);
    ctx.stroke();
};