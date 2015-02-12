var toColor = require('../toColor');

/**
 * Draws a circle on the canvas
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {Object} props
 * @param {Object} args
 * @param {Function} respond
 */
module.exports = function(ctx, props, args, respond) {
    var color = toColor(props.r, props.g, props.b, props.a);

    ctx.beginPath();
    ctx.arc(args.x, args.y, args.radius, 0, 2 * Math.PI, false);

    if (args.stroke > 0) {
        ctx.strokeStyle = color;
        ctx.lineWidth = args.stroke;
        ctx.stroke();
    } else {
        ctx.fillStyle = color;
        ctx.fill();
    }
};