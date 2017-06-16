myApp.service('PeepsService', function($http) {
  var sv = this;

  sv.addPeep = function(newPeep) {
    console.log('in addRecord:', newPeep);
    $http({
      method: 'POST',
      url: '/peeps',
      data: newPeep
    });
  };

  sv.getPeeps = function() {
    console.log('in getRecords');
    return $http({
      method: 'GET',
      url: '/peeps',
    }).then(function(response) {
      sv.allMyPeeps = response;
    });
  };

  sv.removePeep = function(id) {
    console.log('In removePeep', id);
    return $http({
      method: 'DELETE',
      url: '/peeps/' + id,
    }).then(function(response){
      console.log('Delete response:', response);
      sv.getPeeps();
    });
  };

});
