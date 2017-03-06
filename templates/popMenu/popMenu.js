/**
 * Created by Administrator on 2017/2/9 0009.
 */
myapp.controller("popMenu",function($scope,$http,$ionicHistory){
    $scope.goBack=function(){
        $ionicHistory.goBack();
    };
    $http.get("js/popMenu.json").success(function(result){
        $scope.popDate=result;
        console.log( $scope.popDate[0].title)
    })
})