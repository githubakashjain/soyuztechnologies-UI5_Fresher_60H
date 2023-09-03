sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "donald/utils/lifesaver"
], function(Controller, lifesaver) {
    'use strict';
    return Controller.extend("donald.controller.BaseController", {

        // Global Variable or Functions declared here will be available in all the other controllers
        x: 'Anubhav',

        // Declaring formatter dependency at global level
        formatter: lifesaver,

        myReuseFunction: function() {
            alert('The global fx called and value is ' + this.x);
        }
    })
    
});