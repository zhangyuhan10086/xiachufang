/**
 * Created by Administrator on 2017/2/10 0010.
 */
myapp.controller("cart",function($scope,$http,$ionicHistory,cartService){
    $scope.goBack=function(){
        $ionicHistory.goBack();
    };

    //拿到购物车里的商品
    $scope.cart=cartService.findAll();
    //删除商品
    $scope.remove=function(name){
        cartService.remove(name);
    };
    //计算商品数量
    $scope.numberAdd=function(){
        var number_total=0;
        for(var i=0; i<$scope.cart.length; i++){
            if($scope.cart[i].product.check==true){
                number_total+=$scope.cart[i].number;
            };
        };
        return number_total;
    };
    //计算商品总价
    $scope.moneyAdd=function(){
        var money_total=0;
        for(var i=0; i<$scope.cart.length; i++){
            if($scope.cart[i].product.check==true){
                money_total+=$scope.cart[i].product.price*$scope.cart[i].number;
            };
        };
        return money_total;
    };
    //加减按钮选择数量
    $scope.countAdd=function(product){
        cartService.add(product);
    };
    $scope.countSubt=function(product){
        cartService.subt(product);
    };
    //全选
    $scope.checkAll=true;
    $scope.checkAllrun=function(){
        if($scope.checkAll==false){
            for(var i=0; i<$scope.cart.length; i++){
                $scope.cart[i].product.check=false;
            };
        }else{
            for(var i=0; i<$scope.cart.length; i++){
                $scope.cart[i].product.check=true;
            };
        };
    };
    //判断全选当里面有一个不是选中时false和全部选中时true
    $scope.ctrlNum=0;
    $scope.$watch("cart",function(newValue){
        for(var i in newValue){
            if(newValue[i].product.check==true){
                $scope.ctrlNum++;
            };
        };
        if($scope.ctrlNum==$scope.cart.length){
            $scope.checkAll=true;
            $scope.ctrlNum=0;
        }else{
            $scope.checkAll=false;
            $scope.ctrlNum=0;
        }
    },true);
    //删除选中的商品
    $scope.dele=function(){
        var deleProducts=[];
        for(var i=0; i<$scope.cart.length; i++){
            if($scope.cart[i].product.check==true){
                deleProducts.push($scope.cart[i]);
            };
        };
        for(var j=0; j<deleProducts.length; j++){
            $scope.remove(deleProducts[j].product.name)
            console.log(deleProducts[j].product.name);
        };
    };
    //计算勾选的商品种类数量
    $scope.checkCount=function(){
        var checkNum=0;
        for(var i=0; i<$scope.cart.length; i++){
            if($scope.cart[i].product.check==true){
                checkNum++;
            };
        };
        return checkNum;
    };
    //编辑按钮
    $scope.edit="编辑";
    $scope.edit_swidth=true;
    $scope.edit_click=function(){
        if($scope.edit_swidth==true){
            $scope.edit="完成";
            $scope.edit_swidth=false;
            return $scope.edit;
        };
        if($scope.edit_swidth==false){
            $scope.edit="编辑";
            $scope.edit_swidth=true;
            return $scope.edit;
        }
    }
})