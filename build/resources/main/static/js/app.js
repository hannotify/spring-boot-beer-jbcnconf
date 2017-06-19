var beerApp = angular.module('beer', []);

beerApp.controller('MainController', function($http, $window) {
    var vm = this;

    vm.activeBeer;
    vm.beers = [];
    vm.showList = true;

    vm.add = function() {
        $http.put('/rest/beer', {
            name: vm.activeBeer.name,
            style: vm.activeBeer.style,
            abv: vm.activeBeer.abv
        }).then(function(response) {
            $window.location.reload();
        });
    };

    vm.delete = function(beer) {
        $http.delete('/rest/beer', {
            params: { beerId: beer.id }
        }).then(function(response) {
            $window.location.reload();
        });
    };

    vm.goToAdd = function() {
        vm.activeBeer = null;
        vm.showList = false;
    };

    vm.goToEdit = function(beer) {
        vm.activeBeer = beer;
        vm.showList = false;
    };

    vm.list = function() {
        $http.get('/rest/beer').then(function(response) {
            vm.beers = response.data;
        });
    };

    vm.save = function() {
        if (vm.activeBeer.id) {
            vm.update();
        } else {
            vm.add();
        }
    };

    vm.update = function() {
        $http.post('/rest/beer', {
            id: vm.activeBeer.id,
            name: vm.activeBeer.name,
            style: vm.activeBeer.style,
            abv: vm.activeBeer.abv
        }).then(function(response) {
            $window.location.reload();
        });
    };
});