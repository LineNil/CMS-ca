const featuredUrl = "https://line-nilsen.no/wordpress/wp-json/wc/store/products?featured=true";
const featuredProducts = document.querySelector(".featured-products");
const loader = document.querySelector(".loader");


function showLoader(){
  loader.classList.remove("hidden")
}

function hideLoader(){
  loader.classList.add("hidden")
}


async function displayFeatured(){
  showLoader();
  const response = await fetch (featuredUrl)
  const products = await response.json();

  
  for(let i=0; i < products.length; i++){

    const aFeatured = document.createElement("a");
    aFeatured.href = "Products-item.html?id=" + products[i].id;
    aFeatured.classList.add("featured-div");
    featuredProducts.appendChild(aFeatured);

    const featuredDiv = document.createElement("div");
    aFeatured.appendChild(featuredDiv);

    const featuredImg = document.createElement("img");
    featuredImg.classList.add("featured-img");
    featuredImg.src = products[i].images[0].src;
    featuredDiv.appendChild(featuredImg);

    const featuredBrand = document.createElement("p");
    featuredBrand.classList.add("featured-brand");
    featuredBrand.innerText = "Granite";
    featuredDiv.appendChild(featuredBrand);

    const featuredDiv2 = document.createElement("div");
    featuredDiv2.classList.add("name-price-div");
    featuredDiv.appendChild(featuredDiv2);

    const featuredName = document.createElement("p");
    featuredName.classList.add("featured-name");
    featuredName.innerText = products[i].name;
    featuredDiv2.appendChild(featuredName);

    const productPrice = document.createElement("p");
    productPrice.innerText = "NOK" + " " + products[i].prices.price;
    featuredDiv2.appendChild(productPrice);
  }
  hideLoader();
}

displayFeatured();

