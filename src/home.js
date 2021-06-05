
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

export {createHomePage};