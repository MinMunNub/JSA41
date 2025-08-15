
var url = new URL(window.location.href);
var productId = url.searchParams.get("productId");


var product = products.find(p => p.id == productId);


if (product) {
  document.getElementById("productName").textContent = product.name;
  document.getElementById("productDescription").textContent = product.description;
  document.getElementById("productPrice").textContent = "Price: " + product.price.toLocaleString() + " VND";
  document.getElementById("productImage").src = product.image;
} else {
  document.querySelector(".product-detail").innerHTML = "<h2>Ko tim thay san pham</h2>";
}

function addToCart() {
    displayOrderHistory();
    document.getElementById('cartModal').style.display = 'block';
}
