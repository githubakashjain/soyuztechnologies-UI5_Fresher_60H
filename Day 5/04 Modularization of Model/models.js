sap.ui.define([

], function() {
    'use strict';
    return {
        createJSONModel: function() {
            // Step 1: Create a brand new object of the model
            var oModel = new sap.ui.model.json.JSONModel();
            // Step 2: Set or load the data in the model
            oModel.setData({
                "empStr": {
                    "empId": '1000',
                    "empName": "Ironman",
                    "salary": 95000,
                    "currency": "USD",
                    "smoker": true
                },
                "empTab": []
            });
            // Step 3: Return model Object
            return oModel;
        }
    }
    
});