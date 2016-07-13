angular.module('controller', [])
.controller('mainCtrl', ['$scope', ($scope)=>{
  $scope.test="wena";

  $scope.tasks=[];
  $scope.task;

  $scope.getTasks=()=>{
    $scope.tasks=[{'id':1, 'name':'Tarea1'},{'id':2, 'name':'Tarea2'},{'id':3, 'name':'Tarea3'}];
  }

  $scope.getTasks();
}]);
