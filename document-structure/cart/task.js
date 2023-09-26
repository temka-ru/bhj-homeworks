const products = document.querySelectorAll('.product');
const cartProducts = document.querySelector('.cart__products');

function addProductToCart(event) {
  const product = event.target.closest('.product');
  const productId = product.dataset.id;
  const productTitle = product.querySelector('.product__title').textContent;
  const productImage = product.querySelector('.product__image').src;
  const productQuantity = parseInt(product.querySelector('.product__quantity-value').textContent);
  const cartProduct = document.querySelector(`.cart__product[data-id="${productId}"]`);
  
  if (cartProduct) {
    const cartProductCount = cartProduct.querySelector('.cart__product-count');
    const currentQuantity = parseInt(cartProductCount.textContent);
    const newQuantity = currentQuantity + productQuantity;
    cartProductCount.textContent = newQuantity;
  } else {
    const cartProduct = document.createElement('div');
    cartProduct.classList.add('cart__product');
    cartProduct.dataset.id = productId;
    
    const cartProductImage = document.createElement('img');
    cartProductImage.classList.add('cart__product-image');
    cartProductImage.src = productImage;
    cartProduct.appendChild(cartProductImage);
    
    const cartProductCount = document.createElement('div');
    cartProductCount.classList.add('cart__product-count');
    cartProductCount.textContent = productQuantity;
    cartProduct.appendChild(cartProductCount);
    
    cartProducts.appendChild(cartProduct);
  }
}

function removeProductFromCart(event) {
  const cartProduct = event.target.closest('.cart__product');
  cartProduct.remove();
}

function changeProductQuantity(cartProduct, changeType, quantityValue) {
  const cartProductCount = cartProduct.querySelector('.cart__product-count');
  const currentQuantity = parseInt(cartProductCount.textContent);
  
  if (changeType === 'decrease') {
    if (currentQuantity > 1) {
      cartProductCount.textContent = currentQuantity - 1;
    }
  } else if (changeType === 'increase') {
    cartProductCount.textContent = currentQuantity + 1;
  }
}

products.forEach(product => {
  const addButton = product.querySelector('.product__add');
  addButton.addEventListener('click', addProductToCart);
  
  const quantityControls = product.querySelectorAll('.product__quantity-control');
  const quantityValue = product.querySelector('.product__quantity-value');
  
  quantityControls.forEach(control => {
    control.addEventListener('click', function(event) {
      const currentQuantity = parseInt(quantityValue.textContent);
      
      if (control.classList.contains('product__quantity-control_dec')) {
        if (currentQuantity > 1) {
          quantityValue.textContent = currentQuantity - 1;
        }
      } else if (control.classList.contains('product__quantity-control_inc')) {
        quantityValue.textContent = currentQuantity + 1;
      }
    });
  });
});

cartProducts.addEventListener('click', function(event) {
  if (event.target.classList.contains('cart__product-image')) {
    removeProductFromCart(event);
  } else if (event.target.classList.contains('product__quantity-control')) {
    const cartProduct = event.target.closest('.cart__product');
    const quantityValue = event.target.closest('.cart__product').querySelector('.cart__product-count');
    const changeType = event.target.classList.contains('product__quantity-control_dec') ? 'decrease' : 'increase';
    
    changeProductQuantity(cartProduct, changeType, quantityValue);
  }
});