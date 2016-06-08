/**
 * Created by DuongHanh on 6/6/2016.
 */
angular
    .module('iLyra',['datatables'])
    .controller('customerController',function($scope,customerService, DTOptionsBuilder){
        $scope.customers = [];
        customerService.getCustomers().success(function (data) {
            $scope.customers = data.content;
        }).error(function(error){
            console.log(error);
        });
        $scope.newCustomer = {};
        $scope.addCustomer = function(newCustomer){
            newCustomer.account.active = true;
            if(newCustomer.sex === 'male'){
                newCustomer.sex =  true;
            }else{
                newCustomer.sex = false;
            }
            if(newCustomer.birthday === ''){
                newCustomer.birthday = null;
            }

            customerService.aadCustomer(newCustomer).success(function (data) {
                $scope.customers = data.content;
            }).error(function(error){
                console.log(error);
            });
        };
    });