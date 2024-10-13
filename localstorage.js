console.log('hello from js');

const addProduct = () => {
  const productName = document.getElementById('product_name');
  const productQuantity = document.getElementById('product_quantity');
  const product = productName.value;
  const quantity = productQuantity.value;

  productName.value = '';
  productQuantity.value = '';
  console.log(product,quantity );
  displayProduct(product, quantity)
  saveToLocalStorage(product, quantity)
}

const displayProduct = (product, quantity) =>{
  const productContainer = document.getElementById('product_container');
  const li = document.createElement('li');
  li.innerText =`${product}: ${quantity}`;
  productContainer.appendChild(li)
}

// get stored item from local storage ---if cart found with value as cart it  will return. if cart found with empty it will return empty cart;
const getStoredShoppingCart = () => {
  const storedCart = localStorage.getItem('cart');

  let cart = {}
  if(storedCart) {
    cart = JSON.parse(storedCart)
  }
  return cart;

}


const saveToLocalStorage = (product, quantity) => {

  const cart = getStoredShoppingCart();
  cart[product] = quantity;
  const cartStringified = JSON.stringify(cart)
  localStorage.setItem('cart', cartStringified)

}


const displayProductsFromLocalstorage = () => {
  const savedCart = getStoredShoppingCart();
  for(const product in savedCart){
    const quantity = savedCart[product]
   displayProduct(product, quantity)
   console.log(savedCart);
  }
}

displayProductsFromLocalstorage()
