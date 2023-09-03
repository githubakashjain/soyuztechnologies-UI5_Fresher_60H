sap.ui.define([
    'sap/ui/model/json/JSONModel',
    'sap/ui/model/xml/XMLModel',
    'sap/ui/model/resource/ResourceModel'
], function(JSONModel, XMLModel, ResourceModel) {
    'use strict';
    return {
        createJSONModel: function(filePath) {
            // Step 1: Create a brand new object of the model
            var oModel = new JSONModel();
            // Step 2: Set or load the data in the model
            oModel.loadData(filePath);

            // oModel.setDefaultBindingMode("OneWay");
            // Step 3: Return model Object
            return oModel;
        },
        createXMLModel: function() {
            var oModel = new XMLModel();
            oModel.loadData('model/mockdata/mydata.xml');
            return oModel;
        },
        createResourceModel: function(){
            //The model will be used to provide language support
            var oResource = new ResourceModel({
                bundleUrl: "i18n/i18n.properties"
            });
            return oResource;
        }
    }
    
});