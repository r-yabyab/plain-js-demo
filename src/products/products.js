function loadProducts() {

    fetch("https://dummyjson.com/products")
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById("products-list");
        
        data.products.forEach(x => {
            const productDiv = document.createElement("div");
            productDiv.innerHTML = `
            <div>${x.title}</div>
            <div>${x.description}</div>
            <div>${x.price}</div>
            `;
            container.appendChild(productDiv);
        });
    })
    .catch(error => console.error(error))
    
}
    