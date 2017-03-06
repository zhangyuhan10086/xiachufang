/**
 * Created by Administrator on 2017/2/5 0005.
 */
myapp.controller("answers",function($scope,$ionicHistory,$http){
    $scope.goBack=function(){
        $ionicHistory.goBack();
    };
    var url="js/hotquestion.json";
    $http.get(url).success(function(result){
        $scope.hot=result;
    });
    var url2="js/qu.json";
    $http.get(url2).success(function(result){
        $scope.qu=result;
    });
    var url3="js/newqu.json";
    $http.get(url3).success(function(result){
        $scope.newqu=result;
    })
})