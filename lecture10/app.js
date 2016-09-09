(function(){
    angular.module('MsgApp',[])
    .controller('MsgController',['$scope',function($scope){
        $scope.name = "Shreya";
        $scope.sayMsg = function(){
            return "Ragav likes to eat healthy snacks at night";
        };
        $scope.foodlike = "cake";
        $scope.feedShreya = function(){
             $scope.foodlike = 'biryani';
        };
    }]);
})();