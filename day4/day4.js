const products = [
  {
    id: 1,
    name: "Áo Thun Nam Cotton",
    price: 199000,
    category: "Thời trang",
    description: "Áo thun nam chất liệu cotton mềm mại, thoáng mát.",
    image: "https://picsum.photos/300/200?random=1"
  },
  {
    id: 2,
    name: "Giày Thể Thao Unisex",
    price: 450000,
    category: "Giày dép",
    description: "Giày thể thao unisex phong cách trẻ trung, năng động.",
    image: "https://picsum.photos/300/200?random=2"
  },
  {
    id: 3,
    name: "Tai Nghe Bluetooth",
    price: 350000,
    category: "Điện tử",
    description: "Tai nghe Bluetooth âm thanh sống động, pin lâu.",
    image: "https://picsum.photos/300/200?random=3"
  },
  {
    id: 4,
    name: "Túi Xách Da Nữ",
    price: 599000,
    category: "Phụ kiện",
    description: "Túi xách da nữ sang trọng, phù hợp mọi dịp.",
    image: "https://picsum.photos/300/200?random=4"
  },
  {
    id: 5,
    name: "Bình Giữ Nhiệt 500ml",
    price: 150000,
    category: "Gia dụng",
    description: "Bình giữ nhiệt 500ml giữ nóng/lạnh lên đến 12 giờ.",
    image: "https://picsum.photos/300/200?random=5"
  }
];

const container = document.querySelector(".container_product");
const filter = document.getElementById("categoryFilter");

function renderAllProducts() {
  container.innerHTML = ""; 
  products.forEach(product => {
    const productDiv = document.createElement("div");
    productDiv.className = "product_item";
    productDiv.setAttribute("data-category", product.category); 

    productDiv.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>
      <a href="./productdetail.html?productId=${product.id}">${product.name}</a>
      </h3>
      <p>Giá: ${product.price.toLocaleString()} VNĐ</p>
      <p>${product.category}</p>
      <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Thêm vào giỏ</button>
    `;
    container.appendChild(productDiv);
  });
}

renderAllProducts(); 

filter.addEventListener("change", function () {
  const selectedCategory = this.value;
  const allProducts = document.querySelectorAll(".product_item");

  allProducts.forEach(item => {
    const itemCategory = item.getAttribute("data-category");

    if (selectedCategory === "all" || itemCategory === selectedCategory) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function () {
  const searchValue = this.value.trim().toLowerCase();
  const allProducts = document.querySelectorAll(".product_item");

  allProducts.forEach(item => {
    const productName = item.querySelector("h3").textContent.toLowerCase();

    if (productName.includes(searchValue)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});



let cart = [];

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (product) {
    cart.push(product);
    alert(product.name + " đã được thêm vào giỏ!");
  }
}

function showCart() {
  const cartContainer = document.getElementById("cartContainer");
  cartContainer.innerHTML = "<h2>Giỏ hàng</h2>";

  if (cart.length === 0) {
    cartContainer.innerHTML += "<p>Giỏ hàng trống</p>";
    return;
  }

  cart.forEach((item, index) => {
    cartContainer.innerHTML += `
      <div>
        <p>${item.name} - ${item.price.toLocaleString()} VNĐ</p>
      </div>
    `;
  });
}

document.getElementById("showCartBtn").addEventListener("click", showCart);


