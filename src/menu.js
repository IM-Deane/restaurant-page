

const Food = (name, price, itemClass) => {

  // Display item in menu format
  const display = () => "Name: " + name + "\n$" + price;


  return {name, price, itemClass, display}
}

// Menu mod
const menu = ((id) => {

  const mainContent = document.getElementById(id);

  //  Menu tab
  const menuTab = document.createElement('div');
  menuTab.id = 'menu';
  menuTab.classList.add('tab');

  // Add menu tab to DOM
  mainContent.appendChild(menuTab);

  // Class: Starters
  const starters = document.createElement('div');
  starters.id = "starters";
  // Class title
  const startersHeader = document.createElement('h2');
  startersHeader.innerText = "STARTERS";
  startersHeader.style = "bold";

  // Render first
  starters.prepend(startersHeader);

  // Add class to DOM
  menuTab.appendChild(starters);

  // Class: Entrees
  const entrees = document.createElement('div');
  entrees.id = "entrees";
  // Class title
  const entreesHeader = document.createElement('h2');
  entreesHeader.innerText = "ENTREES";
  entreesHeader.style = "bold";

  // Render first
  entrees.prepend(entreesHeader);

  // Add class to DOM
  menuTab.appendChild(entrees);

  // Class: Dessert
  const desserts = document.createElement('div');
  desserts.id = "desserts";
  // Class title
  const dessertsHeader = document.createElement('h2');
  dessertsHeader.innerText = "DESSERTS";
  dessertsHeader.style = "bold";

  // Render first
  desserts.prepend(dessertsHeader);

  // Add class to DOM
  menuTab.appendChild(desserts);
  

  // Adds a new dish to the menu
  const _addToMenu = (dish) => {

    // Menu item content
    const newMenuItem = document.createElement('div');

    // Styling
    const goldText = "#9C841A";

    newMenuItem.innerHTML = 
    `<h4 data-menu-name style="color: ${goldText}">${dish.name}</h4>
    <p data-menu-price style="color: #919191">$${dish.price}</p>
    `;

    // Check class to determine dish placement
    if (dish.itemClass === "entree") {
      // Render in entrees
      entrees.appendChild(newMenuItem);
    }
    else if (dish.itemClass === "starter") {
      // Render in starters
      starters.appendChild(newMenuItem);
    }
    else if (dish.itemClass === "dessert") {
      // Render in desserts
      desserts.appendChild(newMenuItem);
    }
    
  }

  // DEMO FUNCTION:  Create some random menu items to display on DOM
  const populateMenu = () => {

    // STARTERS
    _addToMenu( Food("Lobster Gorgonzola Dip", 17, "starter") );
    _addToMenu( Food("Caesar salad", 10, "starter") );
    _addToMenu( Food("Chicken Wings", 15.95, "starter") );
    _addToMenu( Food("Crab Cakes", 15.95, "starter") );
    _addToMenu( Food("Steak Bites", 17.95, "starter") );

    // ENTREES
    _addToMenu( Food("Sirloin, 7oz", 38, "entree") );
    _addToMenu( Food("Filet, 8oz", 42, "entree") );
    _addToMenu( Food("Smoked Ribeye, 14oz", 45, "entree") );
    _addToMenu( Food("Oven Roasted Chicken", 27.95, "entree") );
    _addToMenu( Food("The Viking Burger", 18.95, "entree") );

    // DESSERTS
    _addToMenu( Food("Carribean Rum Cake", 10.95, "dessert") );
    _addToMenu( Food("Rogvir's Cast-iron Apple Pie", 12, "dessert") );
    _addToMenu( Food("Dragon Boat Split", 8.95, "dessert") );


  }

  return {populateMenu};

})


export {menu, Food}