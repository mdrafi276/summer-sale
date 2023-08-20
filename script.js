let total = 0;

function clickHander(data){
    const selectedItemsContainer =document.getElementById('selected-items');
     itemName = data.childNodes[7].childNodes[1].innerText;
     const li = document.createElement('li');
     li.innerText = itemName;
     selectedItemsContainer.appendChild(li);
     
     const price = data.childNodes[7].childNodes[3].innerText.split(' ')[0];
     total = parseInt(total) + parseInt(price);
     const itemTextContainer = document.getElementById('price-item-two');
     itemTextContainer.innerText = total;
    const discount = ((total / 100) * 20).toFixed(2);
        const discountItem = total - discount;
     const textValueCountainer = document.getElementById('price-item-three');
     textValueCountainer.innerText = discountItem;
     

     
     console.log()
}