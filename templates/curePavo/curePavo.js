/**
 * Created by Administrator on 2017/2/4 0004.
 */
myapp.controller("curePavo",function($scope,$ionicHistory,$http){
    $scope.goBack=function(){
        $ionicHistory.goBack();
    };
    var url="js/curePavo.json";
    $http.get(url).success(function(result){
        $scope.saleItem=result;
        //解析参数，查找匹配商品显示
    });
})