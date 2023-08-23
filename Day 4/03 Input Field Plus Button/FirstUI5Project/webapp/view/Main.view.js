sap.ui.jsview("donald.view.Main", {
    // we are talling ui5 that who is my controller
    getControllerName: function() {
        return "donald.controller.Main";
    },

    createContent: function(oController) {
        // Input Field
        var oInput = new sap.m.Input({
            id: 'idMyInput',
            width: '20%'
        })

        // create the object of any UI control
        var oBtn = new sap.m.Button('idSpidy', {
            text: 'Spiderman',
            press: oController.clickMe
        });
        // and return that
        return [oInput, oBtn];
    }
})