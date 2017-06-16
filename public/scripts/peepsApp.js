var myApp = angular.module('myApp', []);

myApp.controller('WhereMyPeeps', function($http, PeepsService) {
  var vm = this;

  vm.newPeep = function() {
    console.log('in newPeep');
    var peepToAdd = {
      name: vm.nameIn,
      location: vm.locationIn
    }; //end peepToAdd
    PeepsService.addPeep(peepToAdd);
  }; //end newPeep

  vm.whereMyPeepsAt = function() {
    console.log('in whereMyPeepsAt');
    PeepsService.getPeeps().then(function() {
      console.log('back in controller:', PeepsService.allMyPeeps);
      vm.returnedPeeps = PeepsService.allMyPeeps.data;
    });
  }; //end whereMyPeepsAt

}); // end controller
