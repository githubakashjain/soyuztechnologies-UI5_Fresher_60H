sap.ui.define([
    "sap/ui/core/format/NumberFormat"
], function(NumberFormat) {
    'use strict';
    return {
        // Formatter Function
        convertTextToUC: function(sEmpName) {
            if (sEmpName) {
                return sEmpName.toUpperCase();
            }
        },
        getFormatterAmount: function(sSalary, sCurrency) {
            var oCurrencyFormat = NumberFormat.getCurrencyInstance({
                // this property specifies that we don't want currency code
                // instead we want to display the currency symbol
                currencyCode: false // default value is true
            });
            return oCurrencyFormat.format(sSalary, sCurrency)
        }
    }
});