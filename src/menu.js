

export function goingMenu() {
      //menu
      const container = document.querySelector('#content');
      const menu = document.createElement('main');
      menu.id = "Menu"
      container.appendChild(menu);
      menu.classList.add('tabContent');
  
      const beverage = document.createElement('div');
      menu.appendChild(beverage);
      beverage.id = 'beverage';
  
      const honeyTea = document.createElement('div');
      beverage.appendChild(honeyTea);
      honeyTea.innerText = "A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!"
}