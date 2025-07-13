    var productcontainer = document.getElementById("product");
    var searchInput = document.getElementById("search");
    var productlist = productcontainer.querySelectorAll("div")

    searchInput.addEventListener("keyup", function(event) {
        var searchTerm = event.target.value.toUpperCase();
        productlist.forEach(function(product) {
            var productName = product.querySelector("h2").textContent.toUpperCase();
            if (productName.includes(searchTerm)) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    });