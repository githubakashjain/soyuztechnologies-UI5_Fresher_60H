sap.ui.define([
    
], function() {
    'use strict';
    return {
        // Formatter Function
        convertTextToUC: function(sEmpName) {
            if (sEmpName) {
                return sEmpName.toUpperCase();
            }
        }
    }
});