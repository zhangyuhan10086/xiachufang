/**
 * Created by hxsd on 2017/1/20.
 */
myapp.controller("person",function($http,$scope){
    var url="js/like.json";
    $http.get(url).success(function(result){
        $scope.like=result;
    });
})