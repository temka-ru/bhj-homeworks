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

products.forEach(product => {
    const addButton = product.querySelector('.product__add');
    addButton.addEventListener('click', addProductToCart);
});

function removeProductFromCart(event) {
    const cartProduct = event.target.closest('.cart__product');
    cartProduct.remove();
}

cartProducts.addEventListener('click', function(event) {
    if (event.target.classList.contains('cart__product-image')) {
        removeProductFromCart(event);
    }
});

cartProducts.addEventListener('click', function(event) {
        const cartProduct = event.target.closest('.cart__product');
        const cartProductCount = cartProduct.querySelector('.cart__product-count');
        const currentQuantity = parseInt(cartProductCount.textContent);
    
        if (event.target.classList.contains('product__quantity-control_dec')) {
        if (currentQuantity > 1) {
            cartProductCount.textContent = currentQuantity - 1;
        }
        }
    
        if (event.target.classList.contains('product__quantity-control_inc')) {
            cartProductCount.textContent = currentQuantity + 1;
        }
});
  
products.forEach(product => {
    const quantityControls = product.querySelectorAll('.product__quantity-control');
    const quantityValue = product.querySelector('.product__quantity-value');
  
    quantityControls.forEach(control => {
        control.addEventListener('click', function(event) {
            const currentQuantity = parseInt(quantityValue.textContent);
    
            if (control.classList.contains('product__quantity-control_dec')) {
                if (currentQuantity > 1) {
                    quantityValue.textContent = currentQuantity - 1;
                }
            }
    
            if (control.classList.contains('product__quantity-control_inc')) {
                quantityValue.textContent = currentQuantity + 1;
            }
        });
    });
});