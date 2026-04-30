

const cartCount = document.getElementById("cart-count");

function updateCartCount() {
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

updateCartCount();



let cart = JSON.parse(localStorage.getItem("cart")) || [];

document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", (e) => {

        const productElement = e.target.closest(".product");

        const product = {
            name: productElement.dataset.name,
            price: Number(productElement.dataset.price),
            image: productElement.dataset.image
        };

        cart.push(product);

        localStorage.setItem("cart", JSON.stringify(cart));

        alert(product.name + " added to cart 🛒");
    });
});



