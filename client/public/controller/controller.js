angular.module('controller', [])
.controller('mainCtrl', ['$scope', 'mainFactory', ($scope, mainFactory)=>{
  $scope.test="wena";

  $scope.tasks=[];
  $scope.task;

  $scope.getTasks=()=>{
    mainFactory.getAll().success((data)=>$scope.tasks=data).error((err)=>console.error('ERROR: No se pudo obtener las tareas :('));
    //$scope.tasks=[{'id':1, 'name':'Tarea1'},{'id':2, 'name':'Tarea2'},{'id':3, 'name':'Tarea3'}];
  }

  $scope.getTasks();
}]);
