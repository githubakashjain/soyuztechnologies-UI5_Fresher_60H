sap.ui.jsview("donald.view.Main", {
    createContent: function() {
        // create the object of any UI control
        var oBtn = new sap.m.Button('idSpidy', {
            text: 'Spiderman'
        });
        // and return that
        return oBtn;
    }
})