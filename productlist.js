const urlParams = new URLSearchParams(window.location.search);
const season = urlParams.get("season");

const url = "https://kea-alt-del.dk/t7/api/products?season=" + season;

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleProductList(data);
  });
function handleProductList(data) {
  //   console.log(data);
  data.forEach(showProduct);
}
function showProduct(product) {
  //grab the template

  console.log(product);
  const template = document.querySelector("#smallProductTemplate").content;
  // //clone it
  const copy = template.cloneNode(true);
  //  //change content
  // copy.querySelector("a").setAttribute =
  //   ("href", "product.html?id=" + product.id);
  copy.querySelector("a").href = "product.html?id=" + product.id;
  copy.querySelector(
    ".subtle"
  ).textContent = `${product.articletype}|${product.brandname}`;
  copy.querySelector("h3").textContent = product.productdisplayname;
  copy.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
  copy.querySelector("img").alt = product.productdisplayname;

  //   if(product.soldout){
  //       copy.querySelector("article").classList("soldOut")
  //   }
  //     //grab parent
  const parent = document.querySelector("main");
  //append
  parent.appendChild(copy);
}
