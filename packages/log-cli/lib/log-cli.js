#!/usr/bin/env node
"use strict";

const { program } = require("commander");
const LogCore = require("log-core");

program.action(cmd => LogCore());

program.parse(process.argv);
module.exports = logCli;

function logCli() {
  // TODO
}
