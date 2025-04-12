let data = localStorage.getItem('data');
let dataArray = JSON.parse(data) || [];

function calculatePrices() {
    let productsPrice = dataArray.length * 20;
    let totalBill = 5 + productsPrice;
    localStorage.setItem('total',JSON.stringify(totalBill));

    document.getElementById("products-price").innerHTML = `$${productsPrice}`;
    document.getElementById("total-bill").innerHTML = `$${totalBill}`;
}

function renderProducts() {
    const productsContainer = document.getElementById("products");
    productsContainer.innerHTML = ''; // Clear current products

    for (let i = 0; i < dataArray.length; i++) {
        let item = dataArray[i].selectedItem;

        productsContainer.innerHTML += `
            <div class="product-item" data-id="${item.id}">
                <div class="product-flex">
                    <div class="img-name">
                        <img class="product-img" src="${item.img}" alt="${item.name}">
                        <h3 class="product-name">${item.name}</h3>
                    </div>
                    <div class="product-numbers">
                        <h3 class="product-price">$${item.price}</h3>
                        <h4 class="product-quantity">1</h4>
                        <a href="#" class="product-button btn btn-outline-success remove-btn">remove</a>
                    </div>
                </div>
            </div>
        `;
    }

    calculatePrices(); // Update prices after rendering
}

// Initial render
renderProducts();

// Event delegation for remove buttons
document.getElementById("products").addEventListener('click', function (event) {
    if (event.target && event.target.classList.contains('remove-btn')) {
        let productItem = event.target.closest('.product-item');
        let productId = productItem.getAttribute('data-id');

        // Filter out removed product
        dataArray = dataArray.filter(item => String(item.selectedItem.id) !== productId);

        // Save updated array
        localStorage.setItem('data', JSON.stringify(dataArray));

        // Re-render products and recalculate
        renderProducts();
    }
});
