var site = require('../');

/**
 * Copies the currently cached canvas to the previous one
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {Object} props
 * @param {Object} args
 * @param {Function} respond
 */
module.exports = function(ctx, props, args, respond) {
    if (!props.startCache[props.startCache.length - 1].evt) throw new Error('ENDDRAW without BEGINDRAW');

    var currentCache = props.startCache.pop();
    var previousCtx = props.startCache[props.startCache.length - 1].ctx;
    previousCtx.clearRect(0, 0, site.$canvas.width, site.$canvas.height);
    previousCtx.drawImage(currentCache.$elt, 0, 0);
    //previousCtx.putImageData(currentCache.ctx.getImageData(0, 0, currentCache.$elt.width, currentCache.$elt.height), 0, 0);
    window.removeEventListener('resize', currentCache.evt);
};