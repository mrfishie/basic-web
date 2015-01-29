var site = require('../');

/**
 * Starts caching any new canvas draws
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {Object} props
 * @param {Object} args
 * @param {Function} respond
 */
module.exports = function(ctx, props, args, respond) {
    var $newCanvas = document.createElement('canvas');
    function resized() {
        $newCanvas.setAttribute('width', site.$canvas.width);
        $newCanvas.setAttribute('height', site.$canvas.height);
    }
    window.addEventListener('resize', resized);
    resized();

    var newCtx = $newCanvas.getContext('2d');
    newCtx.drawImage(site.$canvas, 0, 0);

    site.ctx = newCtx;

    props.startCache.push({
        evt: resized,
        ctx: newCtx,
        $elt: $newCanvas
    });
};