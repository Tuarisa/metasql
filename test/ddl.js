'use strict';

const path = require('path');
const { create, generate } = require('..');

const cwd = process.cwd();
const schemaPath = path.join(cwd, 'application/schemas');
const outputPath = path.join(cwd, 'application/schemas/migrations');

create(schemaPath, outputPath);
generate(schemaPath);
