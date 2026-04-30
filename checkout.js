<script>
document.getElementById("checkout-form").addEventListener("submit", function(e) {
    e.preventDefault(); 

    // clear cart after order
    localStorage.removeItem("cart");

    alert("Order placed successfully!");

    // redirect back home (or thank you page)
    window.location.href = "base.html";
});
</script>