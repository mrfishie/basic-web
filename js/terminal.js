var basic = require('basic-lang');
var site = require('./');

var maxLength = 100;

function write(text) {
    var $spanElt = document.createElement('span');
    $spanElt.textContent = text;
    $spanElt.classList.add('terminal-item');
    site.$terminal.insertBefore($spanElt, site.$inputArea);

    site.$terminal.scrollTop = site.$terminal.scrollHeight;
}

var defaultInterface = new basic.IOInterface();
defaultInterface.setOutput(function(text) {
    write(text);
});

defaultInterface.setInput(function(cb) {
    if (cb) {
        site.$inputText.value = '';
        site.$terminalInput.style.display = 'inline';

        if (this.keyDown) document.removeEventListener('keydown', this.keyDown);
        if (this.inputKeyPress) document.removeEventListener('keypress', this.inputKeyPress);

        this.keyDown = function() {
            if (site.running) {
                site.$inputText.focus();
            } else cb.cancel();
        };
        document.addEventListener('keydown', this.keyDown);

        this.inputKeyPress = function(e) {
            setTimeout(function() {
                if (site.running) {
                    var inputValue = site.$inputText.value;
                    site.$inputArea.textContent = inputValue;
                    cb(inputValue, true);
                }
            }, 0);
        };
        site.$inputText.addEventListener('keypress', this.inputKeyPress);
    } else {
        document.removeEventListener('keydown', this.keyDown);
        site.$inputText.removeEventListener('keypress', this.inputKeyPress);
        site.$terminalInput.style.display = 'none';
        write(site.$inputArea.textContent);
        site.$inputArea.textContent = '';
    }
});

module.exports = defaultInterface;