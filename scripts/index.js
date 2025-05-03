let bagItems;
onLoad();

function onLoad() {
 let bagItemsStr = localStorage.getItem('bagItems');
 bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
 dispalyItemsOnHomePage();
 dispalyBagIcon();
}

function addToBag(itemId) {
    bagItems.push(itemId);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    dispalyBagIcon();
}

function dispalyBagIcon() {
  let bagItemCountELement = document.querySelector('.bag-item-count');
  if (bagItems.length > 0){
    bagItemCountELement.computedStyleMap.visibility = 'visible';
  bagItemCountELement.innerText = bagItems.length;
  } else {
  bagItemCountELement.computedStyleMap.visibility = 'hidden' ;
  }
}

function dispalyItemsOnHomePage() {
  let itemsContainerElement = document.querySelector('.items-container');
  if (!itemsContainerElement) {
    return;
  }

  let innerHtml = '';
  items.forEach(item => {
   innerHtml += `
   <div class="item-container">
   <img class="item-image" src="${item.image}" alt="item image">
   <div class="rating">
      ${item.rating.stars} ⭐|  ${item.rating.count}
    </div>
    <div class="company-name">${item.company}</div>
    <div class="item-name">${item.item_name}</div>
    <div class="price">
        <span class="current-price">Rs ${item.current_price}</span>
        <span class="original-price">Rs ${item.original_price} </span>
        <span class="discount">( ${item.discount_percentage}% OFF)</span>
    </div>
    <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
    </div>`
  });
  itemsContainerElement.innerHTML = innerHtml;
}
  
  