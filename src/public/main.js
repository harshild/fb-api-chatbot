'use strict';

angular.module('mainApp', [])
    .controller('mainCtrl', function ($scope, $http) {
        $scope.name = "Harshil";

        $scope.dataRows = [{
            "Key1": "Value1",
            "Key2": "Value2",
            "Key3": "Value3",
            "Key4": "Value4",
            "Key5": "Value5",
            "Key6": "Value6",
            "Key7": "Value7"
        },
            {
                "Key1": "Value11",
                "Key2": "Value22",
                "Key3": "Value33",
                "Key4": "Value44",
                "Key5": "Value55",
                "Key6": "Value66",
                "Key7": "Value77"
            }
        ];

        $scope.getTableData = function () {
            $http({
                method: 'GET',
                url: '/getTableData'
            }).
                success(function (res) {
                    $scope.dataRows = res;
                }).
                error(function (res) {
                    console.log("Service Not Reachable")
                });
        }

         $scope.getTableData();

    });