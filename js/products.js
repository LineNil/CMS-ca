
newPageTitle = 'Products';
document.title = newPageTitle;


const productsUrl = "http://rainydays.local/wp-json/wc/store/products";

const productContainer = document.querySelector(".product-list");
const loader = document.querySelector(".loader");


function showLoader(){
  loader.classList.remove("hidden")
}

function hideLoader(){
  loader.classList.add("hidden")
}


async function makeApiCall() {

  const response = await fetch(productsUrl);
  return await response.json();

}


async function generateHTML() {

  const results = await makeApiCall()
  results.forEach((result) => {
    createProduct(result)
  })

}

generateHTML();



function createProduct(result = {}) {
  showLoader();

  const productAnchorWrapper = document.createElement("a");
  productAnchorWrapper.classList.add("a-products");
  productAnchorWrapper.href = "Products-item.html?id=" + result.id;

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
  productTitle.innerText = "StormShield";
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



//not working!!?
  const productCart = document.createElement("p");
  productCart.classList.add = ("fa-solid fa-cart-shopping");
  console.log(productCart)
  productsCartDiv.appendChild(productCart);

  productContainer.appendChild(productAnchorWrapper);

  hideLoader();
};
