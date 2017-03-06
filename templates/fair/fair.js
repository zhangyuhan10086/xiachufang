myapp.controller("fair",function($scope,$http,cartService,$ionicPopup,$timeout){
    var url="js/hotThem.json";
    $http.get(url).success(function(result){
        $scope.hotThem=result;
        $scope.totalWidth=function(){
            var num=$scope.hotThem.length;
            //单个格子宽度 加上边框和间隙后
            var width=130;
            return width*num+"px";
        };
    });
    $http.get("js/products.json").success(function(result){
        $scope.products=result;
    });
    $http.get("js/fairHot.json").success(function(re){
        $scope.fairHot=re;

    });

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
// 在一个按钮上(或任何其它目标上),触发单击事件
    $scope.showPopup = function () {
        $scope.data = {};

        // 一个精心制作的自定义弹出窗口
        // .show()方法是构造一个带输入框的对话框，可接收用户输入
        var myPopup = $ionicPopup.show({
            template: '<input type="password" ng-model="data.wifi">',
            title: '请输入兑换码',
            subTitle: '兑换码为10位数字',
            scope: $scope, // 将父控制器的$scope作为对话框子页面的scope
            buttons: [
                {text: '取消'},   // "取消"按钮
                {                   // "确认"按钮
                    text: '<b>保存</b>',
                    type: 'button-positive',
                    onTap: function (e) {   // 单击确认按钮时执行的代码
                        if (!$scope.data.wifi) {
                            // 不允许用户关闭，除非输入wifi密码
                            e.preventDefault();
                        } else {
                            return $scope.data.wifi;
                        }
                    }
                }
            ]
        });

        // 参数res就是在输入对话框事输入的内容
        myPopup.then(function (res) {
            // 参数res是用户输入的wifi密码

        });

        $timeout(function () {
            myPopup.close(); // 5秒后关闭输入框
        }, 5000);
    };

})