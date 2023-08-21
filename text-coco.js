let total = 0;
function discountButton(){
    const callBtn = document.getElementById('apply-btn');
    const btnPrice = document.getElementById('price-item-one').innerText;
    if(btnPrice >=200){
        callBtn.removeAttribute('disabled')
        
    }
    // else{
    //     callBtn.setAttribute('disabled')
    // }

}

function coponCondition(){
    const coponInput = document.getElementById('input-item').value;
    const callBtnItem = document.getElementById('apply-btn');

    if(coponInput === "SELL200" ){
        const btnPrice = document.getElementById('price-item-one').innerText;
        // if(btnPrice )
    }
}


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
        
     const textValueCountainer = document.getElementById('price-item-three');
     const discountItem = total - discount;
     textValueCountainer.innerText = discountItem;
     console.log(textValueCountainer)
   
     
}


function resetButten(){
    location.reload()

}