angular
    .module('iLyra')
    .service('customerService', function($http){
        this.getCustomers = function(){
            return $http.get('http://greenlightgv.dyndns.org:8080/customer');
        };
        this.aadCustomer = function(customer){
            return $http.post('http://greenlightgv.dyndns.org:8080/customer/',customer);
        }
    });