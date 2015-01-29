var basic = require('basic-lang');
var commands = require('./commands');
var site = require('./');

var properties = {
    "r": 0,
    "g": 1,
    "b": 0,
    "a": 1,
    "family": "Zapfino",
    "style": "",
    "height": 14,
    "startCache": []
};
site.drawProperties = properties;

var sendFuncs = [];

/**
 * Send data to all listening clients
 *
 * @param {*} data Data to send
 * @private
 */
function send(data) {
    for (var i = 0; i < sendFuncs.length; i++) {
        sendFuncs[i](data);
    }
}

// Create proper drawing interface
var drawInterface = new basic.IOInterface();
drawInterface.setOutput(function(obj) {
    // If the object contains new properties, set them
    if (obj.properties) {
        for (var name in obj.properties) {
            if (!obj.properties.hasOwnProperty(name)) continue;
            properties[name] = obj.properties[name];
        }
    }

    // If the object contains a command, run it
    if (obj.command) {
        var commandFunc = commands[obj.command];
        if (!commandFunc) return;//throw new Error('Unknown gfx command ' + obj.command);

        site.ctx.save();
        commandFunc(site.ctx, properties, obj.args || {}, function(value) {
            send({
                command: obj.command,
                data: value
            });
        });
        site.ctx.restore();
    }
});

drawInterface.setInput(function(cb) {
    if (cb) {
        if (this.sendFunc) removeCallback(this);

        // Send data to IOInterface when new data is added
        this.sendFunc = function(data) {
            cb([data]);
        };
        sendFuncs.push(this.sendFunc);
    } else removeCallback(this);
});
module.exports = drawInterface;

function removeCallback(data) {
    var sendIndex = sendFuncs.indexOf(data.sendFunc);
    if (sendIndex !== -1) sendFuncs.splice(sendIndex, 1);
    data.sendFunc = false;
}