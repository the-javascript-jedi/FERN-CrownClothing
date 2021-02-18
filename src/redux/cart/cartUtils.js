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
//reduce quantity by 1 if quantity is already 1 – remove the item
// remove item from array, if count of item removed is less than 1 we need to delete the item from the checkout screen
// we need to pass the cartItems to check if the cartItemToRemove is inside it
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  // the array is searched to find if the id of the item to be added is already present in the array
  //if the id exists in the array the present id is displayed else undefined will be displayed
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );
  // remove the id if existing quantity is 1
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }
  // if quantity is more than 1 we need to decrease the quantity by 1 and keep every other cartItem the exact same because they don't need to be modified
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? // if the id is the same we need to decrease the quantity else we return same cartItem
        { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
