var toColor = require('../toColor');

var defaultTypes = {
    "American Typewriter":  'Consolas, "Liberation Mono", Courier, monospace',
    "AppleGothic":          '"Open Sans", Helvetica, arial, freesans, clean, sans-serif',
    "Arial":                'freesans, clean, sans-serif',
    "Arial Rounded":        'freesans, clean, sans-serif',
    "Courier":              'Consolas, "Liberation Mono", Courier, monospace',
    "Courier New":          'Consolas, "Liberation Mono", Courier, monospace',
    "Georgia":              '"Times New Roman", "Times", serif',
    "Helvetica":            'arial, freesans, clean, sans-serif',
    "Marker Felt":          '"Comic Sans MS", sans-serif',
    "Times":                '"Times New Roman", serif',
    "Trebuchet":            'Helvetica, arial, freesans, clean, sans-serif',
    "Verdana":              'Helvetica, arial, freesans, clean, sans-serif',
    "Zapfino":              'Consolas, "Liberation Mono", Courier, monospace'
};

/**
 * Draws text onscreen
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {Object} props
 * @param {Object} args
 * @param {Function} respond
 */
module.exports = function(ctx, props, args, respond) {
    ctx.font = (props.style ? props.style + " " : "") + props.height + 'px "' + props.family + '", ' + defaultTypes[props.family];
    ctx.fillStyle = toColor(props.r, props.g, props.b, props.a);
    ctx.fillText(args.text, args.x1, args.y1 + props.height, args.x2);
};