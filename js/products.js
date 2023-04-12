
newPageTitle = 'Products';
document.title = newPageTitle;


const productsUrl = "http://rainydays.local/wp-json/wc/store/products";

const productContainer = document.querySelector(".product-list");

async function makeApiCall() {
  const response = await fetch(productsUrl);
  const results = await response.json();
  return results
}


async function generateHTML() {
  const results = await makeApiCall()
  results.forEach((result) => {
    createProduct(result)
  })
}

generateHTML();



function createProduct(result = {}) {
  const productAnchorWrapper = document.createElement("a");
  productAnchorWrapper.classList.add("a-products");
  productAnchorWrapper.href = "/html-css-ca/Products-item.html?id=" + id;

  const productsDiv = document.createElement("div");
  productsDiv.classList.add("products");
  productAnchorWrapper.appendChild(productsDiv);

  const containerDiv = document.createElement("div");
  containerDiv.classList.add("container");
  productsDiv.appendChild(containerDiv);

  const middleDiv = document.createElement("div");
  middleDiv.classList.add("middle");
  containerDiv.appendChild(middleDiv);

  const productsImgTextDiv = document.createElement("div");
  productsImgTextDiv.classList.add("products-img-text");
  productsImgTextDiv.innerText = result.name;
  middleDiv.appendChild(productsImgTextDiv);

  const productImg = document.createElement("img");
  productImg.classList.add("products-img");
  productImg.src = result.images[0].src;
  containerDiv.appendChild(productImg);

  const productTitle = document.createElement("h2");
  productTitle.innerText = result.name;
  productsDiv.appendChild(productTitle);

  const productTitle2 = document.createElement("h3");
  productTitle2.innerText = result.name;
  productsDiv.appendChild(productTitle2);

  const productsCartDiv = document.createElement("div");
  productsCartDiv.classList.add("flex-price-cart");
  productsDiv.appendChild(productsCartDiv);

  const productPrice = document.createElement("p");
  productPrice.innerText = "NOK" + " " + result.prices.price;
  productsCartDiv.appendChild(productPrice);

  const productCart = document.createElement("p");
  productCart.classList.add = ("fa-solid fa-cart-shopping");
  productsCartDiv.appendChild(productCart);

  productContainer.appendChild(productAnchorWrapper);
};