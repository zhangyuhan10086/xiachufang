/**
 * Created by Administrator on 2017/2/10 0010.
 */
//创建单例
myapp.factory("cartService",function(){
    //造一个购物车
    var cart=[];
    return {
        // 添加商品到购物车:商品对象{name:"方便面",price:8.00}
        // 需要判断购物车的数组中，之前是否已经加入过该商品
        // 如果之前已经加入过，则只需要修改购买数量
        add:function(product,count){
            count==null? count=1 : count=count;
            for(var i=0; i<cart.length; i++){
                var item=cart[i];
                if(product.name==item.product.name){
                    item.number+=count;
                    return;
                };
            };
            cart.push({"product":product,"number":count});
        },
        //减数量
        subt:function(product,count){
            count==null? count=1 : count=count;
            for(var i=0; i<cart.length; i++){
                var item=cart[i];
                if(product.name==item.product.name){
                    item.number-=count;
                    if(item.number<=0){
                        item.number=0;
                    };
                    return;
                };
            };
        },
        remove:function(name){
            for(var i=0; i<cart.length; i++){
                var item=cart[i];
                if(name==item.product.name){
                    cart.splice(i,1);
                }
            }
        },
        // 查询购物车中所有商品的方法
        findAll:function () {
            return cart;
        },
        // 清空购物车
        clear:function () {
            cart.length = 0;
        },
    }
});