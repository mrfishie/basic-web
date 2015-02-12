var basic = require('basic-lang');
var CodeMirror = require('codemirror');

var execCtx;

exports.mouse = require('./mouse');

// Get canvas
window.addEventListener('load', function() {
    var $canvas = document.getElementById('canvas');
    exports.ctx = canvas.getContext('2d');
    var $terminal = document.getElementById('terminal');

    function resized() {
        $canvas.setAttribute('width', $canvas.clientWidth.toString());
        $canvas.setAttribute('height', $canvas.clientHeight.toString());
    }
    window.addEventListener('resize', resized);
    resized();

    function stop(message) {
        execCtx = false;
        $runButton.innerHTML = 'Run';
        exports.$terminalInput.style.display = 'none';
        isDone = true;
        exports.running = false;

        terminal.writeln("\n" + message + "\n");
    }

    exports.running = false;

    var $codeArea = document.getElementById('code');
    var $runButton = document.getElementById('run-btn');
    $runButton.addEventListener('click', function(e) {
        if (execCtx) stop('BREAK');
        else {
            var code = cm.getValue();
            $runButton.innerHTML = 'Stop';

            var isDone = false;
            exports.running = true;
            execCtx = basic.run(code, function(err) {
                if (err) {
                    if (err instanceof basic.parser.SyntaxError) stop('SYNTAX ERROR: ' + err.message);
                    else stop('ERROR: ' + err.message);
                }
                else stop('DONE');
            });
            if (isDone) execCtx = false;
        }

        e.preventDefault();
    });

    exports.$canvas = $canvas;
    exports.$terminal = $terminal;
    exports.$writeArea = document.getElementById('write-area');
    exports.$codeArea = $codeArea;
    exports.$runButton = $runButton;
    exports.$terminalInput = document.getElementById('terminal-input');
    exports.$inputArea = document.getElementById('input-area');
    exports.$inputText = document.getElementById('terminal-in');
    exports.mouse._start(document.getElementsByClassName('left-panel')[0]);

    var cm = CodeMirror.fromTextArea($codeArea, {
        lineNumbers: true
    });

    exports.drawProperties.startCache.unshift({
        ctx: exports.ctx
    });

    var $inputCursor = document.getElementById('input-cursor');

    // Flash the input cursor
    var isVisible = true;
    setInterval(function() {
        isVisible = !isVisible;
        $inputCursor.style.display = isVisible ? 'inline' : 'none';
    }, 500);
});

// Create interfaces
var terminal = require('./terminal');
basic.IOInterface.setDefault(terminal);
basic.IOInterface.set('draw', require('./draw'));

window.basic = basic;