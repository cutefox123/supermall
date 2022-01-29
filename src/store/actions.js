export default {
  // 加入购物车
  addCart(context, payload){
    return new Promise((resolve, reject)=>{
      //1.查找之前数组中是否含有该商品
      let oldProduct = context.state.cartList.find((item)=> {
        return item.iid === payload.iid;
      });
      //2. 判断oldProduct之前是否存在
      if(oldProduct){
        context.commit('add_cart_counter', oldProduct);
        // resolve('成功添加购物车count+1');
      }else {
        payload.count = 1;
        context.commit('add_to_cart', payload);
        // resolve('成功添加购物车');
      }
    })
  }
}
