export default {
  add_cart_counter(state, payload){
    payload.count++;
  },
  add_to_cart(state,payload){
    state.cartList.push(payload);
  },
}
