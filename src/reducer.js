export const initialState = {
  Cart: [],
  user: null,
};

//Reducer: manipulation of the data layer
//Selector
//reduce an array to a single value
export const getCartTotal = (Cart) =>
  Cart?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "Add_to_Cart":
      return {
        ...state,
        Cart: [...state.Cart, action.item],
      };
    case "REMOVE_FROM_CART":
      const index = state.Cart.findIndex(
        (CartItem) => CartItem.id === action.id
      );
      let newCart = [...state.Cart];

      //found it
      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn(
          "Cant remove product(id: ${action.id}) as its not in Cart!"
        );
      }

      return {
        ...state,
        Cart: newCart,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
