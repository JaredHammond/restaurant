const createMenu = () => {

    const menuContent = document.createElement('div');
    
    const menu = {
        'ABUELA\'S GUACAMOLE' : "Made fresh and chunky when you order! We start with a whole avocado and then we add fresh cilantro, tomatoes, onions and a hint of jalapeño just for that extra kick.",
        'CHEESE DIP' : 'Sautéed spinach, onions, tomatoes and cilantro topped with our famous white cheese sauce. Garnished with a touch of sour cream',
        'SPINACH & CHORIZO DIP' : 'Refried beans mixed with sautéed pico de gallo, spinach and chorizo topped with white cheese sauce. It\’s delicious!',
        'FAJITAS' : 'Sautéed tomatoes, onions and bell peppers with your choice of meat. Served with rice, refried beans, three flour tortillas and a salad with lettuce, guacamole, sour cream and tomatoes',
    }


    const titleElement = document.createElement('h1');
    titleElement.innerText = 'Menu';
    menuContent.appendChild(titleElement);
    
    let menuItems = Object.keys(menu);
    
    menuItems.forEach(meal => {
        let mealDiv = document.createElement('div');
        mealDiv.classList.add('info');
        
        let mealTitle = document.createElement('h2');
        let mealText = document.createElement('p')
    
        mealTitle.innerText = meal;
        mealText.innerText = menu[meal];

    
        mealDiv.appendChild(mealTitle);
        mealDiv.appendChild(mealText);
    
        menuContent.appendChild(mealDiv);
    });
    
    return menuContent;
};

export {createMenu};