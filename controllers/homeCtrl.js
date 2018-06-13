angular
    .module('app')
    .controller('homeCtrl', ['$scope', 'friends', function ($scope, friends) {
        $scope.title = "Home";
        $scope.friends = friends;
        $scope.items = ['home', 'about', 'contact'];
        $scope.selectedValue = 'about';

        $scope.save = function () {
            alert(JSON.stringify($scope.friends));
            $http.post('/api/friends', friends);
        };
    }]);