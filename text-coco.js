let total = 0;
function clickHander(data){
    const selectedItemsContainer =document.getElementById('selected-items');
     itemName = data.childNodes[7].childNodes[1].innerText;
     const li = document.createElement('li');
     li.innerText = itemName;
     selectedItemsContainer.appendChild(li);

     const priceProductText = data.childNodes[7].childNodes[3].innerText.split(' ')[0];
     const itemTextContainer = document.getElementById('price-item-one');
     total =  parseInt(total) + parseInt(priceProductText);
     itemTextContainer.innerText = total.toFixed(2);


    //  const textValueCountainer = document.getElementById('price-item-three');
    //  const discountItem = total - discount;
    //  textValueCountainer.innerText = discountItem;
    //  console.log(textValueCountainer);
    const callBtn = document.getElementById('apply-btn');
    if(total >=200){
        callBtn.style.backgroundColor = '#E527B2';
    callBtn.removeAttribute('disabled')
    }else{
        callBtn.style.backgroundColor = '#E5E7EB';
        callBtn.setAttribute('disabled',true)
    } 
    const buyNow = document.getElementById('buy-now');
    if(total > 0){
        buyNow.style.backgroundColor = '#E527B2';
        buyNow.removeAttribute('disabled')
    }else{
        buyNow.style.backgroundColor = 'gray';
        buyNow.setAttribute('disabled',true);
    } 
    

}

 document.getElementById('apply-btn').addEventListener("click",function(){
    const inputItem = document.getElementById('input-item').value;
    const priceItemTwo = document.getElementById('price-item-two');
    const priceItemThree = document.getElementById('price-item-three');
    

    if(inputItem === 'SELL200'){

        discountItemText = ((total /100 )* 20);
        discountItemFinal = total - discountItemText;
        priceItemTwo.innerText = parseInt(discountItemText).toFixed(2);
        priceItemThree.innerText = discountItemFinal.toFixed(2);

    }
 })
     
 




function resetButten(){
    location.reload()

}