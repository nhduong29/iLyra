/**
 * Created by DuongHanh on 6/6/2016.
 */
angular
    .module('iLyra',['datatables'])
    .controller('customerController',function($scope,customerService, DTOptionsBuilder){
        $scope.customers = [];
        $scope.paymentPlan ={
            "planID": 2,
            "name": "Standard",
            "amount": 150000,
            "description": "Gói Standard"
        }
        $scope.pamentPlantType = [];
        customerService.getCustomers().success(function (data) {
            $scope.customers = data.content;
        }).error(function(error){
            console.log(error);
        });
        customerService.getPaymentPlan().success(function (data) {
            $scope.pamentPlantType = data.content;
        }).error(function(error){
            console.log(error);
        });
        $scope.newCustomer = {};
        $scope.addCustomer = function(newCustomer){
            customerService.aadCustomer(newCustomer).success(function (data) {
                $scope.customers.push[data];
                $scope.newCustomer = {};
            }).error(function(error){
                console.log(error);
            });
        };

        $scope.clearForm = function(){
            $scope.newCustomer = {};
        };
    });