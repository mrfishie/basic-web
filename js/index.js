var basic = require('basic-lang');

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

    var $codeArea = document.getElementById('code');
    var $runButton = document.getElementById('run-btn');
    $runButton.addEventListener('click', function(e) {
        if (execCtx) {
            execCtx.running = false;
            execCtx = false;
            $runButton.innerHTML = 'Run';
            terminal.writeln("\nBREAK");
        } else {
            var code = $codeArea.value;
            $runButton.innerHTML = 'Stop';

            var isDone = false;
            execCtx = basic.run(code, function() {
                execCtx = false;
                $runButton.innerHTML = 'Run';
                terminal.writeln("\nDONE");
                isDone = true;
            });
            if (isDone) execCtx = false;
        }

        e.preventDefault();
    });

    exports.$canvas = $canvas;
    exports.$terminal = $terminal;
    exports.$codeArea = $codeArea;
    exports.$runButton = $runButton;
    exports.mouse._start(document.getElementsByClassName('left-panel')[0]);

    exports.drawProperties.startCache.unshift({
        ctx: exports.ctx
    });
});

// Create interfaces
var terminal = require('./terminal');
basic.IOInterface.setDefault(terminal);
basic.IOInterface.set('draw', require('./draw'));

window.basic = basic;