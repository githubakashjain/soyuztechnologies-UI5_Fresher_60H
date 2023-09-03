sap.ui.define([
    'donald/controller/BaseController',
    'donald/model/models'
], function(BaseController, models) {
    'use strict';
    // using the dependency to inherit from sap standard module
    return BaseController.extend("donald.controller.Main", {

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
            var oModel = models.createJSONModel("model/mockdata/sample.json");
            var oModel2 = models.createJSONModel("model/mockdata/dataset.json");

            // Create XML Model Object
            var oXMLModel = models.createXMLModel();

            // Create Resource Model Object
            var oResourceModel = models.createResourceModel();

            // Step 3: Make the model aware to the application / View / Control
            // Without a name the model will be treated as DEFAULT MODEL
            this.oCore.setModel(oModel);
            // To avoid the overwritting of our default model,  we give name to our second model
            // so both models can co-exist without any conflict
            this.oCore.setModel(oModel2, "got");

            // Set the Resource model at app level
            this.oCore.setModel(oResourceModel,"i18n");

            // Binding syntax
            //Syntax 3 for binding as property specific method
            this.getView().byId("idSal").bindValue('/empStr/salary');
            //Syntax 4 for binding using a generic method
            this.getView().byId("idCurr").bindProperty("value", "/empStr/currency");
            this.getView().byId("idSmoker").bindProperty("state", "/empStr/smoker");

            // Call the reuse function present in the BaseController
            this.myReuseFunction();
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
        },
        onFlip: function() {
            //Get both the model objects
            var oModel = sap.ui.getCore().getModel();
            var oModelGot = sap.ui.getCore().getModel("got");
            //Perform the flip flop
            sap.ui.getCore().setModel(oModelGot);
            sap.ui.getCore().setModel(oModel, "got");
        },
        onSelect: function(oEvent) {
            //Step 1: Get the address of the element which was selected by user
            var sPath = oEvent.getParameter("rowContext").getPath();
            //Step 2: Get the object of target control where we want to send data - simple form
            var oSimpleForm = this.getView().byId("idSimpleForm");
            //Step 3: Bind the element with simple form - send data from memeory of element to simple form
            oSimpleForm.bindElement(sPath); // the path will be for e.g. /empTab/2

        }
        
    })
});