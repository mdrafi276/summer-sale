let total = 0;

function clickHander(data){
    const selectedItemsContainer =document.getElementById('selected-items');
     itemName = data.childNodes[7].childNodes[1].innerText;
     const li = document.createElement('li');
     li.innerText = itemName;
     selectedItemsContainer.appendChild(li);
     
     const price = data.childNodes[7].childNodes[3].innerText.split(' ')[0];
     total = parseInt(total) + parseInt(price);
     const itemTextContainer = document.getElementById('price-item-one');
     itemTextContainer.innerText = total;
    const discount = ((total / 100) * 20).toFixed(2);
        
     const textValueCountainer = document.getElementById('price-item-two');
     const discountItem = total - discount;
     textValueCountainer.innerText = discount;
     const textValueCountainerItem = document.getElementById('price-item-three');
     textValueCountainerItem.innerText = discountItem;
}
function resetButten(){
    location.reload()

}