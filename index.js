function init(){

  const developmentData = { 
  pageBannerImageDesktop : "image-assets/icons-remastered-online-lp-d.jpg",
  pageBannerImageMobile : "image-assets/icons-remastered-online-lp-m.jpg",
  bannerTitle : 'Legends don\'t change. They adapt.',
  bannerSubText : 'A revolutionary start to a new way forward. Meticulously remastered with innovative technologies, premium materials and incomperable craftsmanship, these enduring icons are crafted to face the future boldly. What\'s next is up to you.',
  productObjects : [{
  productTitle: 'Nuptse Jacket',
  productAttention: 'Remastered',
  productSubText: 'You\'ve seen this jacket. What you haven\'t seen is the innovative:new technology, elevated bonded baffle construction, premium materials. This is not Nuptse you know. It\'s the Nuptse like never before.',
  productButtons: ['Shop Mens', 'Shop Womens'],
  productURL: 'https://www.thenorthface.com/en-us/womens/collections/summit-series-c324773/summit-torre-egger-futurelight-boots-pNF0A52RE?color=KX9',
  productImageDesktop: 'image-assets/icons-remastered-online-lp-rmst-nuptse-d.jpg',
  productImageMobile: 'image-assets/icons-remastered-online-lp-rmst-nuptse-m.jpg',
  productImageAlt: 'Nuptse Jacket'
  },
  {
  productTitle: 'Nuptse Jacket',
  productAttention: 'Remastered',
  productSubText: 'You\'ve seen this jacket. What you haven\'t seen is the innovative:new technology, elevated bonded baffle construction, premium materials. This is not Nuptse you know. It\'s the Nuptse like never before.',
  productButtons: ['Shop Mens', 'Shop Womens'],
  productURL: 'https://www.thenorthface.com/en-us/womens/collections/summit-series-c324773/summit-torre-egger-futurelight-boots-pNF0A52RE?color=KX9',
  productImageDesktop: 'image-assets/icons-remastered-online-lp-rmst-nuptse-d.jpg',
  productImageMobile: 'image-assets/icons-remastered-online-lp-rmst-nuptse-m.jpg',
  productImageAlt: 'Nuptse Jacket'
  }]
} 

function buildBanner(developmentData) {
  document.getElementById('bannerTitle').innerHTML=`<h1>${developmentData.bannerTitle}</h1>`;
  document.getElementById('bannerSubText').innerHTML=`<p>${developmentData.bannerSubText}</p>`;
}

buildBanner(developmentData)
mapProductObjects(developmentData)

function mapProductObjects(developmentData) {
  developmentData.productObjects.map((productObject, index) => {
    if (index % 2 === 0) {
      buildProductImageRight(productObject)
    } else {
      buildProductImageLeft(productObject)
    }
  })
}



function buildProductImageRight(productObject) {

  const productDetails = document.getElementById('productSection');
  productDetails.innerHTML += 
    `<div class='product'>
      <div class='productTextContainer'>
        <h3 class='productAttention'>${productObject.productAttention}<h3>
        <h1 class='productTitle'>${productObject.productTitle}</h1>
        <p class="productSubText">${productObject.productSubText}</p>
        <div class="buttonContainer">
        <a href="${productObject.productURL}"><button>Shop Men's</button></a>
        <a href="${productObject.productURL}"><button>Shop Women's</button></a>
        </div>
      </div>
      <img class="productImage" src="image-assets/icons-remastered-online-lp-rmst-nuptse-d.jpg" alt="nuptse jacket" width="100%">
    </div>`  
}

function buildProductImageLeft(productObject) {

  const productDetails = document.getElementById('productSection');
  productDetails.innerHTML += 
    `<div class='product'>
      <img class="productImage" src="image-assets/icons-remastered-online-lp-rmst-nuptse-d.jpg" alt="nuptse jacket" width="100%">
      <div class='productTextContainer'>
        <h3 class='productAttention'>${productObject.productAttention}<h3>
        <h1 class='productTitle'>${productObject.productTitle}</h1>
        <p class="productSubText">${productObject.productSubText}</p>
        <div class="buttonContainer">
          <button onclick="window.open(${productObject.productURL}, '_blank');">Shop Women's</button>
          <button onclick="window.open(${productObject.productURL}, '_blank');">Shop Men's</button>
        </div>
      </div>
    </div>`  
}

}
init();