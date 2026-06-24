// 1. Production-Grade Comprehensive Inventory (Exactly 60 Items Categorized & Validated)
const products = [
    { id: 1, name: "Premium Leather Backpack", price: 2499, category: "Fashion", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500" }, // VALIDATED LINK
    { id: 2, name: "Classic Cotton T-Shirt", price: 599, category: "Fashion", image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500" },
    { id: 3, name: "Winter Fleece Jacket", price: 3999, category: "Fashion", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500" },
    { id: 4, name: "Minimalist Smart Watch", price: 4499, category: "Electronics", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500" },
    { id: 5, name: "Wireless Noise-Cancelling Headphones", price: 7999, category: "Electronics", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500" }, // VALIDATED LINK
    { id: 6, name: "Athletic Running Shoes", price: 3299, category: "Fitness", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500" }, // VALIDATED LINK
    { id: 7, name: "Mechanical Gaming Keyboard", price: 2199, category: "Electronics", image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500" }, // VALIDATED LINK
    { id: 8, name: "4K UltraWide Gaming Monitor", price: 28999, category: "Electronics", image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500" }, // VALIDATED LINK
    { id: 9, name: "Classic Aviator Sunglasses", price: 1249, category: "Fashion", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500" }, // VALIDATED LINK
    { id: 10, name: "Stainless Steel Water Bottle", price: 899, category: "Fitness", image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500" },
    { id: 11, name: "Ergonomic Office Chair", price: 8499, category: "Home & Kitchen", image: "https://images.unsplash.com/photo-1505797149-43b0069ec26b?w=500" }, // VALIDATED LINK
    { id: 12, name: "Portable Bluetooth Speaker", price: 1799, category: "Electronics", image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500" },
    { id: 13, name: "Professional DSLR Camera", price: 42999, category: "Electronics", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500" },
    { id: 14, name: "Minimalist Desk Lamp", price: 1199, category: "Home & Kitchen", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500" },
    { id: 15, name: "Ceramic Coffee Mug Set", price: 649, category: "Home & Kitchen", image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500" },
    { id: 16, name: "Stylish white Hat", price: 999, category: "Fashion", image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500" }, // FIXED: NO HAT, CORRECTED IMAGE
    { id: 17, name: "High-Speed Wireless Mouse", price: 1499, category: "Electronics", image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500" },
    { id: 18, name: "Stainless Steel Cookware Set", price: 3899, category: "Home & Kitchen", image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=500" },
    { id: 19, name: "Organic Yoga Mat", price: 1250, category: "Fitness", image: "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?w=500" },
    { id: 20, name: "Hard Shell Spinner Suitcase", price: 5599, category: "Fashion", image: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=500" },
    { id: 21, name: "Smart LED Strip Lights (5m)", price: 799, category: "Electronics", image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=500" },
    { id: 22, name: "Fountain Pen with Ink Converter", price: 1350, category: "Books", image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=500" },
    { id: 23, name: "Next-Gen 5G Smartphone", price: 54999, category: "Mobiles", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500" },
    { id: 24, name: "Ultra Thin Pro Mobile Phone", price: 74999, category: "Mobiles", image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500" },
    
    
    { id: 27, name: "Full Zip Athletics Track Jacket", price: 2799, category: "Fashion", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500" },
    { id: 28, name: "Digital Smart Air Fryer (4L)", price: 6499, category: "Home & Kitchen", image: "https://images.unsplash.com/photo-1621972750749-0fbb1abb7736?w=500" },
    { id: 29, name: "High-Speed Nutrient Blender", price: 4199, category: "Home & Kitchen", image: "https://images.unsplash.com/photo-1578643463396-0997cb5328c1?w=500" },
    { id: 30, name: "Whey Protein Isolate (1kg)", price: 2999, category: "Fitness", image: "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?w=500" },
    { id: 31, name: "Hardcover Dotted Journal", price: 450, category: "Books", image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=500" },
    { id: 32, name: "Modern Minimalist Wall Clock", price: 1599, category: "Home & Kitchen", image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=500" },
    
    { id: 35, name: "Non-Stick Cookware Set", price: 3499, category: "Home & Kitchen", image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=500" },
    
   
    { id: 38, name: "Hardcover Cook Book", price: 999, category: "Books", image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=500" },
    
    { id: 40, name: "Dumbbells Set (5kg pair)", price: 1299, category: "Fitness", image: "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?w=500" },
    { id: 41, name: "American lichi fruit", price: 4499, category: "Home & Kitchen", image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=500" },
    { id: 42, name: "Wig for all size o head", price: 899, category: "Fashion", image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500" },
    { id: 43, name: "Beautiful bear glass", price: 1450, category: "Fashion", image: "https://images.unsplash.com/photo-1586993451228-09818021e309?w=500" },
    { id: 44, name: "Sunglasses (Classic Aviator)", price: 1199, category: "Fashion", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500" },
    { id: 45, name: "Wired Gaming Mouse", price: 1399, category: "Electronics", image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500" },
    
    { id: 47, name: "Tablet (10.1 inch)", price: 14999, category: "Electronics", image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500" },
    { id: 48, name: "Budget Value Android Smartphone", price: 12999, category: "Mobiles", image: "https://images.unsplash.com/photo-1565630916779-e303be97b6f5?w=500" },
    { id: 49, name: "Premium Flagship Pro Phone", price: 89999, category: "Mobiles", image: "https://images.unsplash.com/photo-1573148195900-7845dcb9b127?w=500" },
    { id: 50, name: "Next-Gen Foldable Smartphone", price: 124999, category: "Mobiles", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500" },
    { id: 51, name: "Pro Noise Isolating Earbuds", price: 3499, category: "Electronics", image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500" },
    { id: 52, name: "Piano", price: 5899, category: "Electronics", image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=500" },
    { id: 53, name: "Casual Denim Trucker Jacket", price: 2499, category: "Fashion", image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500" },
    { id: 54, name: "Lightweight Breathable Running Shorts", price: 799, category: "Fitness", image: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=500" },
    { id: 55, name: "Best Seller Fiction Mystery Novel", price: 399, category: "Books", image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500" },
    { id: 56, name: "Sci-Fi Space Epic Paperback", price: 499, category: "Books", image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500" },
   
    { id: 58, name: "Non-Stick Carbon Steel Baking Tray", price: 699, category: "Home & Kitchen", image: "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?w=500" },
    { id: 59, name: "Heavy Duty Resistance Bands Set", price: 899, category: "Fitness", image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=500" },
    { id: 60, name: "Adjustable Heavy Dumbbell Single", price: 4999, category: "Fitness", image: "https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?w=500" }
];

// 2. Persistent Client-Side Data Handling (Local Database Mockup)
let cart = JSON.parse(localStorage.getItem('amazon_cart')) || [];
let orderHistory = JSON.parse(localStorage.getItem('amazon_orders')) || [
    { id: "OD987234", name: "Wireless Noise-Cancelling Headphones", price: 7999, date: "Ordered: 3 days ago", status: "Delivered" },
    { id: "OD112456", name: "Fountain Pen with Ink Converter", price: 1350, date: "Ordered: 1 week ago", status: "Delivered" }
];
let currentCategoryFilter = "All";

// 3. Render Product Cards Dynamically
function renderProducts(productsToRender) {
    const grid = document.getElementById("productGrid");
    grid.innerHTML = ""; 

    if(productsToRender.length === 0) {
        grid.innerHTML = "<div style='width:100%; text-align:center; padding: 40px;'><h2>No matches found.</h2></div>";
        return;
    }

    productsToRender.forEach(product => {
        grid.innerHTML += `
            <div class="box">
                <img src="${product.image}" class="box-img" alt="${product.name}">
                <div>
                    <span class="box-category">${product.category}</span>
                    <h3>${product.name}</h3>
                </div>
                <div>
                    <p>₹${product.price}</p>
                    <button class="add-btn" onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            </div>
        `;
    });
}

// 4. Production-Level Search Handling
document.getElementById("searchInput").addEventListener("input", (e) => {
    const term = e.target.value.toLowerCase();
    
    // Filter considering current category tab selected
    const filtered = products.filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(term);
        const matchesCategory = currentCategoryFilter === "All" || p.category === currentCategoryFilter;
        return matchesSearch && matchesCategory;
    });
    
    renderProducts(filtered);
});

// 5. Advanced Category Filtering Engine
function filterCategory(category, element) {
    currentCategoryFilter = category;
    
    // Toggle active state visualization in sub-navbar UI
    if (element) {
        document.querySelectorAll('.panel-link').forEach(link => link.classList.remove('active'));
        element.classList.add('active');
    }

    const filtered = category === "All" ? products : products.filter(p => p.category === category);
    renderProducts(filtered);
    
    // Reset search input value upon choosing a fresh category filter context
    document.getElementById("searchInput").value = "";
}

// 6. Shopping Cart Controller Logic
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1; 
    } else {
        cart.push({ ...product, quantity: 1 }); 
    }

    saveAndRenderCart();
}

function changeQuantity(productId, amount) {
    const itemIndex = cart.findIndex(item => item.id === productId);
    
    if (itemIndex > -1) {
        cart[itemIndex].quantity += amount;
        if (cart[itemIndex].quantity <= 0) {
            cart.splice(itemIndex, 1); 
        }
    }
    saveAndRenderCart();
}

// 7. Render & Sync System State
function saveAndRenderCart() {
    localStorage.setItem('amazon_cart', JSON.stringify(cart));
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById("cartCount").innerText = totalItems;

    const cartContainer = document.getElementById("cartItems");
    cartContainer.innerHTML = "";
    let totalPrice = 0;

    cart.forEach(item => {
        totalPrice += item.price * item.quantity;
        cartContainer.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <p>₹${item.price}</p>
                </div>
                <div class="cart-controls">
                    <button onclick="changeQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="changeQuantity(${item.id}, 1)">+</button>
                </div>
            </div>
        `;
    });

    document.getElementById("totalPrice").innerText = totalPrice;
}

// 8. Interactive Modals Management
function toggleCart() {
    const modal = document.getElementById("cartModal");
    modal.style.display = (modal.style.display === "block") ? "none" : "block";
}

function toggleOrders() {
    const modal = document.getElementById("ordersModal");
    if (modal.style.display === "block") {
        modal.style.display = "none";
    } else {
        renderOrderHistory();
        modal.style.display = "block";
    }
}

// 9. Order History Engine Implementation
function renderOrderHistory() {
    const container = document.getElementById("orderHistoryItems");
    container.innerHTML = "";
    
    if(orderHistory.length === 0) {
        container.innerHTML = "<p>You have placed no orders yet.</p>";
        return;
    }

    orderHistory.forEach(order => {
        container.innerHTML += `
            <div class="order-item">
                <div class="order-item-details">
                    <span style="font-size:0.75rem; color:#565959; font-weight:bold;">ORDER ID: ${order.id}</span>
                    <h4 style="margin-top:4px;">${order.name}</h4>
                    <p style="font-size:1rem; color:#b12704;">₹${order.price}</p>
                    <span class="order-badge">${order.status}</span>
                </div>
                <div style="text-align:right;">
                    <p style="font-size:0.85rem; color:#565959;">${order.date}</p>
                </div>
            </div>
        `;
    });
}

// Simulated Checkout Processing
function checkoutSimulation() {
    if(cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    
    // Add current cart items to persistent Order History mock collection
    cart.forEach(item => {
        const generatedId = "OD" + Math.floor(100000 + Math.random() * 900000);
        orderHistory.unshift({
            id: generatedId,
            name: `${item.name} (x${item.quantity})`,
            price: item.price * item.quantity,
            date: "Ordered: Just now",
            status: "Processing Shipment"
        });
    });

    localStorage.setItem('amazon_orders', JSON.stringify(orderHistory));
    cart = [];
    saveAndRenderCart();
    toggleCart();
    alert("Order successfully placed! View updates under 'Returns & Orders'.");
}

// 10. Smooth Back to Top Method
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Initial Bootstrapping Operations
renderProducts(products);
saveAndRenderCart();