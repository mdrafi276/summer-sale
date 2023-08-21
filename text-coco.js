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
        buyNow.setAttribute('disabled',true)
    } 

}
 
     
 




function resetButten(){
    location.reload()

}