// document.addEventListener('DOMContentLoaded', function() {
//     // Получаем текущее состояние корзины из localStorage
//     const cart = JSON.parse(localStorage.getItem('cart')) || [];

//     // Проверяем, является ли cart массивом
//     if (Array.isArray(cart)) {
//         // Блокируем кнопки для товаров, которые уже в корзине
//         cart.forEach(item => {
//             const button = document.querySelector(`.js-product[data-id="${item.id}"] .js-buy`);
//             if (button) {
//                 button.querySelector('span:first-child').style.display = 'none';
//                 button.querySelector('span:last-child').style.display = 'inline-block';
//             }
//         });
//     } else {
//         // Если cart не является массивом, создаем новый пустой массив
//         const newCart = [];
//         localStorage.setItem('cart', JSON.stringify(newCart));
//     }

//     // Обработчик клика по кнопке "В корзину"
//     document.querySelectorAll('.js-buy').forEach(button => {
//         button.addEventListener('click', function() {
//             addToCart(this);
//         });
//     });

//     function addToCart(button) {
//         // Получаем информацию о товаре из элементов DOM
//         const productContainer = button.closest('.js-product');
//         const productId = productContainer.getAttribute('data-id');
//         const productName = productContainer.getAttribute('data-product-name');
//         const productSize = productContainer.getAttribute('data-product-size');
//         const productPrice = productContainer.getAttribute('data-product-price');
//         const productHref = productContainer.getAttribute('data-product-href');
//         const productSrc = productContainer.getAttribute('data-product-src');

//         // Создаем объект с информацией о товаре
//         const productInfo = {
//             id: productId,
//             name: productName,
//             size: productSize,
//             price: productPrice,
//             quantity: 1,
//             href: productHref,
//             src: productSrc,
//             totalprice: productPrice
//         };

//         // Получаем текущее состояние корзины из localStorage
//         const cart = JSON.parse(localStorage.getItem('cart')) || [];

//         // Проверяем, есть ли товар уже в корзине
//         const existingProductIndex = cart.findIndex(item => item.id === productId);

//         if (existingProductIndex !== -1) {
//             // Если товар уже в корзине, увеличиваем количество
//             cart[existingProductIndex].quantity++;
//             cart[existingProductIndex].totalprice = cart[existingProductIndex].quantity * productPrice;
//         } else {
//             // Если товара нет в корзине, добавляем его
//             cart.push(productInfo);
//         }

//         // Сохраняем обновленное состояние корзины в localStorage
//         localStorage.setItem('cart', JSON.stringify(cart));

//         // Меняем текст кнопки на "В корзине"
//         button.querySelector('span:first-child').style.display = 'none';
//         button.querySelector('span:last-child').style.display = 'inline-block';
//     }
// });

// // -------------------------------------------------------------------------------------------------

//     document.addEventListener('DOMContentLoaded', function() {
//         // Обработчик клика по кнопке "В корзину"
//         document.querySelectorAll('.js-buy').forEach(button => {
//             button.addEventListener('click', function() {
//                 addToCart(this);
//             });
//         });

//         // Обработчик клика по размерам товара
//         document.querySelectorAll('.js-product-size').forEach(sizeButton => {
//             sizeButton.addEventListener('click', function() {
//                 // Определяем информацию о размере из атрибутов
//                 const productId = this.getAttribute('data-id');
//                 const productSize = this.getAttribute('data-product-size');
//                 const productPrice = this.getAttribute('data-product-price');

//                 // Находим соответствующую карточку товара
//                 const productContainer = document.querySelector(`.js-product[data-id="${productId}"]`);

//                 // Меняем данные в карточке
//                 const priceElement = productContainer.querySelector('.js-goods__card-price span');
//                 const buyButton = productContainer.querySelector('.js-buy');

//                 if (priceElement) {
//                     priceElement.textContent = productPrice + ' ₸';
//                 }

//                 // Меняем состояние кнопки
//                 if (buyButton) {
//                     buyButton.querySelector('span:first-child').style.display = 'inline-block';
//                     buyButton.querySelector('span:last-child').style.display = 'none';
//                 }
//             });
//         });

//         function addToCart(button) {
//             // Ваша текущая функция добавления в корзину
//             // Можете скопировать соответствующий блок из вашего кода
//             // и вставить его здесь
//         }
//     });


// ----------------------2---------------------------------

// document.addEventListener('DOMContentLoaded', function() {
//     // Обработчик клика по кнопке "В корзину"
//     document.querySelectorAll('.js-buy').forEach(button => {
//         button.addEventListener('click', function() {
//             addToCart(this);
//         });
//     });

//     // Обработчик клика по размерам товара
//     document.querySelectorAll('.js-product-size').forEach(sizeButton => {
//         sizeButton.addEventListener('click', function() {
//             // Определяем информацию о размере из атрибутов
//             const productId = this.getAttribute('data-id');
//             const productSize = this.getAttribute('data-product-size');
//             const productPrice = this.getAttribute('data-product-price');

//             // Находим соответствующую карточку товара
//             const productContainer = this.closest('.js-product');

//             // Меняем данные в карточке
//             const priceElement = productContainer.querySelector('.js-goods__card-price span');
//             const buyButton = productContainer.querySelector('.js-buy');


//             if (priceElement) {
//                 priceElement.textContent = `${ productPrice}`;
//             }

//             // Обновляем data-product-size для корректной работы addToCart
//             productContainer.setAttribute('data-product-size', productSize);

//             // Меняем состояние кнопки
//             if (buyButton) {
//                 buyButton.querySelector('span:first-child').style.display = 'inline-block';
//                 buyButton.querySelector('span:last-child').style.display = 'none';
//             }
//         });
//     });

//     function addToCart(button) {
//         // Получаем информацию о товаре из элементов DOM
//         const productContainer = button.closest('.js-product');
//         const productId = productContainer.getAttribute('data-id');
//         const productName = productContainer.getAttribute('data-product-name');
//         const productSize = productContainer.getAttribute('data-product-size');
//         const productPrice = productContainer.getAttribute('data-product-price');
//         const productHref = productContainer.getAttribute('data-product-href');
//         const productSrc = productContainer.getAttribute('data-product-src');

//         // Создаем объект с информацией о товаре
//         const productInfo = {
//             id: productId,
//             name: productName,
//             size: productSize,
//             price: productPrice,
//             quantity: 1,
//             href: productHref,
//             src: productSrc,
//             totalprice: productPrice
//         };

//         // Получаем текущее состояние корзины из localStorage
//         const cart = JSON.parse(localStorage.getItem('cart')) || [];

//         // Проверяем, есть ли товар уже в корзине
//         const existingProductIndex = cart.findIndex(item => item.id === productId);

//         if (existingProductIndex !== -1) {
//             // Если товар уже в корзине, увеличиваем количество
//             cart[existingProductIndex].quantity++;
//             cart[existingProductIndex].totalprice = cart[existingProductIndex].quantity * productPrice;
//         } else {
//             // Если товара нет в корзине, добавляем его
//             cart.push(productInfo);
//         }

//         // Сохраняем обновленное состояние корзины в localStorage
//         localStorage.setItem('cart', JSON.stringify(cart));

//         // Меняем текст кнопки на "В корзине"
//         button.querySelector('span:first-child').style.display = 'none';
//         button.querySelector('span:last-child').style.display = 'inline-block';
//     }
// });

// ---------------------------3------------------------------

// document.addEventListener('DOMContentLoaded', function () {
//     // Обработчик клика по кнопке "В корзину"
//     document.querySelectorAll('.js-buy').forEach(button => {
//         button.addEventListener('click', function () {
//             addToCart(this);
//         });
//     });

//     // Проверяем корзину при загрузке страницы и обновляем статусы кнопок
//     checkCartStatus();

//     // Обработчик клика по размерам товара
//     document.querySelectorAll('.js-product-size').forEach(sizeButton => {
//         sizeButton.addEventListener('click', function () {
//             // Определяем информацию о размере из атрибутов
//             const productSize = this.getAttribute('data-product-size');
//             const productPrice = this.getAttribute('data-product-price');

//             // Находим соответствующую карточку товара
//             const productContainer = this.closest('.js-product');

//             // Меняем данные в карточке
//             const priceElement = productContainer.querySelector('.js-goods__card-price span');
//             const buyButton = productContainer.querySelector('.js-buy');

//             if (priceElement) {
//                 priceElement.textContent = `${productPrice}`;
//             }

//             // Обновляем data-product-size для корректной работы addToCart
//             productContainer.setAttribute('data-product-size', productSize);
//         });
//     });

//     function addToCart(button) {
//         // Получаем информацию о товаре из элементов DOM
//         const productContainer = button.closest('.js-product');
//         const productId = productContainer.getAttribute('data-id');
//         const productName = productContainer.getAttribute('data-product-name');
//         const productSize = productContainer.getAttribute('data-product-size');
//         const productPrice = productContainer.getAttribute('data-product-price');
//         const productHref = productContainer.getAttribute('data-product-href');
//         const productSrc = productContainer.getAttribute('data-product-src');

//         // Создаем объект с информацией о товаре
//         const productInfo = {
//             id: productId,
//             name: productName,
//             size: productSize,
//             price: productPrice,
//             quantity: 1,
//             href: productHref,
//             src: productSrc,
//             totalprice: productPrice
//         };

//         // Получаем текущее состояние корзины из localStorage
//         const cart = JSON.parse(localStorage.getItem('cart')) || [];

//         // Проверяем, есть ли товар уже в корзине
//         const existingProductIndex = cart.findIndex(item => item.id === productId && item.size === productSize);

//         if (existingProductIndex !== -1) {
//             // Если товар уже в корзине, увеличиваем количество
//             cart[existingProductIndex].quantity++;
//             cart[existingProductIndex].totalprice = cart[existingProductIndex].quantity * productPrice;
//         } else {
//             // Если товара нет в корзине, добавляем его
//             cart.push(productInfo);
//         }

//         // Сохраняем обновленное состояние корзины в localStorage
//         localStorage.setItem('cart', JSON.stringify(cart));

//         // Меняем текст кнопки на "В корзине"
//         button.querySelector('span:first-child').style.display = 'none';
//         button.querySelector('span:last-child').style.display = 'inline-block';

//         // Перепроверяем корзину и обновляем статусы кнопок
//         checkCartStatus();
//     }

//     function checkCartStatus() {
//         // Получаем текущее состояние корзины из localStorage
//         const cart = JSON.parse(localStorage.getItem('cart')) || [];

//         // Проходим по всем товарам на странице и обновляем статусы кнопок
//         document.querySelectorAll('.js-product').forEach(productContainer => {
//             const productId = productContainer.getAttribute('data-id');
//             const productSize = productContainer.getAttribute('data-product-size');

//             // Находим соответствующий товар в корзине
//             const isInCart = cart.some(item => item.id === productId && item.size === productSize);

//             // Меняем статус кнопки в соответствии с наличием товара в корзине
//             const buyButton = productContainer.querySelector('.js-buy');
//             if (buyButton) {
//                 const statusSpan = buyButton.querySelector('span:first-child');
//                 if (statusSpan) {
//                     statusSpan.style.display = isInCart ? 'none' : 'inline-block';
//                 }
//                 const addedSpan = buyButton.querySelector('span:last-child');
//                 if (addedSpan) {
//                     addedSpan.style.display = isInCart ? 'inline-block' : 'none';
//                 }
//             }
//         });
//     }
// });

// -------------------------------самый правильный -----------------------------

document.addEventListener('DOMContentLoaded', function () {
    // Обработчик клика по кнопке "В корзину"
    document.querySelectorAll('.js-buy').forEach(button => {
        button.addEventListener('click', function () {
            addToCart(this);
        });
    });

    // Проверяем корзину при загрузке страницы и обновляем статусы кнопок
    checkCartStatus();

    // Обработчик клика по размерам товара
    document.querySelectorAll('.js-product-size').forEach(sizeButton => {
        sizeButton.addEventListener('click', function () {
            // Определяем информацию о размере из атрибутов
            const productSize = this.getAttribute('data-product-size');
            const productPrice = this.getAttribute('data-product-price');

            // Находим соответствующую карточку товара
            const productContainer = this.closest('.js-product');

            // Меняем данные в карточке
            const priceElement = productContainer.querySelector('.js-goods__card-price span');
            const buyButton = productContainer.querySelector('.js-buy');

            if (priceElement) {
                priceElement.textContent = `${productPrice}`;
            }

            // Обновляем data-product-size для корректной работы addToCart
            const existingProductSize = productContainer.getAttribute('data-product-size');
            productContainer.setAttribute('data-product-size', productSize);

            // Меняем состояние кнопки
            if (buyButton) {
                buyButton.querySelector('span:first-child').style.display = 'inline-block';
                buyButton.querySelector('span:last-child').style.display = 'none';
                buyButton.disabled = false; // Включаем кнопку

                // Если товар уже в корзине, блокируем кнопку
                const isInCart = isProductInCart(productContainer);
                if (isInCart) {
                    buyButton.disabled = true;
                }
            }
        });
    });

    function addToCart(button) {
        // Получаем информацию о товаре из элементов DOM
        const productContainer = button.closest('.js-product');
        const productId = productContainer.getAttribute('data-id');
        const productName = productContainer.getAttribute('data-product-name');
        const productSize = productContainer.getAttribute('data-product-size');
        const productPrice = productContainer.getAttribute('data-product-price');
        const productHref = productContainer.getAttribute('data-product-href');
        const productSrc = productContainer.getAttribute('data-product-src');

        // Создаем объект с информацией о товаре
        const productInfo = {
            id: productId,
            name: productName,
            size: productSize,
            price: productPrice,
            quantity: 1,
            href: productHref,
            src: productSrc,
            totalprice: productPrice
        };

        // Получаем текущее состояние корзины из localStorage
        const cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Проверяем, есть ли товар уже в корзине
        const existingProductIndex = cart.findIndex(item => item.id === productId && item.size === productSize);

        if (existingProductIndex !== -1) {
            // Если товар уже в корзине, увеличиваем количество
            cart[existingProductIndex].quantity++;
            cart[existingProductIndex].totalprice = cart[existingProductIndex].quantity * productPrice;
        } else {
            // Если товара нет в корзине, добавляем его
            cart.push(productInfo);
        }

        // Сохраняем обновленное состояние корзины в localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Меняем текст кнопки на "В корзине"
        button.querySelector('span:first-child').style.display = 'none';
        button.querySelector('span:last-child').style.display = 'inline-block';

        // Блокируем кнопку
        button.disabled = true;

        // Перепроверяем корзину и обновляем статусы кнопок
        checkCartStatus();
    }

    function checkCartStatus() {
        // Получаем текущее состояние корзины из localStorage
        const cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Проходим по всем товарам на странице и обновляем статусы кнопок
        document.querySelectorAll('.js-product').forEach(productContainer => {
            const buyButton = productContainer.querySelector('.js-buy');
            
            // Если кнопки нет (товар уже в корзине), переходим к следующему товару
            if (!buyButton) {
                return;
            }

            // Находим соответствующий товар в корзине
            const isInCart = isProductInCart(productContainer);

            // Меняем статус кнопки в соответствии с наличием товара в корзине
            const statusSpan = buyButton.querySelector('span:first-child');
            const addedSpan = buyButton.querySelector('span:last-child');
            if (statusSpan && addedSpan) {
                statusSpan.style.display = isInCart ? 'none' : 'inline-block';
                addedSpan.style.display = isInCart ? 'inline-block' : 'none';

                // Блокируем кнопку, если товар уже в корзине
                if (isInCart) {
                    buyButton.disabled = true;
                } else {
                    buyButton.disabled = false;
                }
            }
        });
    }

    function isProductInCart(productContainer) {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const productId = productContainer.getAttribute('data-id');
        const productSize = productContainer.getAttribute('data-product-size');

        return cart.some(item => item.id === productId && item.size === productSize);
    }
});




// ----------------------------korzina--------------------------

// document.addEventListener('DOMContentLoaded', function() {
//     const cartItems = document.querySelector('.js-cart');

//     if (!cartItems) {
//         console.error('Ошибка: Элемент .js-cart не найден.');
//         return;
//     }

//     const cart = JSON.parse(localStorage.getItem('cart')) || [];

//     function updateCartItemQuantity(productId, productSize, delta) {
//         const index = cart.findIndex(item => item.id === productId && item.size === productSize);

//         if (index !== -1) {
//             cart[index].quantity += delta;
//             cart[index].totalprice = cart[index].quantity * cart[index].price;

//             if (cart[index].quantity <= 0) {
//                 // Удалить товар из корзины, если количество <= 0
//                 cart.splice(index, 1);
//             }

//             // Сохранить обновленную корзину в localStorage
//             localStorage.setItem('cart', JSON.stringify(cart));

//             // Обновить отображение в DOM
//             renderCart();
//         }
//     }

//     function renderCart() {
//         // Очищаем содержимое корзины
//         cartItems.innerHTML = '';

//         // Выводим товары в корзине
//         cart.forEach(item => {
//             const cartItem = document.createElement('div');
//             cartItem.classList.add('js-cart-item');
//             cartItem.setAttribute('data-id', item.id);
//             cartItem.setAttribute('data-size', item.size);
//             cartItem.innerHTML = `
//                 <div>${item.name} (${item.size})</div>
//                 <div>${item.price} ₸</div>
//                 <div class="js-quantity">${item.quantity}</div>
//                 <button class="js-increase-quantity">+</button>
//                 <button class="js-decrease-quantity">-</button>
//                 <button class="js-remove-item">Удалить</button>
//             `;

//             // Обработчик кнопок +, -
//             cartItem.querySelector('.js-increase-quantity').addEventListener('click', function() {
//                 updateCartItemQuantity(item.id, item.size, 1);
//             });

//             cartItem.querySelector('.js-decrease-quantity').addEventListener('click', function() {
//                 updateCartItemQuantity(item.id, item.size, -1);
//             });

//             // Обработчик кнопки удаления
//             cartItem.querySelector('.js-remove-item').addEventListener('click', function() {
//                 updateCartItemQuantity(item.id, item.size, -item.quantity);
//             });

//             cartItems.appendChild(cartItem);
//         });
//     }

//     // Инициализация отображения корзины
//     renderCart();
// });


// ----------------------------korzina 2 --------------------------

document.addEventListener('DOMContentLoaded', function() {
    const cartItems = document.querySelector('.js-cart');

    if (!cartItems) {
        console.error('Ошибка: Элемент .js-cart не найден.');
        return;
    }

    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    function updateCartItemQuantity(productId, productSize, delta) {
        const index = cart.findIndex(item => item.id === productId && item.size === productSize);

        if (index !== -1) {
            cart[index].quantity += delta;
            cart[index].totalprice = cart[index].quantity * cart[index].price;

            if (cart[index].quantity <= 0) {
                // Удалить товар из корзины, если количество <= 0
                cart.splice(index, 1);
            }

            // Сохранить обновленную корзину в localStorage
            localStorage.setItem('cart', JSON.stringify(cart));

            // Обновить отображение в DOM
            renderCart();
        }
    }

    function renderCart() {
        // Очищаем содержимое корзины
        cartItems.innerHTML = '';

        // Выводим товары в корзине
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('js-cart-item');
            cartItem.setAttribute('data-id', item.id);
            cartItem.setAttribute('data-size', item.size);
            cartItem.innerHTML = `
                <div>${item.name} (${item.size})</div>
                <div>${item.price} ₸</div>
                <div class="js-quantity">${item.quantity}</div>
                <button class="js-increase-quantity">+</button>
                <button class="js-decrease-quantity">-</button>
                <button class="js-remove-item">Удалить</button>
            `;

            // Обработчик кнопок +, -
            cartItem.querySelector('.js-increase-quantity').addEventListener('click', function() {
                updateCartItemQuantity(item.id, item.size, 1);
            });

            cartItem.querySelector('.js-decrease-quantity').addEventListener('click', function() {
                updateCartItemQuantity(item.id, item.size, -1);
            });

            // Обработчик кнопки удаления
            cartItem.querySelector('.js-remove-item').addEventListener('click', function() {
                updateCartItemQuantity(item.id, item.size, -item.quantity);
            });

            cartItems.appendChild(cartItem);
        });
    }

    // Инициализация отображения корзины
    renderCart();
});
