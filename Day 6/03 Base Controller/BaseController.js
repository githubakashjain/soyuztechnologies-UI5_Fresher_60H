sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller) {
    'use strict';
    return Controller.extend("donald.controller.BaseController", {
        // Global Variable or Functions declared here will be available in all the other controllers
        x: 'Anubhav',
        myReuseFunction: function() {
            alert('The global fx called and value is ' + this.x);
        }
    })
    
});