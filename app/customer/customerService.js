angular
    .module('iLyra')
    .service('customerService', function($http){
        this.getCustomers = function(){
            return $http.get('http://greenlightgv.dyndns.org:8080/customer');
        };
        this.aadCustomer = function(customer){
            var newCustomer = this.addCustomerDefaultValue(customer);
            return $http.post('http://greenlightgv.dyndns.org:8080/customer/',customer);
        }

        this.addCustomerDefaultValue = function(customer){
            customer.account.active = true;//Default value
            if(customer.account.role === null){
                customer.account.paymentPlan = "Economic"; //Default value
            }
            if(customer.sex === 'male'){
                customer.sex =  true;
            }else{
                customer.sex = false;
            }
            if(customer.birthday === ''){
                customer.birthday = null;
            }
            if(customer.phone === ''){
                customer.phone = null;
            }
            return customer;
        }

        this.getPaymentPlan = function() {
            return $http.get('http://greenlightgv.dyndns.org:8080/plan')
        };
    });