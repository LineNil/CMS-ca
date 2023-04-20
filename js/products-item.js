

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const productsUrl = "https://line-nilsen.no/wordpress/wp-json/wc/store/products" + id;
const productContainer = document.querySelector(".productContainer");
const loader = document.querySelector(".loader");


function showLoader(){
  loader.classList.remove("hidden")
}

function hideLoader(){
  loader.classList.add("hidden")
}



async function fetchJacket(){

  const response = await fetch(productsUrl);  
  return await response.json();

}
createHTML();

async function createHTML(){
  showLoader();
  const result = await fetchJacket() 
  hideLoader();
  const newPageTitle = 'jacket |' + result.name;
  document.title = newPageTitle; 


  const productWrapper = document.createElement("section");

  const productDiv = document.createElement("div");
  productDiv.classList.add("item");
  productWrapper.appendChild(productDiv);
      
  const productImg = document.createElement("img");
  productImg.src = result.images[0].src;
  productDiv.appendChild(productImg);
    
  const divProductInfo = document.createElement("div");
  divProductInfo.classList.add("products" , "flex-item-text");
  productDiv.appendChild(divProductInfo);
    
  //prøv å få jakke merket istede
  const productTitle = document.createElement("h2");
  productTitle.innerText = "StormShield";
  divProductInfo.appendChild(productTitle);
    
  const divNamePrice = document.createElement("div");
  divNamePrice.classList.add("flex-price");
  divProductInfo.appendChild(divNamePrice);
    
  const productName = document.createElement("h3");
  productName.innerText = result.name;
  divNamePrice.appendChild(productName);
    
  const productPrice = document.createElement("p");
  productPrice.innerText = "NOK" + " " + result.prices.price;
  divNamePrice.appendChild(productPrice);
    
  //prøv å få til id nr istede
  const productItemNr = document.createElement("h4");
  productItemNr.innerText = "ItemNr" + " " + result.id;
  divProductInfo.appendChild(productItemNr);
    
  const anchorCheckOut = document.createElement("a");
  anchorCheckOut.classList.add("cta-item");
  anchorCheckOut.innerText = "Buy now";
  anchorCheckOut.href = "check-out.html";
  divProductInfo.appendChild(anchorCheckOut);
    
  const infoBulk = document.createElement("div");
  infoBulk.classList.add("info-bulk");
  divProductInfo.appendChild(infoBulk);
    
  const bulkInfo1Div = document.createElement("div");
  infoBulk.appendChild(bulkInfo1Div);
    
  const bulkInfo1 = document.createElement("p");
  bulkInfo1.innerText = "•" + " " + "Free shipping over NOK 899";
  bulkInfo1Div.appendChild(bulkInfo1);
    
  const bulkInfo2Div = document.createElement("div");
  infoBulk.appendChild(bulkInfo2Div);
    
  const bulkInfo2 = document.createElement("p");
  bulkInfo2.innerText = "•" + " " + "Free climate-compensated delivery";
  bulkInfo1Div.appendChild(bulkInfo2);
    
  const bulkInfoDiv3 = document.createElement("div");
  infoBulk.appendChild(bulkInfoDiv3);
    
  const bulkInfo3 = document.createElement("p");
  bulkInfo3.innerText = "•" + " " + "Delivered within 2-4 working days";
  bulkInfo1Div.appendChild(bulkInfo3);
    
  const productInfo = document.createElement("div");
  productInfo.classList.add("product-info");
  productWrapper.appendChild(productInfo);
    
  const about = document.createElement("h3");
  about.innerText = "About The Product:";
  productInfo.appendChild(about);
    
  const material = document.createElement("p");
  material.innerText = "Material: 94% Polyester, 6% Elastane";
  productInfo.appendChild(material);
    
  const description = document.createElement("p");
  description.innerText = result.description.replace(/<\/?[^>]+(>|$)/g, "");
  productInfo.appendChild(description);
    
    
  productContainer.appendChild(productWrapper);
}
 

  
