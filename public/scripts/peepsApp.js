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
    vm.whereMyPeepsAt();
  }; //end newPeep

  vm.whereMyPeepsAt = function() {
    console.log('in whereMyPeepsAt');
    PeepsService.getPeeps().then(function() {
      console.log('back in controller:', PeepsService.allMyPeeps);
      vm.returnedPeeps = PeepsService.allMyPeeps.data;
    });
  }; //end whereMyPeepsAt

  vm.deletePeep = function(peepsId) {
    console.log(peepsId);
    PeepsService.removePeep(peepsId).then(function(){
      console.log('back in controller from delete:', PeepsService.allMyPeeps);
      vm.whereMyPeepsAt();
    });
  };

}); // end controller
