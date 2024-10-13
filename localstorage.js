console.log('hello from js');

const addProduct = () => {
  const productName = document.getElementById('product_name');
  const productQuantity = document.getElementById('product_quantity');
  const productField = productName.value;
  const productQuantityField = productQuantity.value;

  productName.value = '';
  productQuantity.value = '';
  console.log(productField,productQuantityField );
  
}