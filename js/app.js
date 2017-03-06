/**
 * Created by hxsd on 2017/1/18.
 */
var myapp=angular.module("myapp",["ionic"]);
//影藏选项卡
myapp.directive('hideTabs', function($rootScope) {
    return {
        restrict: 'A',
        link: function(scope, element, attributes) {
            scope.$on('$ionicView.beforeEnter', function() {
                scope.$watch(attributes.hideTabs, function(value){
                    $rootScope.hideTabs = value;
                });
            });

            scope.$on('$ionicView.beforeLeave', function() {
                $rootScope.hideTabs = false;
            });
        }
    };
});
myapp.config(function($stateProvider,$urlRouterProvider,$ionicConfigProvider){
    //$ionicConfigProvider.backButton.text("");
    //$ionicConfigProvider.backButton.previousTitleText("");
    $ionicConfigProvider.tabs.position("bottom");
    $stateProvider
        .state("tabs",{
            url:"/tabs",
            abstract:true,
            templateUrl:"templates/tabs/tabs.html"
        })
        //二级导航
        .state("tabs.home",{
            url:"/home",
            views:{"tab-home":{
                templateUrl:"templates/home/home.html",
                controller:"homeCtrl"
            }}
        })
        .state("tabs.guide",{
            url:"/guide",
            views:{"tab-home":{
                templateUrl:"templates/guide/guide.html"
            }}
        })
        .state("tabs.fair",{
            url:"/fair",
            views:{"tab-fair":{
                templateUrl:"templates/fair/fair.html",
                controller:"fair"
            }}
        })
        .state("tabs.email",{
            url:"/email",
            views:{"tab-email":{
                templateUrl:"templates/email/email.html"
            }}
        })
        .state("tabs.person",{
            url:"/person",
            views:{"tab-person":{
                templateUrl:"templates/person/person.html",
                controller:"person"
            }}
        })
        //三级导航
        .state("tabs.tutorialDesc",{
            url:"/tutorialDesc?:title",
            views:{"tab-home":{
                templateUrl:"templates/tutorialDesc/tutorialDesc.html",
                controller:"tutorialDesc"
            }}
        })
        .state("tabs.curePavo",{
            url:"/curePavo",
            views:{"tab-home":{
                templateUrl:"templates/curePavo/curePavo.html",
                controller:"curePavo"
            }}
        })
        .state("tabs.answers",{
            url:"/answers",
            views:{"tab-home":{
                templateUrl:"templates/answers/answers.html",
                controller:"answers"
            }}
        })
        .state("productDesc",{
            url:"/productDesc?:name",
            templateUrl:"templates/productDesc/productDesc.html",
            controller:"productDesc"
        })
        .state("tabs.popMenu",{
            url:"/popMenu",
            views:{"tab-home":{
                templateUrl:"templates/popMenu/popMenu.html",
                controller:"popMenu"
            }}
        })
        .state("tabs.classify",{
            url:"/classify?:key_word",
            views:{"tab-fair":{
                templateUrl:"templates/classify/classify.html",
                controller:"classify"
            }}
        })
        .state("tabs.classifySub",{
            url:"/classifySub?:key_word",
            views:{"tab-fair":{
                templateUrl:"templates/classifySub/classifySub.html",
                controller:"classifySub"
            }}
        })
        .state("tabs.cart",{
            url:"/cart",
            views:{"tab-fair":{
                templateUrl:"templates/cart/cart.html",
                controller:"cart"
            }}
        })
    // 默认首页
    $urlRouterProvider.otherwise("/tabs/guide");
});