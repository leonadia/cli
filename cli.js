#!/usr/bin/env node

const program = require('commander');
const path = require('path');
const {createProject} = require('./actions/init')

program
    .storeOptionsAsProperties(false)
    .passCommandToAction(false);

program
    .version('0.1.0')

program
    .command('init [projectName]')
    .description('init a react program')
    .action((projectName) => {
        let name = path.join(projectName)
        createProject(name);
    })

program
    .command('create')
    .description('create a new component with speicfied name')
    .option('-c,--component <component>')
    .action((options) => {
        console.log(options.component)
    });

program.parse(process.argv);
