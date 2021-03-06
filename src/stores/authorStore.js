'use strict';

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmmiter = require('events').EventEmmitter;
var assign = require('object-assign');
var CHANGE_EVENT = 'change';

var AuthorStore = assign({}, EventEmmiter.prototype, {
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    }
});

Dispatcher.register(function(action) {
    switch (action.actionType) {
        
    }
});

module.exports = AuthorStore;
