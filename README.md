# ![node-basic](http://i.imgur.com/xseiUzV.png)

basic-web is a web-based editor for [node-basic](https://github.com/mrfishie/node-basic).

## Running

Open the `index.html` file in the `web` folder to launch the editor. Depending on the browser, you may need to run it on a local web server.

## Building

To modify basic-web or rebuild it, you first need to install any NPM dependencies. In the project root, run

    npm install

Once this is complete, install browserify

    npm install browserify -g

To build the files, run the following command after installing browserify:

    browserify js/index.js -o web/bundle.js

Add the `-d` flag to the command to build with sourcemaps.

*A Grunt task will be added soon, however for now you need to use the commandline.*
