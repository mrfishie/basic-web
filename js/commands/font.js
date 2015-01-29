/**
 * Sets the font family, style, and size
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {Object} props
 * @param {Object} args
 * @param {Function} respond
 */
module.exports = function(ctx, props, args, respond) {
    if (args.family) props.family = args.family;
    if (args.style) props.style = args.style;
    if (args.height) props.height = args.height;
};