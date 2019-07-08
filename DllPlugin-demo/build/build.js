"use strict";

// node加载进度条
const ora = require('ora');
const spinner = ora('building for production...');
// node rm -rf
const rm = require('rimraf');
// consol color
const chalk = require('chalk');
// console.log(chalk.cyan("Build complete \n"));
// console.log(chalk.red("Build failed with errors. \n"));
// console.log(chalk.green("Build green"));

const path = require('path');
const webpack = require('webpack');

const config = require('./webpack.prod.conf');
const rmFile = path.resolve(__dirname, '../dist/static');
spinner.start();

rm(rmFile, function (err) {
    if (err) {
        throw err;
    }
    // console.log('config :', config);
    webpack(config, function(err, stats) {
        spinner.stop();
        if (err) {
            throw err;
        }
        // console.log('===========================================');
        process.stdout.write(
            stats.toString({
                colors: true,
                modules: false,
                children: false,
                chunks: false,
                chunkModules: false
            }) + "\n\n"
        );

        if (stats.hasErrors()) {
            console.log(chalk.red("  Build failed with errors.\n"));
            process.exit(1);
        }

        console.log(chalk.cyan("  Build complete.\n"));
        console.log(
            chalk.yellow(
                "  Tip: built files are meant to be served over an HTTP server.\n" +
                "  Opening index.html over file:// won't work.\n"
            )
        );
    })
})