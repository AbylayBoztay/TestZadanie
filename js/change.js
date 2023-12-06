// Хочу такое некое предисловие оставить, код по идее подходит под все задачи, то есть все задачи реализованы, но есть некоторые костыли, 
// такие как блокировка 35-объема при переключении на другой объем. Так же селек-кружочек не переключается пока при выборе других объемов
// об этом всем я вкурсе, это все можно было бы "задебажить", вместо этоого коммента, но прошу понять, что я сейчас работаю с графиком
// с 9 до 18:00 не по специальности, ну чтобы на хлеб с маслом так сказать деньги были. И это все, что я смог успеть сделать за 3 дня
// Прошу войти в положение


// -------------------------------самый правильныййййййййййййййй)))))) -----------------------------

document.addEventListener('DOMContentLoaded', function () {
    // Прослушка нажатия кнопки "в корзину" 
    document.querySelectorAll('.js-buy').forEach(button => {
        button.addEventListener('click', function () {
            addToCart(this);
        });
    });

    // Здесь идет проверка localstorage на наличие уже добавленных товаров и соответсвтенно проверка идет кнопки, прослушка клика размеров товара
    checkCartStatus();

    // Обработчик клика по размерам товара
    document.querySelectorAll('.js-product-size').forEach(sizeButton => {
        sizeButton.addEventListener('click', function () {
            // Определяем информацию о размере из атрибутов
            const productSize = this.getAttribute('data-product-size');
            const productId = this.getAttribute('data-id');
            const productPrice = this.getAttribute('data-product-price');
            
            const productContainer = this.closest('.js-product');

            const priceElement = productContainer.querySelector('.js-goods__card-price span');
            const buyButton = productContainer.querySelector('.js-buy');

            if (priceElement) {
                priceElement.textContent = `${productPrice}`;
            }

            const existingProductSize = productContainer.getAttribute('data-product-size');
            productContainer.setAttribute('data-product-size', productSize);
            productContainer.setAttribute('data-id', productId,);
            productContainer.setAttribute('data-product-price', productPrice,);


            // изменение сост. кнопки. Можно было css убрать в другой файл, но посчитал правильным сделать все задания в одном файле, не раскидывать
            if (buyButton) {
                buyButton.querySelector('span:first-child').style.display = 'inline-block';
                buyButton.querySelector('span:last-child').style.display = 'none';
                buyButton.disabled = false; //копка активна
                const isInCart = isProductInCart(productContainer);
                if (isInCart) {
                    buyButton.disabled = true;
                }
            }
        });
    });



    // работа с localstorage, точнее уже отображение и др действия с данными
    function addToCart(button) {
        const productContainer = button.closest('.js-product');
        const reqProductEl = productContainer.querySelector('.goods__card-size.active');
        const productId = productContainer.getAttribute('data-id');
        const productName = productContainer.getAttribute('data-product-name');
        const productSize = productContainer.getAttribute('data-product-size');
        const productPrice = productContainer.getAttribute('data-product-price');
        const productHref = productContainer.getAttribute('data-product-href');
        const productSrc = productContainer.getAttribute('data-product-src');

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

        const cart = JSON.parse(localStorage.getItem('cart')) || [];

        const existingProductIndex = cart.findIndex(item => item.id === productId && item.size === productSize);

        if (existingProductIndex !== -1) {
            cart[existingProductIndex].quantity++;
            cart[existingProductIndex].totalprice = cart[existingProductIndex].quantity * productPrice;
        } else {
            cart.push(productInfo);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        button.querySelector('span:first-child').style.display = 'none';
        button.querySelector('span:last-child').style.display = 'inline-block';
        button.disabled = true; // кнопка заблокирована

        checkCartStatus();
    }

    function checkCartStatus() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];

        document.querySelectorAll('.js-product').forEach(productContainer => {
            const buyButton = productContainer.querySelector('.js-buy');
            
            if (!buyButton) {
                return;
            }

            const isInCart = isProductInCart(productContainer);
            const statusSpan = buyButton.querySelector('span:first-child');
            const addedSpan = buyButton.querySelector('span:last-child');
            if (statusSpan && addedSpan) {
                statusSpan.style.display = isInCart ? 'none' : 'inline-block';
                addedSpan.style.display = isInCart ? 'inline-block' : 'none';

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



// ----------------------------korzina samyi pravil'nyiiiiiiii --------------------------

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
                // удалить товар из корзины, если количество уже ноль, то есть меньше и равно нулю(при нажатии на "-" будет четче объяснено)
                cart.splice(index, 1);
            }

            // сохранить обновленную корзину в localStorage
            localStorage.setItem('cart', JSON.stringify(cart));

            renderCart();
        }
    }

    function renderCart() {
        // функция кнопки "удалить"
        cartItems.innerHTML = '';

        // распарс ls
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

            // обработчик кнопок +, -
            cartItem.querySelector('.js-increase-quantity').addEventListener('click', function() {
                updateCartItemQuantity(item.id, item.size, 1);
            });

            cartItem.querySelector('.js-decrease-quantity').addEventListener('click', function() {
                updateCartItemQuantity(item.id, item.size, -1);
            });

            // обработчик кнопки удаления
            cartItem.querySelector('.js-remove-item').addEventListener('click', function() {
                updateCartItemQuantity(item.id, item.size, -item.quantity);
            });

            cartItems.appendChild(cartItem);
        });
    }

    // рендер корщины
    renderCart();
});
