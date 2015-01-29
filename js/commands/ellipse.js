var toColor = require('../toColor');

/**
 * Draws an ellipse on the canvas
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {Object} props
 * @param {Object} args
 * @param {Function} respond
 */
module.exports = function(ctx, props, args, respond) {
    var color = toColor(props.r, props.g, props.b, props.a);

    var rx = (args.x2 - args.x1) / 2;
    var cx = args.x1 + rx;
    var ry = (args.y2 - args.y1) / 2;
    var cy = args.y1 + ry;

    ctx.save();
    ctx.beginPath();
    ctx.translate(cx - rx, cy - ry);
    ctx.scale(rx, ry);
    ctx.arc(1, 1, 1, 0, 2 * Math.PI, false);
    ctx.restore();

    if (args.stroke > 0) {
        ctx.strokeStyle = 'solid ' + args.stroke + 'px ' + color;
        ctx.stroke();
    } else {
        ctx.fillStyle = color;
        ctx.fill();
    }
};