// Пример данных о товарах (можно заменить на реальные данные из вашей базы)
const productsData = {
    all: [
        { id: 1, name: 'Товар magazin', price: 20.99 },
        { id: 2, name: 'Товар 2', price: 34.99 },
        { id: 3, name: 'Товар 3', price: 15.99 },
    ],
    'kids-clothing': [
        { id: 4, name: 'Детская куртка', price: 29.99 },
        { id: 5, name: 'Детские шорты', price: 14.99 },
    ],
    electronics: [
        { id: 6, name: 'Смартфон', price: 299.99 },
        { id: 7, name: 'Ноутбук', price: 799.99 },
    ],
    'ai-code': [
        { id: 8, name: 'Готовый код magazin', price: 49.99 },
        { id: 9, name: 'Готовый код 2', price: 79.99 },
    ],
    'used-auction': [
        { id: 10, name: 'Б.у. товар magazin', price: 9.99 },
        { id: 11, name: 'Б.у. товар 2', price: 19.99 },
    ],
};

// Хранилище для корзины и избранного, связанное с IP клиента
let userStorage = {};

// Текущая активная категория
let activeCategory = 'all';

function renderMenu() {
    const menu = document.getElementById('menu');
    const menuItems = menu.getElementsByTagName('a');

    for (let i = 0; i < menuItems.length; i++) {
        const category = menuItems[i].getAttribute('onclick').split("'")[1];
        if (category === activeCategory) {
            menuItems[i].classList.add('active');
        } else {
            menuItems[i].classList.remove('active');
        }
    }
}

// Добавлены классы для иконок внутри карточек товаров
function renderProducts() {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = '';

    productsData[activeCategory].forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
      <h3>${product.name}</h3>
      <p>${product.price} руб.</p>
      <div class="product-actions">
        <div class="action cart-icon" onclick="addToCart(${product.id})">🛒</div>
        <div class="action favorites-icon" onclick="addToFavorites(${product.id})">❤️</div>
      </div>
    `;
        productsContainer.appendChild(productElement);
    });
}


function changeCategory(category) {
    activeCategory = category;
    renderMenu();
    renderProducts();
}

// Функция для добавления товара в корзину
function addToCart(productId) {
    userStorage.cart = userStorage.cart || {};
    userStorage.cart[productId] = (userStorage.cart[productId] || 0) + 1;
    updateHeaderInfo();
}

// Функция для добавления товара в избранное
function addToFavorites(productId) {
    userStorage.favorites = userStorage.favorites || {};
    userStorage.favorites[productId] = true;
    updateHeaderInfo();
}

// Функция для отображения корзины
function viewCart() {
    alert(`Содержимое корзины: ${JSON.stringify(userStorage.cart)}`);
}

// Функция для отображения избранного
function viewFavorites() {
    alert(`Избранные товары: ${JSON.stringify(userStorage.favorites)}`);
}

// Функция для обновления информации в хедере
function updateHeaderInfo() {
    const cartCountElement = document.getElementById('cart-count');
    const favoritesCountElement = document.getElementById('favorites-count');
    cartCountElement.textContent = getCartTotal();
    favoritesCountElement.textContent = getFavoritesCount();
}

// Функция для получения общего количества товаров в избранном
function getFavoritesCount() {
    return Object.keys(userStorage.favorites || {}).length;
}

// Функция для получения общего количества товаров в корзине
function getCartTotal() {
    return Object.values(userStorage.cart || {}).reduce((acc, count) => acc + count, 0);
}

// Вызываем функцию отображения товаров при загрузке страницы
window.onload = () => {
    renderMenu();
    renderProducts();
    updateHeaderInfo();
};