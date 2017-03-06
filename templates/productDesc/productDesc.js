/**
 * Created by Administrator on 2017/2/7 0007.
 */
myapp.controller("productDesc",function($scope,$http,$ionicHistory,$stateParams,cartService){
    $scope.goBack=function(){
        $ionicHistory.goBack();
    };
    var url="js/productDesc.json";
    $http.get(url).success(function(result){
        $scope.productDescDate=result;
        //解析参数，查找匹配商品显示
        $scope.p={};
        angular.forEach($scope.productDescDate,function(product){
            if(product.name==$stateParams.name){
                $scope.p=product;
                return;
            }
        });
    });
    // 传入一个整数n，返回一个长度为n的数组
    $scope.getNumber = function(number){
        return new Array(number);
    };

    //购物
    $scope.add=function(product,number){
        cartService.add(product,number);
    };
    //拿到购物车里的商品
    $scope.cart=cartService.findAll();
    //计算商品数量
    $scope.numberAdd=function(){
        var number_total=0;
        for(var i=0; i<$scope.cart.length; i++){
            number_total+=$scope.cart[i].number;
        };
        return number_total;
    };
});