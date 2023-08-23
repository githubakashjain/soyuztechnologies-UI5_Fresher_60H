sap.ui.define([
    'sap/ui/core/mvc/Controller'
], function(Controller) {
    'use strict';
    // using the dependency to inherit from sap standard module
    return Controller.extend("donald.controller.Main", {
        // Event handler function which will trigger
        clickMe: function() {
            alert("this is a controller's event handler function");
        }
    })
});