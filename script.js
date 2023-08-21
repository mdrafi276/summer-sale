// card one 

function clickHander(){
    const price = productsPrice("")
}

function productsPrice(data) {

    const selectedItemsContaine = document.getElementById(data);
    const stringPrice = selectedItemsContaine.innerText;
    const productPrice = parseFloat(stringPrice);
    return productPrice;


  }
  function totalPriceSetup(price, priceProduct){
    const totalPriceValueElement = document.getElementById(price);
    totalPriceValueElement.innerText = priceProduct;
    
  }
  function resetButten(){
    location.reload()

}