(function(){
    'use strict';
    angular.module('NameCalculator',[])
    .controller('NameCalculatorController',function($scope){
        $scope.name = "Shreya";
        $scope.totalValue = 0;
        $scope.displayNumeric = function(){
            var totalNameValue = calculateNameForString($scope.name);
            $scope.totalValue = totalNameValue;
        }
        function calculateNameForString(string){
            var totalStringValue = 0;
            for(var i=0;i<string.length;i++){
                totalStringValue = totalStringValue + string.charCodeAt(i);
            }
           return totalStringValue;     
        }
    });
})();