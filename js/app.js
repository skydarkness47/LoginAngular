
var app = angular.module('ABMangularPHP', []);




app.controller('controlAlta', function($scope, $http) {
  $scope.persona={};

//inicio las variables
 
  $scope.enviar = function(){
         $http({
    url: 'datos.html', 
    method: "POST",
    params: {persona: $scope.persona}
            });   
        }

     $scope.ver =function()
    {
      $scope.datos=$scope.persona;        
    }
     
          




      
  
  
    /*
    $http.post('PHP/nexo.php', { datos: {accion :"insertar",persona:$scope.persona}})
    .then(function(respuesta) {       
         //aca se ejetuca si retorno sin errores        
         console.log(respuesta.data);

    },function errorCallback(response) {        
        //aca se ejecuta cuando hay errores
        console.log( response);           
    });

  */

  
});


    

