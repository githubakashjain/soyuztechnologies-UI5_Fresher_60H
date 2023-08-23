sap.ui.define([
    'sap/ui/core/mvc/Controller'
], function(Controller) {
    'use strict';
    // using the dependency to inherit from sap standard module
    return Controller.extend("donald.controller.Main", {
        // Event handler function which will trigger
        clickMe: function() {
            // Step 1: Obtain the object of my app
            var oApp = sap.ui.getCore();
            // Step 2: From the 'App' object, get the control object of input field
            var oInp = oApp.byId('idMyInput');
            // Step 3: Call a UI5 function/method to get the value from the input field
            var sVal = oInp.getValue();
            
            // print the value in the alert popup
            alert(sVal);
        },
        runMycode: function() {
            // Step 1: Get the view object
            var oView = this.getView();
            // Step 2: Get the contrl object of new input field
            var oInput = oView.byId("idNewInput");
            // Step 3: Set the value in the new input field
            oInput.setValue('Maza aavigiyo!'); 
        },
        onChangeData: function() {
            var oView = this.getView()
            var oInpEmpId = oView.byId("idEmpId");
            oInpEmpId.setValue("0000123");
        }
    })
});