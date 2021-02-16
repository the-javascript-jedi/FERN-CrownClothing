export const addItemToCart = (cartItems, cartItemToAdd) => {
  // the array is searched to find if the id of the item to be added is already present in the array
  //if the id exists in the array the present id is displayed else undefined will be displayed
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );
  // if the item already exists we increment the quantity field else we simply return the cartItem without any modification
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  // if cartItem is not already existing add the cartItem and provide a base quantity 1
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
