const getCartPrice = (productsInCart) => {
    const initialPrice = 0;
    const totalCartPrice = productsInCart.reduce((acc, cur) => acc + cur, initialPrice)
    return totalCartPrice;
}
