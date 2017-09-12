(function() {
  'use strict';
  
  var injectParams = [ '$scope', '$filter', 'transactionService',
      'adminService', 'dateFactory', 'modalService', '$location' ];
  var MECO_PROVIDER = 'meco';
  var VECO_PROVIDER = 'veco';
  
  var ReportController = function($scope, $filter, transactionService,
      adminService, dateFactory, modalService, $location) {
    var vm = this, collection = {}, // model to map to services
    paymentTypes = [ "cash", "check", "online" ], COLLECTION_DAYS = 30;
    
    vm.popup = modalService;
    vm._selected;
    vm.renters = []; // model for ui;
    vm.reportTitle = "Tenants";
    vm.currentPage = "tenant";
//    vm.init();
    getApartments();
    getRenters();
    // set the default active tab
//    vm.isElectricCollection = false;
    vm.isTenant = true;
    
    /** set the tab pages ***/
    vm.setActivePage = function(tab) {
      vm.isApartment = false;
      vm.isElectric= false;
      vm.isWater = false;
      vm.isTenant = false;
      switch (tab) {
      case 'tenant':
        vm.isTenant = true;
//        getApartments();
//        getRenters();
      case 'property':
        vm.isPropertyCollection = true;
        break;
      case 'water':
        vm.isWaterCollection = true;
        break;
      default:
        vm.isElectricCollection = true;
        break;
      
      }
    };
    
    vm.modelOptions = {
      debounce : {
        "default" : 500,
        blur : 250
      },
      getterSetter : true
    };
    
        
    vm.getName = function (renter) {
      var name = "";
      name = renter.lastName + ", " + renter.firstName;
      if (renter.initial) {
        name = name + " " + renter.initial;
      }
      return name;
    };
    
    vm.getRooms = function (aptId) {
      getRooms(aptId);
    }
    
    vm.submit = function() {
      submit();
    };



    /**
     * ************************* functions that need to interact with services
     * *****************
     */
    function getRenters(aptId) {
      adminService.getRentersReport(aptId).then(function (result){ 
        processResponse(result);
      });
    }
    
    function getRooms(aptId) {
      
        adminService.getRoomsReport(aptId).then(function (result){ 
          processResponse(result);
        });
      
    }
    function getApartments() {
      adminService.getApartments().then(function (result) {
        processResponse(result);
      });
    }
    
    /** test centralize response function * */
    function processResponse(response) {
      if(!response) {
        return false;
      }
      console.log(response);
      var data = response.data;
      switch (response.method) {
      case 'getRentersReport':
        vm.renters = data.result;
        if(!vm.renters) {
          getRenters();
        }
        break;
      case 'getApartments':
        vm.apartments = data.result;
        break;
      default:
      }
      
    }
    
  }; //collection controller
  
  ReportController.$inject = injectParams;
  angular.module('rental').controller('ReportController', ReportController);
  
})();