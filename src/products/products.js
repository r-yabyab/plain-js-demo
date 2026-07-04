const ProductManager = (() => {
    let currentPage = 0;
    let limit = 4;


function loadProducts() {

    // fetch("https://dummyjson.com/products")
    fetch(`https://dummyjson.com/products?limit=${limit}&skip=${currentPage * limit}`)
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById("products-list");
        container.innerHTML = ""
        
        data.products.forEach(x => {
            const productDiv = document.createElement("div");
            // productDiv.id = "innerProductDiv"
            productDiv.innerHTML = `
            <div>${x.title}</div>
            <div>${x.price}</div>
            <img src="${x.thumbnail}"></img>
            `;
            container.appendChild(productDiv);

        });


        if (data.products.length > 0) {
            document.getElementById("nextButton").style.display = "block";
            document.getElementById("pageCounter").style.display = "block"
            document.getElementById("pageCounter").innerHTML = `Current page ${currentPage}`;
        }
        if (data.products.length > 0 && currentPage > 0) {
            document.getElementById("previousButton").style.display = "block"
        } else {
            document.getElementById("previousButton").style.display = "none"
        }
    })
    .catch(error => console.error(error))
    
}
    function nextPage() {
        currentPage++;
        loadProducts()
    }
    
    function previousPage() {
        currentPage--;
        loadProducts()
    }

function quickLoad() {
    fetch("https://dummyjson.com/products")
    .then(res => res.json())
    .then(res => console.log(res))
    // .then(x => {
    //     const container = document.getElementById("quickproducts-list")
        
    //     x.forEach(el => {
    //         newDiv = document.createElement("div")
    //         newDiv.innerHTML = `
    //         <div>${x}</div>
    //         `;
    //         container.appendChild
    //     })
        
    // })
    .catch(e => console.error)
}

return { loadProducts, quickLoad, nextPage, previousPage };

})()