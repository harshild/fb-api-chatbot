'use strict';

angular.module('mainApp', [])
    .controller('mainCtrl', function ($scope, $http) {

        $scope.reqInProgress = false;
        $scope.dataRows = [];

        $scope.getTableData = function () {
            $scope.reqInProgress = true;
            $http({
                method: 'GET',
                url: '/getTableData'
            }).
                success(function (res) {
                    $scope.dataRows = res;
                    $scope.reqInProgress = false;
                }).
                error(function (res) {
                    console.log("Service Not Reachable")
                    $scope.reqInProgress = false;
                });
        }

        $scope.getTableData();
    });