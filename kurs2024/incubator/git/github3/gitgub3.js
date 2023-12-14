document.addEventListener("DOMContentLoaded", function () {
    const products = document.querySelectorAll(".product-card");
    const cartContainer = document.querySelector(".cart-container");
    const closeCartBtn = document.querySelector(".close-cart");
    const cartContent = document.querySelector(".cart-content");
    const itemCount = document.getElementById("item-count");
    const totalPrice = document.getElementById("total-price");
    const buyButton = document.getElementById("buy-button");
    const cartIcon = document.getElementById("cart-icon");
    const cartCount = document.getElementById("cart-count");

    let cart = [];

    // Event listeners
    products.forEach(product => {
        const addToCartBtn = product.querySelector(".add-to-cart");
        addToCartBtn.addEventListener("click", () => addToCart(product));
    });

    closeCartBtn.addEventListener("click", () => toggleCart(false));

    // Functions
    function addToCart(product) {
        const productId = product.dataset.id;
        const quantityInput = product.querySelector("input[type='number']");
        const quantity = parseInt(quantityInput.value);

        const existingItemIndex = cart.findIndex(item => item.id === productId);

        if (existingItemIndex !== -1) {
            // Update quantity if the item is already in the cart
            cart[existingItemIndex].quantity = quantity;
        } else {
            const newItem = {
                id: productId,
                name: product.querySelector("h2").textContent,
                price: parseFloat(product.querySelector(".price").textContent.replace("$", "")),
                quantity: quantity
            };

            cart.push(newItem);
        }

        updateCart();
        updateCartIcon();
        toggleCart(true);
    }

    function updateCart() {
        cartContent.innerHTML = "";
        let totalCount = 0;
        let totalAmount = 0;

        cart.forEach(item => {
            const itemDiv = document.createElement("div");
            itemDiv.classList.add("cart-item");

            const itemName = document.createElement("p");
            itemName.textContent = `${item.name} x${item.quantity}`;
            itemDiv.appendChild(itemName);

            const itemPrice = document.createElement("p");
            itemPrice.textContent = `$${(item.price * item.quantity).toFixed(2)}`;
            itemDiv.appendChild(itemPrice);

            const removeBtn = document.createElement("button");
            removeBtn.textContent = "Удалить";
            removeBtn.addEventListener("click", () => removeItem(item.id));
            itemDiv.appendChild(removeBtn);

            cartContent.appendChild(itemDiv);

            totalCount += item.quantity;
            totalAmount += item.price * item.quantity;
        });

        itemCount.textContent = totalCount;
        totalPrice.textContent = totalAmount.toFixed(2);

        buyButton.addEventListener("click", buyItems);
    }

    function removeItem(itemId) {
        cart = cart.filter(item => item.id !== itemId);
        updateCart();
        updateCartIcon();
    }

    function buyItems() {
        alert("Заказ успешно оформлен!");
        cart = [];
        updateCart();
        updateCartIcon();
        toggleCart(false);
    }

    function toggleCart(show) {
        if (show) {
            cartContainer.style.right = "0";
        } else {
            cartContainer.style.right = "-300px";
        }
    }

    function updateCartIcon() {
        let totalCount = 0;

        cart.forEach(item => {
            totalCount += item.quantity;
        });

        cartCount.textContent = totalCount;
    }
});
