var site = require('../');

/**
 * Clears the terminal
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {Object} props
 * @param {Object} args
 * @param {Function} respond
 */
module.exports = function(ctx, props, args, respond) {
    if (args.type === "tty" && site.$terminal) {
        var allItems = document.getElementsByClassName('terminal-item');
        while (allItems.length > 0) allItems[0].parentNode.removeChild(allItems[0]);
    }
    if (args.type === "gfx" && site.ctx) site.ctx.clearRect(0, 0, site.$canvas.width, site.$canvas.height);
};