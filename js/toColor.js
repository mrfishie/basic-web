/**
 * Converts an R, G, B and A to a color string
 *
 * @param {Number} r
 * @param {Number} g
 * @param {Number} b
 * @param {Number?} a
 * @returns {String}
 */
module.exports = function toColor(r, g, b, a) {
    var hasAlpha = typeof a !== 'undefined';
    var items = [Math.floor(r * 255), Math.floor(g * 255), Math.floor(b * 255)];
    if (hasAlpha) items.push(a);

    return (hasAlpha ? 'rgba' : 'rgb') + '(' + items.join(',') + ')';
};