const shoppingcards = document.querySelector('#itemscards');
const items = [
  { id: 0, name: 'Tomate', type: 'Fruta', image: '/assets/img/ingredients/tomato.png', description: 'El tomate es el fruto de la planta Solanum lycopersicum, el cual tiene importancia culinaria, y es una verdura.'},
  { id: 1, name: 'Cebolla', type: 'Verdura', image: '/assets/img/ingredients/onion.png'},
  { id: 2, name: 'Ajo', type: 'Verdura', image: '/assets/img/ingredients/garlic.png'},
  { id: 3, name: 'Manzana', type: 'Fruta', image: '/assets/img/ingredients/apple.png'},
  { id: 4, name: 'Espinaca', type: 'Verdura', image: '/assets/img/ingredients/spinach.png'},
  { id: 5, name: 'Rugula', type: 'Verdura', image: '/assets/img/ingredients/rugula.png' },
  { id: 6, name: 'Banano', type: 'Fruta', image: '/assets/img/ingredients/banana.png' },
  { id: 7, name: 'Naranja', type: 'Fruta', image: '/assets/img/ingredients/orange.png' },
  { id: 8, name: 'Fresa', type: 'Fruta', image: '/assets/img/ingredients/strawberry.png' },
  { id: 9, name: 'Uva', type: 'Fruta', image: '/assets/img/ingredients/grapes.png' },
  { id: 10, name: 'Pera', type: 'Fruta', image: '/assets/img/ingredients/pear.png' },
  { id: 11, name: 'Zanahoria', type: 'Verdura', image: '/assets/img/ingredients/carrot.png' },

];

function createCard(item) {
  return `
    <div class="card">
      <img src="${item.image}" class="card-img-top" alt="${item.name}">
      <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
        <p class="card-text">Tipo: ${item.type}</p>
        <p class="card-text"></p>
        <button>Agregar</button>
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