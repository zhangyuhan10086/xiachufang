
myapp.controller("homeCtrl",function($scope,$http){
    var url="js/homedata.json";
    $http.get(url).success(function(result){
        $scope.homedata=result
    })

})