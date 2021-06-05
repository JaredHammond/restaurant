import {createHomePage} from './home.js';
import {createMenu} from './menu.js';

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