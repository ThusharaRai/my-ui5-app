sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";
    return Controller.extend("calculation.controller.View1", {
        onInit: function () {
            // Set up a JSON model to hold the result
            var oModel = new JSONModel();
            this.getView().setModel(oModel, "resultModel");
        },

        onCalculate: function (operation) {
            var input1 = this.byId("input1").getValue();
            var input2 = this.byId("input2").getValue();

            var url;
            switch (operation) {
                case "sum":
                    url = "/odata/v4/calc/sum";
                    break;
                case "subtract":
                    url = "/odata/v4/calc/subtract";
                    break;
                case "multiply":
                    url = "/odata/v4/calc/multiply";
                    break;
                case "divide":
                    url = "/odata/v4/calc/divide";
                    break;
                default:
                    url = "/odata/v4/calc/findGreater";
            }


            // Perform the AJAX call
            $.ajax({
                url: url,
                method: "POST",
                contentType: "application/json",
                data: JSON.stringify({
                    input1: parseInt(input1),
                    input2: parseInt(input2)
                }),
                success: function (oData) {
                    this.getView().getModel("resultModel").setProperty("/result", "Result: " + oData.value);
                }.bind(this),
                error: function () {
                    this.getView().getModel("resultModel").setProperty("/result", "Error in calculation");
                }.bind(this)
            });
        },

        onFindGreater: function () {
            this.onCalculate("findGreater");
        },

        onSum: function () {
            this.onCalculate("sum");
        },

        onSubtract: function () {
            this.onCalculate("subtract");
        },

        onMultiply: function () {
            this.onCalculate("multiply");
        },

        onDivide: function () {
            this.onCalculate("divide");
        }

    });
});

