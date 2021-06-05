/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/home.js

const createHomePage = () => {

    const historyTitle = 'Fresh Home Cooking Since 2021';
    const historyText = 'Started in the back bedroom of our Georgia house, Mama P began cooking her childhood favorites for friends and family. That tradition continues to this day. Today, Mama (as everyone calls her) serves three meals a day to all her fine customers.';
    
    const image = ['images/home-content.jpg', 'Our best pancakes', 'home-content-image'];
    
    const hours = [
        'Mon-Fri 8am - 6pm',
        'Saturday 8am - 3pm',
        'Sunday CLOSED'
    ];
    
    const contentElement = document.createElement('div');
    
    // Page title
    const homeTitle = document.createElement('h1');
    homeTitle.innerText = 'Mama P\'s Soul Food';
    
    // Restaurant history div
    const historyElement = document.createElement('div');
    historyElement.classList.add('info');
    
    const historyTitleElement = document.createElement('h2')
    historyTitleElement.innerText = historyTitle;
    historyElement.appendChild(historyTitleElement);
    
    const historyTextElement = document.createElement('p');
    historyTextElement.innerText = historyText;
    historyElement.appendChild(historyTextElement);
    
    // Image 
    const imageElement = document.createElement('img');
    imageElement.setAttribute('src',`${image[0]}`)
    imageElement.setAttribute('alt', `${image[1]}`);
    imageElement.setAttribute('id',`${image[2]}`);
    
    // Hours of Operation div
    const hoursElement = document.createElement('div');
    hoursElement.setAttribute('id','hours')
    hoursElement.classList.add('info');
    
    const hoursTitleElement = document.createElement('h2');
    hoursTitleElement.innerText = 'Hours'
    hoursElement.appendChild(hoursTitleElement);
    
    hours.forEach(day => {
        const el = document.createElement('p');
        el.innerText = day;
        hoursElement.appendChild(el);
    });
    
    // Build page
    contentElement.appendChild(homeTitle);
    contentElement.appendChild(historyElement);
    contentElement.appendChild(imageElement);
    contentElement.appendChild(hoursElement);

    return contentElement;
};


;// CONCATENATED MODULE: ./src/menu.js
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


;// CONCATENATED MODULE: ./src/index.js



const homeContent = createHomePage();

const content = document.getElementById('content')
content.append(homeContent);

const navs = document.querySelectorAll(['.header']);

navs.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('selected')) {
            return;
        } else {
            let newPage;
            content.removeChild(content.lastChild);

            navs.forEach(thing => {
                thing.classList.remove('selected');
            });

            button.classList.add('selected');
            
            if (button.id == 'home') {
                newPage = createHomePage();
            } else if (button.id == 'menu') {
                newPage = createMenu();
            } else {
                newPage = createContactPage();
            }
            content.appendChild(newPage);
        }
    })
})
/******/ })()
;