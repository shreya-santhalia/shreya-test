(function(){
    'use strict';
     angular.module('LunchCheck',[])
     .controller('LunchCheckController',LunchCheckController);
      LunchCheckController.$inject = ['$scope'];
      function LunchCheckController($scope){
          $scope.message1 = '';
          $scope.checkItem = function(){
             var list = $scope.items;
              if(list == undefined || list.length === 0){
                   $scope.message1 = 'Please enter data first';
                    $scope.color = 'red';
              }
              else
              {
                  var items  = list.split(",");
                  var count = 0;
                  for(var i=0;i<items.length;i++){
                      if(items[i].trim().length !== 0){
                          count++;
                      }
                  }
                  if(count>0 && count <= 3){
                      $scope.message1 = 'Enjoy!';
                      $scope.color = 'green';
                  }
                  else if(count > 3) {
                      $scope.message1 = 'Too much!';
                      $scope.color = 'green';
                  }
                  
              }
          }
      };    
})();