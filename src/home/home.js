// Load topnav component
fetch('../topnav/topnav.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('topnav-container').innerHTML = html;
    })  // html on right because we're assigning the empty div to html
    .catch(error => console.error('Error loading topnav:', error));








fetch("../products/products.html")
    .then(res => res.text())
    .then(res => {
        document.getElementById("products-container").innerHTML = res
    })
    .catch(error => console.error(error))