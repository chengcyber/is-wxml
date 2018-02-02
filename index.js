'use strict';

const wxmlTags = require('wxml-tags');

const full = new RegExp(wxmlTags.map(x => `<${x}\\b[^>]*>`).join('|'), 'i');

module.exports = input => full.test(input);
