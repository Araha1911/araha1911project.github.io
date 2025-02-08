document.addEventListener("DOMContentLoaded", function () {
    let elements = document.querySelectorAll(".fade-in");

    function showElements() {
        elements.forEach((el) => {
            let rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", showElements);
    showElements();
});
document.addEventListener("DOMContentLoaded", function () {
    const searchForm = document.getElementById("search-form");
    const searchInput = document.getElementById("search-input");

    searchForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Предотвращаем перезагрузку страницы
        const query = searchInput.value.trim().toLowerCase();

        if (query) {
            window.location.href = `products.html?search=${query}`;
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get("search");

    if (searchQuery) {
        const products = document.querySelectorAll(".product-card");
        
        products.forEach(product => {
            const productName = product.querySelector("h3").textContent.toLowerCase();
            if (!productName.includes(searchQuery)) {
                product.style.display = "none"; // Скрываем товары, не соответствующие запросу
            }
        });
    }
});
