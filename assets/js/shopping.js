const shoppingcards = document.querySelector('#itemscards');
const items = [
  { name: 'Tomate', type: 'Fruta', image: '/assets/img/tomato.png', description: 'El tomate es el fruto de la planta Solanum lycopersicum, el cual tiene importancia culinaria, y es una verdura. Siendo el tomate clasificado botánicamente como una fruta, más precisamente como una baya, es comúnmente usado en arte culinario como un ingrediente vegetal o también como guarnición.'},
  { name: 'Cebolla', type: 'Verdura', image: '/assets/img/'},
  { name: 'Ajo', type: 'Verdura', image: '/assets/img/'},
  { name: 'Manzana', type: 'Fruta', image: '/assets/img/'},
  { name: 'Espinaca', type: 'Verdura', image: '/assets/img/'},
  { name: 'Rugula', type: 'Verdura', image: '/assets/img/'},
];

function createCard(item) {
  return `
    <div class="card" style="width: 18rem;">
      <img src="${item.image}" class="card-img-top" alt="${item.name}">
      <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
        <p class="card-text">Tipo: ${item.type}</p>
        <p class="card-text">${item.description}</p>
      </div>
    </div>
  `;
}

function displayItems(items) {
  items.forEach(item => {
    const cardHTML = createCard(item);
    shoppingcards.innerHTML += cardHTML;
  });
}

displayItems(items);