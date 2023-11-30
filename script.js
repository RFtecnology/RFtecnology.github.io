//carrito de compras

let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');

// desplegar carrito
cartIcon.onclick = () => {
    cart.classList.add("active");
};

// cerrar carrito
closeCart.onclick = () => {
    cart.classList.remove("active");
};

if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}

// remover elementos
function ready() {
    var removeCartButtons = document.getElementsByClassName('cart-remove');
    console.log(removeCartButtons);

    for (var i = 0; i < removeCartButtons.length; i++) {
        var button = removeCartButtons[i];
        button.addEventListener('click', removeCartItem);
    }

    // cambiar cantidad
    var quantityInputs = document.getElementsByClassName('cart-quantity');
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener('change', quantityChanged);
    }
}

function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove(); // Updated to remove the parent container
    updateTotal();
}

// cambiar cantidad FUNCION
function quantityChanged(event) {
    var input = event.target; // Fixed typo: 'targer' to 'target'
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateTotal();
}

// actualizar el total de compra
function updateTotal() {
    var cartContent = document.getElementsByClassName('cart-content')[0];
    var cartBoxes = cartContent.getElementsByClassName('cart-box');
    var total = 0;

    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName('cart-price')[0];
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
        var price = parseFloat(priceElement.innerText.replace("RD$", ""));
        var quantity = quantityElement.value;
        total = total + price * quantity;
    }

    document.getElementsByClassName('total-price')[0].innerText = 'RD$' + total;
}
