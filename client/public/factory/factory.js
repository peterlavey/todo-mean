angular.module('factory', [])
.factory('mainFactory', ['$http', ($http)=>{
  return{
    getAll:()=>$http.get('http://localhost:3001/api/task')
  }
}])
