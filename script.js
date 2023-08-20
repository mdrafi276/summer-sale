let total = 0;

function clickHander(data){
    const selectedItemsContainer =document.getElementById('selected-items');
     itemName = data.childNodes[7].childNodes[1].innerText;
     const li = document.createElement('li');
     li.innerText = itemName;
     selectedItemsContainer.appendChild(li);
     
     const price = data.childNodes[7].childNodes[3].innerText.split(' ')[0];
     total = parseInt(total) + parseInt(price);
     console.log(total)
}