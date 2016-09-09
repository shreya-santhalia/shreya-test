(function(){
    'use strict';
    angular.module('DIApp',[])
    .controller('DIController',function($scope,$filter){
        $scope.name = 'Shreya';
        $scope.upCase = function(){
            $scope.name = $filter('uppercase')($scope.name);
        }
       // console.log(DIController.toString());
    });    
})();