'use strict';

/**
 * @ngdoc function
 * @name websiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the websiteApp
 */
var app = angular.module('websiteApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
app.controller('submitController', ['$scope', 'StateConfiguration', function ($scope, StateConfiguration) {
  var vm = $scope;
  console.log("scope", vm);
  vm.listOfStates = [];
  vm.submit = function () {
    console.log(vm);
    vm.listOfStates.push(StateConfiguration.createNew(vm.state.cd, vm.state.server, vm.state.enabled));
    var test = StateConfiguration.createNew(vm.state.cd, vm.state.server, vm.state.enabled);
    console.log(test.cd);
    console.log(vm.listOfStates);
  }
}]);

