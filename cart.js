const cart_products_counter = document.querySelector('#counter'); 
const products_list = document.querySelector('#products_list');
const products_list_in_cart = document.querySelector('#products_list_in_cart');
const totalPrice = document.querySelector('#totalPrice');


let productsInCart = 0;
let totalAmount = 0;


products_list.addEventListener('click' , e => {
    if (e.target.classList.contains('addToCartBtn')) {
        const product = e.target.parentElement;
        const product_name = product.children[0].textContent;
        const product_price = product.children[1].textContent;
        const product_image = product.previousElementSibling.attributes.src.value;
        addProductToCart( product_name , product_price , product_image);
    }
});

const addProductToCart = (product_name , product_price , product_image) => {

    cart_products_counter.textContent = ++productsInCart;
    
    totalAmount += parseInt(product_price.replace('Price - ','').trim());
    totalPrice.innerText = `Total Amount = ${totalAmount}$`;

    const product = document.createElement('li');
    product.className = 'd-flex justify-content-between align-items-center mb-3';
    product.innerHTML = `<img src="${product_image}" class="product_image" width="50rem" alt="">
                        <h6 class="product_name">${product_name}</h2>
                        <h6 class="product_price">${product_price}</h6>
                        <i class="bi bi-dash-circle mb-2" style="font-size: 1.3rem"></i>`;

    products_list_in_cart.append(product);

    const removeItem = product.querySelector('i.bi-dash-circle');
    removeItem.addEventListener('click' , () => {
        product.remove();
        cart_products_counter.textContent = --productsInCart;

        totalAmount -= parseInt(product_price.replace('Price - ','').trim());
        totalPrice.innerText = `Total Amount = ${totalAmount}$`;
    })
} 


