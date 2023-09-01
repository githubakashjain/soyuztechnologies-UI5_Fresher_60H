sap.ui.define([

], function() {
    'use strict';
    return {
        createJSONModel: function(filePath) {
            // Step 1: Create a brand new object of the model
            var oModel = new sap.ui.model.json.JSONModel();
            // Step 2: Set or load the data in the model
            oModel.loadData(filePath);

            // oModel.setDefaultBindingMode("OneWay");
            // Step 3: Return model Object
            return oModel;
        }
    }
    
});