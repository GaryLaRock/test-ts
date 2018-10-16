"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pluralize_1 = require("pluralize");
function getMessage(str) {
    return 'hello ' + str;
}
exports.getMessage = getMessage;
function getPlural(str) {
    return pluralize_1.plural(str);
}
exports.getPlural = getPlural;
