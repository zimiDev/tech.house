// Mahsulotlar ma'lumotlari
const products = [
    { 
        id: 1, 
        title: "Smart Pro Blender", 
        category: "oshxona", 
        price: 1200000, 
        image: "img/kitchen-blender-with-glass-container-food-processor-electronic-kitchen-appliance-concept-health-food-drink-vector-illustration-isolated-background_545793-946.avif", 
        sale: false,
        description: "Yuqori quvvatli blender, 10 tezlik rejimi bilan. Muzlatilgan mevalar va muzni maydalash uchun ideal.",
        features: ["1200W quvvat", "10 tezlik rejimi", "2L hajmi", "Zanglamaydigan po'lat pichoqlar"]
    },
    { 
        id: 2, 
        title: "Digital Mikropech", 
        category: "oshxona", 
        price: 2500000, 
        image: "img/modern-black-microwave-oven-isolated-260nw-2277285935.webp", 
        sale: false,
        description: "Zamonaviy raqamli mikroto'lqinli pech. Tez isitish va pishirish funksiyalari.",
        features: ["800W quvvat", "20L hajmi", "Digital displey", "8 ta avtomatik darsur"]
    },
    { 
        id: 3, 
        title: "Robot Changyutgich", 
        category: "tozalash", 
        price: 3500000, 
        image: "img/белый-робот-пылесос-заряжается-на-своей-базе-вид-сверху-247265893.webp", 
        sale: true,
        description: "Aqlli robot changyutgich. Avtomatik tozalash va zaryadlash funksiyasi.",
        features: ["Wi-Fi boshqaruvi", "4000mAh batareya", "HEPA filtr", "Avtomatik zaryadlash"]
    },
    { 
        id: 4, 
        title: "Infrared Isitgich", 
        category: "isitish", 
        price: 850000, 
        image: "img/i.webp", 
        sale: false,
        description: "Infraqizil isitgich, tez va samarali isitish.",
        features: ["2000W quvvat", "3 temperatura rejimi", "Xavfsizlik datchigi", "Masofadan boshqarish"]
    },
    { 
        id: 5, 
        title: "Smart Home Hub", 
        category: "aqlli", 
        price: 1500000, 
        image: "img/7.webp", 
        sale: false,
        description: "Aqlli uy markaziy boshqaruv tizimi. Barcha qurilmalarni bir joydan boshqaring.",
        features: ["Wi-Fi va Bluetooth", "Ovozli boshqaruv", "100+ qurilma bilan mos", "Mobil ilova"]
    },
    { 
        id: 6, 
        title: "Bug'li Tozalagich", 
        category: "tozalash", 
        price: 1800000, 
        image: "img/235663.750x0.jpg", 
        sale: false,
        description: "Professional bug'li tozalash mashinasi. Kimyoviy moddalar ishlatmasdan tozalaydi.",
        features: ["1500W quvvat", "40 soniya isish vaqti", "10 ta qo'shimcha", "3.5 bar bosim"]
    },
    { 
        id: 7, 
        title: "Kofemashina Deluxe", 
        category: "oshxona", 
        price: 3200000, 
        image: "img/espresso-coffee-machine-white-background-copy-space-espresso-coffee-machine-steam-jet-white-background-166646172.webp", 
        sale: false,
        description: "Professional kofe mashinasi. Espresso, kapuchino va boshqa ichimliklar tayyorlash.",
        features: ["15 bar bosim", "Sut ko'pirtirish", "LCD displey", "Ikki chashka rejimi"]
    },
    { 
        id: 8, 
        title: "Havo Tozalagich", 
        category: "tozalash", 
        price: 2100000, 
        image: "img/cde4c50a1a6f88bbba86f2e94b19f63f.jpg", 
        sale: true,
        description: "HEPA filtrli havo tozalagich. Allergenlar va bakteriyalarni yo'q qiladi.",
        features: ["HEPA H13 filtr", "50m² uchun", "UV-C lampa", "Tungi rejim"]
    },
    { 
        id: 9, 
        title: "Smart Konditsioner", 
        category: "isitish", 
        price: 4500000, 
        image: "img/floor-standing.jpg", 
        sale: false,
        description: "Wi-Fi bilan boshqariladigan konditsioner. Aqlli temperatura nazorati.",
        features: ["12000 BTU", "Inverter texnologiya", "Wi-Fi boshqaruv", "A++ energiya samaradorligi"]
    },
    { 
        id: 10, 
        title: "Elektr Grili", 
        category: "oshxona", 
        price: 980000, 
        image: "img/Electric-Panini-Grill-Commercial-Panini-Sandwich-Press-Stainless-Steel-Single-Contact-Grill.avif", 
        sale: false,
        description: "Elektr gril, ichki va tashqi foydalanish uchun.",
        features: ["2000W quvvat", "Yopishmaydigan sirt", "Harorat nazorati", "Oson tozalash"]
    },
    { 
        id: 11, 
        title: "Smart Kamera", 
        category: "aqlli", 
        price: 1350000, 
        image: "img/orig.webp", 
        sale: false,
        description: "Aqlli xavfsizlik kamerasi. Tungi ko'rish va harakatni aniqlash.",
        features: ["1080p Full HD", "Tungi ko'rish", "Ikki tomonlama audio", "Bulut xotira"]
    },
    { 
        id: 12, 
        title: "Elektr Radiator", 
        category: "isitish", 
        price: 1100000, 
        image: "img/3d-rendering-realistic-electric-oil-heater-isolated-white-background_187882-3040.avif", 
        sale: false,
        description: "Elektr moylli radiator. Xavfsiz va samarali isitish.",
        features: ["2000W quvvat", "7 sektsiya", "Termostat", "G'ildirak bilan"]
    }
];

// Cart ma'lumotlarini saqlash va yuklash
function saveCart(cart) {
    try {
        sessionStorage.setItem('techhouse_cart', JSON.stringify(cart));
    } catch (e) {
        console.error('Cart saqlanmadi:', e);
    }
}

function loadCart() {
    try {
        const saved = sessionStorage.getItem('techhouse_cart');
        return saved ? JSON.parse(saved) : [];
    } catch (e) {
        console.error('Cart yuklanmadi:', e);
        return [];
    }
}

// Sahifa yuklanganda cartni yuklash
let cart = loadCart();

// Sahifa yuklanganda ishga tushadi
window.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    
    const hamburger = document.querySelector('.hamburger');
    const mainNav = document.querySelector('.main-nav');
    
    if (hamburger && mainNav) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mainNav.classList.toggle('active');
        });
        
        const navLinks = document.querySelectorAll('.main-nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                mainNav.classList.remove('active');
            });
        });
    }
});

// Mahsulotlarni ko'rsatish
function renderProducts(productsToRender = products) {
    const grid = document.getElementById('productGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    productsToRender.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.setAttribute('data-category', product.category);
        card.onclick = () => goToProductDetails(product.id);
        
        card.innerHTML = `
            <div class="p-image">
                <img src="${product.image}" alt="${product.title}">
                ${product.sale ? '<span class="badge">-15%</span>' : ''}
            </div>
            <div class="p-details">
                <span class="p-cat">${getCategoryName(product.category)}</span>
                <div class="p-title">${product.title}</div>
                <div class="p-price">${product.price.toLocaleString('uz-UZ')} so'm</div>
                <button class="add-cart-btn" onclick="event.stopPropagation(); addToCart(${product.id})">
                    Savatga qo'shish
                </button>
            </div>
        `;
        
        grid.appendChild(card);
    });
}

// Kategoriya nomini olish
function getCategoryName(cat) {
    const names = {
        'oshxona': 'Oshxona',
        'tozalash': 'Tozalash',
        'isitish': 'Isitish',
        'aqlli': 'Aqlli Uy'
    };
    return names[cat] || cat;
}

// Savatga qo'shish
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        alert('Bu mahsulot allaqachon savatda!');
        return;
    }
    
    cart.push({ ...product, quantity: 1 });
    saveCart(cart);
    updateCartCount();
    
    const btn = event.target;
    const originalText = btn.textContent;
    btn.textContent = 'Qo\'shildi ✓';
    btn.style.background = '#10b981';
    
    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
    }, 1500);
}

// Cart sonini yangilash
function updateCartCount() {
    const count = cart.length;
    const cartCountEl = document.getElementById('cartCount');
    if (cartCountEl) {
        cartCountEl.textContent = count;
    }
    
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        if (count > 0) {
            checkoutBtn.classList.add('show');
        } else {
            checkoutBtn.classList.remove('show');
        }
    }
}

// Cart sahifasiga o'tish
function goToCart() {
    window.location.href = 'cart.html';
}

// Mahsulot batafsil sahifasiga o'tish
function goToProductDetails(productId) {
    window.location.href = `product-details.html?id=${productId}`;
}

// Kategoriya bo'yicha filtr
function filterCategory(category, element) {
    const listItems = document.querySelectorAll('.category-list li');
    listItems.forEach(item => item.classList.remove('active'));
    if (element) {
        element.classList.add('active');
    }

    const titles = {
        'all': 'Barcha mahsulotlar',
        'oshxona': 'Oshxona jihozlari',
        'tozalash': 'Tozalash texnikasi',
        'isitish': 'Isitish va Sovutish',
        'aqlli': 'Aqlli Uy'
    };
    
    const titleEl = document.getElementById('currentCategoryTitle');
    if (titleEl) {
        titleEl.innerText = titles[category] || 'Barcha mahsulotlar';
    }

    const filtered = category === 'all' ? products : products.filter(p => p.category === category);
    renderProducts(filtered);
}

// Qidiruv
const searchInput = document.getElementById('searchInput');
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filtered = products.filter(p => 
            p.title.toLowerCase().includes(searchTerm) || 
            p.category.toLowerCase().includes(searchTerm)
        );
        renderProducts(filtered);
    });
}

// Chegirma filteri
function toggleSale(checkbox) {
    if (checkbox.checked) {
        renderProducts(products.filter(p => p.sale));
    } else {
        renderProducts(products);
    }
}

// A'zolik paketini tanlash
function selectPackage(card) {
    document.querySelectorAll('.price-card').forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');
}

// Mahsulotni ID bo'yicha olish
function getProductById(id) {
    return products.find(p => p.id === parseInt(id));
}

// Savatdan o'chirish
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart(cart);
    updateCartCount();
}

// Savatni tozalash
function clearCart() {
    cart = [];
    saveCart(cart);
    updateCartCount();
}

// Cartni olish
function getCart() {
    return cart;
}

// Umumiy summa
function calculateTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

