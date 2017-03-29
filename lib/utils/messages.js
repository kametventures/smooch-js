'use strict';

exports.__esModule = true;
var isHiddenMessage = exports.isHiddenMessage = function isHiddenMessage(message) {
    return message.text && message.text.indexOf('@@@') === 0;
};

var filterHiddenMessages = exports.filterHiddenMessages = function filterHiddenMessages(messages) {
    return messages ? messages.filter(function (message) {
        return !isHiddenMessage(message);
    }) : messages;
};