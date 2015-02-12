var toColor = require('../toColor');

/**
 * Draws a rounded rectangle on the canvas
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {Object} props
 * @param {Object} args
 * @param {Function} respond
 */
module.exports = function(ctx, props, args, respond) {
    var color = toColor(props.r, props.g, props.b, props.a);

    ctx.beginPath();
    ctx.moveTo(args.x1 + args.radius, args.y1);
    ctx.lineTo(args.x2 - args.radius, args.y1);
    ctx.quadraticCurveTo(args.x2, args.y1, args.x2, args.y1 + args.radius);
    ctx.lineTo(args.x2, args.y2 - args.radius);
    ctx.quadraticCurveTo(args.x2, args.y2, args.x2 - args.radius, args.y2);
    ctx.lineTo(args.x1 + args.radius, args.y2);
    ctx.quadraticCurveTo(args.x1, args.y2, args.x1, args.y2 - args.radius);
    ctx.lineTo(args.x1, args.y1 + args.radius);
    ctx.quadraticCurveTo(args.x1, args.y1, args.x1 + args.radius, args.y1);
    ctx.closePath();

    if (args.stroke > 0) {
        ctx.strokeStyle = color;
        ctx.lineWidth = args.stroke;
        ctx.stroke();
    } else {
        ctx.fillStyle = color;
        ctx.fill();
    }
};