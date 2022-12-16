function init(){

  /**
   * Mock Data source of products and banner details
   */
  const developmentData = { 
  pageBannerImageDesktop : "image-assets/icons-remastered-online-lp-d.jpg",
  pageBannerImageMobile : "image-assets/icons-remastered-online-lp-m.jpg",
  bannerHeadline : 'Legends <br> don\'t change. <br> They adapt.',
  bannerCopy : 'A revolutionary start to a new way <br> forward. Meticulously remastered <br> with innovative technologies,<br> premium materials and incomperable <br> craftsmanship, these enduring icons <br> are crafted to face the future boldly.<br> What\'s next is up to you.',
  productObjects : [{
  productHeadline: 'Nuptse Jacket',
  productAttention: 'Remastered',
  productCopy: 'You\'ve seen this jacket. What you haven\'t <br> seen is the innovation: new technology, <br> elevated bonded baffle construction,<br> premium materials. This is not the <br> Nuptse you know. It\'s the Nuptse like <br> never before.',
  productURLMens: 'https://www.thenorthface.com/en-us/bags-and-gear/tents-c211750/assault-2-futurelight-tent-pNF0A52UT?color=21D',
  productURLWomens: 'https://www.thenorthface.com/en-us/womens/collections/summit-series-c324773/summit-torre-egger-futurelight-boots-pNF0A52RE?color=KX9',
  productImageDesktop: 'image-assets/icons-remastered-online-lp-rmst-nuptse-d.jpg',
  productImageMobile: 'image-assets/icons-remastered-online-lp-rmst-nuptse-m.jpg',
  productImageAlt: 'Nuptse Jacket'
  },
              //Uncomment this block to see scaleable functionality for multiple products.
  // {
  // productHeadline: 'Nuptse Jacket',
  // productAttention: 'Remastered',
  // productCopy: 'You\'ve seen this jacket. What you haven\'t <br> seen is the innovation: new technology, <br> elevated bonded baffle construction,<br> premium materials. This is not the <br> Nuptse you know. It\'s the Nuptse like <br> never before.',
  // productURLMens: 'https://www.thenorthface.com/en-us/bags-and-gear/tents-c211750/assault-2-futurelight-tent-pNF0A52UT?color=21D',
  // productURLWomens: 'https://www.thenorthface.com/en-us/womens/collections/summit-series-c324773/summit-torre-egger-futurelight-boots-pNF0A52RE?color=KX9',
  // productImageDesktop: 'image-assets/icons-remastered-online-lp-rmst-nuptse-d.jpg',
  // productImageMobile: 'image-assets/icons-remastered-online-lp-rmst-nuptse-m.jpg',
  // productImageAlt: 'Nuptse Jacket'
  // }
]
} 

/**
 * Function to handle appending banner data to the page
 * 
 * @param developmentData
 */
function buildBanner(developmentData) {
  document.getElementById('bannerHeadline').innerHTML=`<h1>${developmentData.bannerHeadline}</h1>`;
  document.getElementById('bannerCopy').innerHTML=`<p>${developmentData.bannerCopy}</p>`;
}

buildBanner(developmentData)
mapProductObjects(developmentData)

/**
 * Function to handle if a product image should be placed on the right or left of the page,
 * is scalable for multiple products
 * 
 * @param developmentData
 */
function mapProductObjects(developmentData) {
  developmentData.productObjects.map((productObject, index) => {
    if (index % 2 === 0) {
      buildProductImageRight(productObject)
    } else {
      buildProductImageLeft(productObject)
    }
  })
}

/**
 * Fucntion to handle if a product has image data on the right and text data on the left
 * 
 * @param productObject
 */
function buildProductImageRight(productObject) {
  const productDetails = document.getElementById('productSection');
  productDetails.innerHTML += 
    `<div class='productRight'>
      <div class='productTextContainer'>
        <div class='productText'>
          <p class='productAttention'>${productObject.productAttention}<p>
          <h2 class='productHeadline'>${productObject.productHeadline}</h2>
          <p class='productCopy'>${productObject.productCopy}</p>
        <div class="buttonContainer">
          <a href="${productObject.productURLWomens}"><button >Shop Women's</button></a>
          <a href="${productObject.productURLMens}"><button >Shop Men's</button></a>
        </div>
        </div>
      </div>
      <img class="productImageDesktop" src="${productObject.productImageDesktop}" alt="nuptse jacket" width="100%">
      <img class="productImageMobile" src="${productObject.productImageMobile}" alt="nuptse jacket" width="100%">
    </div>`  
}

/**
 * Function to handle if a product has image data on the left and text data on the right
 * 
 * @param productObject
 */
function buildProductImageLeft(productObject) {
  const productDetails = document.getElementById('productSection');
  productDetails.innerHTML += 
    `<div class='productLeft'>
    <img class="productImageDesktop" src="${productObject.productImageDesktop}" alt="nuptse jacket" width="100%">
      <img class="productImageMobile" src="${productObject.productImageMobile}" alt="nuptse jacket" width="100%">
      <div class='productTextContainer'>
        <div class= 'productText'>
          <p class='productAttention'>${productObject.productAttention}<p>
          <h2 class='productHeadline'>${productObject.productHeadline}</h2>
          <p class="productCopy">${productObject.productCopy}</p>
        <div class="buttonContainer">
          <a href="${productObject.productURLWomens}"><button>Shop Women's</button></a>
          <a href="${productObject.productURLMens}"><button>Shop Men's</button></a>
        </div>
        </div>
      </div>
    </div>`  
}

}
init();