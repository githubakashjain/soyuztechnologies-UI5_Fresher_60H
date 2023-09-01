sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'donald/model/models'
], function(Controller, models) {
    'use strict';
    // using the dependency to inherit from sap standard module
    return Controller.extend("donald.controller.Main", {
        // Global Variable
        multiplier: 1.5,
        // Event handler function which will trigger

        /*=========================================================================
                                        HOOK Methods
        ===========================================================================*/
        // It is used to initialize the code
        onInit: function() {
            // Set the value of the sap.ui.getCore() in a global varaible
            this.oCore = sap.ui.getCore();
            
            // Step 1: Create a brand new object of the model
            var oModel = models.createJSONModel();
            // Step 3: Make the model aware to the application / View / Control
            this.oCore.setModel(oModel);

            // Binding syntax
            //Syntax 3 for binding as property specific method
            this.getView().byId("idSal").bindValue('/empStr/salary');
            //Syntax 4 for binding using a generic method
            this.getView().byId("idCurr").bindProperty("value", "/empStr/currency");
            this.getView().byId("idSmoker").bindProperty("state", "/empStr/smoker");
        },
        onBeforeRendering: function() {
            // Step 1: What is the value of the salary in the model
            var sSal = this.oCore.getModel().getProperty("/empStr/salary");
            // Step 2: if salary > 10000
            if (sSal > 10000) {
                // Step 3: make salary field gray out
                this.getView().byId('idSal').setEnabled(false);
            }
        },
        onAfterRendering: function() {
            // Apply jQuery on the entire form
            // The id is taken from the DOM.
            $("#idMyXML--idSimpleForm").fadeOut(3000, function(){
                $("#idMyXML--idSimpleForm").fadeIn(2000);
            });
        },
        clickMe: function() {
            // Step 1: Obtain the object of my app
            var oApp = this.oCore;
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
            // OLD APPROACH
            // var oView = this.getView()
            // var oInpEmpId = oView.byId("idEmpId");
            // oInpEmpId.setValue("0000123");

            // NEW APPROACH - Using Model
            // Step 1: get the model object from app because in onInit, we set model at app level
            var oModel = this.oCore.getModel();
            // Step 2: Change the data
            oModel.setProperty("/empStr", {
                "empId": "1000022",
                "empName": "Vanshika",
                "salary": 850000 * this.multiplier,
                "currency": "JPY",
                "smoker": false
            });
        }
    })
});