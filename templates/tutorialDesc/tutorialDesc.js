/**
 * Created by Administrator on 2017/2/1 0001.
 */
myapp.controller("tutorialDesc",function($scope,$ionicHistory,$stateParams,$http){
    $scope.goBack=function(){
        $ionicHistory.goBack();
    };
    var url="js/tutorialdata.json";

    $http.get(url).success(function(result){
        $scope.tutorialdata=result;
        //解析参数，查找匹配商品显示
        $scope.jiaocheng={};
        angular.forEach($scope.tutorialdata,function(tutorial){
            if(tutorial.title==$stateParams.title){
                $scope.jiaocheng=tutorial;
                return;
            }
        });
        $scope.totalWidth=function(){
            var num=$scope.jiaocheng.does_this.length;
            //单个格子宽度 加上边框和间隙后
            var width=232;
            return width*num+"px";
        };
    });
})