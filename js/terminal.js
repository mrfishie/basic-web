var basic = require('basic-lang');
var site = require('./');

var maxLength = 100;

var defaultInterface = new basic.IOInterface();
defaultInterface.setOutput(function(text) {
    if (!site.$terminal) return;

    // Keep the terminal at a reasonable size limit to avoid lag
    var currentContent = site.$terminal.textContent + text;
    var lines = currentContent.split("\n");
    if (lines.length > maxLength) lines = lines.slice(lines.length - maxLength);
    var finalText = lines.join("\n");
    if (finalText[finalText.length - 1] !== "\n") finalText += "\n";
    site.$terminal.textContent = finalText;

    site.$terminal.scrollTop = site.$terminal.scrollHeight;

    //site.$terminal.textContent += text;
});

module.exports = defaultInterface;