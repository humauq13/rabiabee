// Function to set a cookie
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

// Function to get a cookie value
function getCookie(name) {
    const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
    return match ? match[2] : null;
}

// Retrieve cart data from the cookie (if available)
const storedCart = getCookie('cart');
const cart = storedCart ? JSON.parse(storedCart) : { items: [], total: 0 };

function addToCart(productName, price) {
    cart.items.push({ name: productName, price: price });
    cart.total += price;
    updateCartDisplay();
    saveCartToCookie();
}

function removeFromCart(index) {
    const removedItem = cart.items.splice(index, 1)[0];
    cart.total -= removedItem.price;
    updateCartDisplay();
    saveCartToCookie();
}

function updateCartDisplay() {
    const cartItemsElement = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');

    // Clear the current content
    cartItemsElement.innerHTML = '';

    // Populate the cart items list
    cart.items.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `${item.name} - $${item.price.toFixed(2)}
                              <span class="remove-button" onclick="removeFromCart(${index})">Remove</span>`;
        cartItemsElement.appendChild(cartItem);
    });

    // Update the total amount
    cartTotalElement.textContent = cart.total.toFixed(2);
}

function saveCartToCookie() {
    // Save the current cart data to a cookie (expires in 7 days)
    setCookie('cart', JSON.stringify(cart), 7);
}
