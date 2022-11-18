angular.module('myApp', ['btford.modal']).

// let's make a modal called `myModal`
factory('myModal', function (btfModal) {
  return btfModal({
    controller: 'MyModalCtrl',
    controllerAs: 'modal',
    templateUrl: 'my-modal.html'
  });
}).

// typically you'll inject the modal service into its own
// controller so that the modal can close itself
controller('MyModalCtrl', function (myModal) {
  this.closeMe = myModal.deactivate;
}).

controller('MyCtrl', function (myModal) {
  this.showModal = myModal.activate;
});