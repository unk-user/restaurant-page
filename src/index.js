

import scrollCatPath from './res/cat-svgrepo-com.png';
import cat1 from './res/kevin-petit-9-y6j5asV2s-unsplash.jpg';
import cat2 from './res/kevin-petit-ABGGdRLQ2t4-unsplash.jpg';
import cat3 from './res/mary-p-sENUNYD9bac-unsplash.jpg';
import cat4 from './res/tea-bell-2hNUpOolTBo-unsplash.jpg';
import cat5 from './res/viviane-pasta-jsOi-SaGetU-unsplash.jpg';
import background from './res/ivan-P7X8o2U66t4-unsplash.jpg';
import reserveImage from './res/randy-fath-Cko-B-3jPjM-unsplash.jpg';
import './index.css';


const content = document.querySelector('#content');
const home = document.createElement('button');
const menu = document.createElement('button');
const reserve = document.createElement('button');
const location = document.createElement('button');
const nav = document.createElement('div');
const main = document.createElement('div');
const footer = document.createElement('div');

const quote = document.createElement('section');
const midSection = document.createElement('section');
const bottomSection = document.createElement('section');
const menuSection = document.createElement('section');
const reserveSection = document.createElement('section');
const locationSection = document.createElement('section');

function appendContent() {
    const body = document.querySelector('body');
    body.style.backgroundImage = `url(${background})`;
    nav.setAttribute('id', 'nav');
    main.setAttribute('id', 'main');
    footer.setAttribute('id', 'footer');
    footer.textContent = 'Copyright © 2023 Unk-user';

    home.textContent = 'Home';
    home.setAttribute('id', 'Home');
    home.className = 'navitem';
    menu.textContent = 'Menu';
    menu.setAttribute('id', 'Menu');
    menu.className = 'navitem';
    reserve.textContent = 'Reserve';
    reserve.setAttribute('id', 'Reserve');
    reserve.className = 'navitem';
    location.textContent = 'Location';
    location.setAttribute('id', 'Location');
    location.className = 'navitem';

    const brand = document.createElement('h2');
    brand.setAttribute('id', 'brand');
    brand.innerHTML = 'Golden<br>Pair';

    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(brand);
    nav.appendChild(reserve);
    nav.appendChild(location);
    
    content.appendChild(nav);
    content.appendChild(main);
    content.appendChild(footer);
    
}


function appendHome() {
    const quoteH = document.createElement('h1');
    quote.setAttribute('id', 'quote');
    quoteH.innerHTML = '<em>Cats Garden & Cafe</em>';
    quote.appendChild(quoteH);

    midSection.setAttribute('id', 'mid-section');

    const cardsContainer = document.createElement('div');
    cardsContainer.setAttribute('id', 'cards-container');

    let urls = [cat1 , cat2, cat3, cat4, cat5];
    for(let i = 0; i < 5; i++) {
        let catcard = document.createElement('div');
        catcard.className = 'catcard';
        let img = document.createElement('img');
        img.className = 'cardcat';
        img.setAttribute('src', `${urls[i]}`);
        catcard.appendChild(img);
        cardsContainer.appendChild(catcard);
    }

    const scrollDown = document.createElement('div');
    scrollDown.setAttribute('id', 'scroll-down');
    const scrollCat = document.createElement('img');
    scrollCat.setAttribute('id', 'scroll-cat');
    scrollCat.setAttribute('src', scrollCatPath);
    const scrollText = document.createElement('h3');
    scrollText.textContent = 'Scroll Down';
    scrollDown.appendChild(scrollCat);
    scrollDown.appendChild(scrollText);

    midSection.appendChild(cardsContainer);
    midSection.appendChild(scrollDown);

    bottomSection.setAttribute('id', 'bottom-section');

    const about = document.createElement('div');
    about.setAttribute('id', 'about');
    const aboutText = document.createElement('p');
    aboutText.textContent = 'Welcome to Golden Pair - Where Whiskers Meet Warmth! Founded with a passion for creating memorable experiences, Golden Pair is a haven where friends can come together to savor delicious food, bask in the beauty of a vibrant garden, and enjoy the playful company of our feline friends. Nestled in Agadir, our unique cafe brings a blend of culinary delights, cozy ambiance, and the charm of adorable cats under one roof. Our garden-themed setting provides a refreshing escape from the hustle and bustle of daily life. Imagine enjoying a cup of artisanal coffee surrounded by lush greenery, while friendly felines roam freely, adding an extra layer of warmth to your experience. Whether you\'re here for a special celebration or a casual outing, Golden Pair is designed to cater to all ages. Our resident cats are not just adorable companions; they\'re an integral part of the Golden Pair family. Specially selected for their friendly and playful nature, our feline friends are sure to win your hearts. Feel free to interact, play, or simply enjoy their company while you indulge in our delectable menu. Join us in this unique blend of culinary delights, greenery, and feline charm. Thank you for considering Golden Pair for your next memorable outing. We look forward to serving you at Golden Pair - a place where every visit is a purr-fectly delightful experience.';
    const infj = document.createElement('p');
    infj.setAttribute('id', 'infj');
    infj.innerHTML = '<em>INFJ - CF</em>';

    about.appendChild(aboutText);
    about.appendChild(infj);

    bottomSection.appendChild(about);

    
}


function appendMenu() {
    menuSection.setAttribute('id', 'menu-section');
    
    const menuCard = document.createElement('div');
    menuCard.setAttribute('id', 'menu-card');
    
    const menu = document.createElement('div');
    menu.setAttribute('id', 'menu');

    const left = document.createElement('div');
    const right = document.createElement('div');
    left.setAttribute('id', 'left');
    right.setAttribute('id', 'right');
    left.className = 'menu-column';
    right.className = 'menu-column';

    const bTitle = document.createElement('h3');
    const beverage = document.createElement('ul');
    beverage.className = 'category';
    bTitle.textContent = 'Beverages:';
    const aTitle = document.createElement('h3');
    const appetizer = document.createElement('ul');
    appetizer.className = 'category';
    aTitle.textContent = 'Appetizers:';
    const mTitle = document.createElement('h3');
    const mainCourse = document.createElement('ul');
    mainCourse.className = 'category';
    mTitle.textContent = 'Main Course:';
    const dTitle = document.createElement('h3');
    const dessert = document.createElement('ul');
    dessert.className = 'category';
    dTitle.textContent = 'Dessert:';
    const kTitle = document.createElement('h3');
    const kids = document.createElement('ul');
    kids.className = 'category';
    kTitle.textContent = 'Kids Corner:';
    const sTitle = document.createElement('h3');
    const special = document.createElement('ul');
    special.className = 'category';
    sTitle.textContent = 'Special Drinks:';

    const menuItems = [
        'Caramel Catpurr-uccino', 'Purr-tea Paradise', 'Meow-mosa',
        'Catnip Caprese Skewers', 'Tuna Tartare Towers',
        'Salmon and Sweet Potato Croquettes', 'Miaow Mein Noodles', 'Paw-sagna',
        'Chocolate Mouse Mousse', 'Lemon Kitty Cupcakes', 'Cat\'s Cradle Cheesecake',
        'Kitty Quesadillas', 'Mini Fish and Chips',
        'Catnip Cooler', 'Furry Fizz'
    ]

    for(let i = 0; i < 15; i++){
        let li = document.createElement('li');
        li.textContent = menuItems[i];
        if(i < 3){
            beverage.appendChild(li);
        } else if (i < 5){
            appetizer.appendChild(li);
        } else if (i < 8){
            mainCourse.appendChild(li);
        } else if (i < 11) {
            dessert.appendChild(li);
        } else if (i < 13) {
            kids.appendChild(li);
        } else {
            special.appendChild(li);
        }
    }

    left.appendChild(bTitle);
    left.appendChild(beverage);
    left.appendChild(aTitle);
    left.appendChild(appetizer);
    left.appendChild(mTitle);
    left.appendChild(mainCourse);
    left.appendChild(dTitle);
    left.appendChild(dessert);
    right.appendChild(kTitle);
    right.appendChild(kids);
    right.appendChild(sTitle);
    right.appendChild(special);

    menu.appendChild(left);
    menu.appendChild(right);
    menuCard.appendChild(menu);
    menuSection.appendChild(menuCard);

}

function appendReserve() {
        reserveSection.setAttribute('id', 'reserve-section');
    
        const reserveCard = document.createElement('div');
        reserveCard.setAttribute('id', 'reserve-card');
    
        const reserveImg = document.createElement('div');
        reserveImg.setAttribute('id', 'reserve-img');
        reserveImg.style.backgroundImage = `url(${reserveImage})`;
    
        const reserveForm = document.createElement('div');
        reserveForm.setAttribute('id', 'reserve-form');
    
        const form = document.createElement('form');
        form.setAttribute('action', '');
    
        const formElements = [
            { label: 'Date:', type: 'date', id: 'date' },
            { label: 'Chairs Number:', type: 'number', id: 'chairs', min: '1', max: '10', value: '1' },
            { label: 'Inside/Outside', type: 'select', id: 'place', options: ['Inside', 'Outside'] },
            { label: 'Phone Number:', type: 'tel', id: 'phone' },
        ];
    
        formElements.forEach(element => {
            const label = document.createElement('label');
            label.setAttribute('for', element.id);
            label.textContent = element.label;
    
            if (element.type === 'select') {
                const select = document.createElement('select');
                select.setAttribute('name', element.id);
                select.setAttribute('id', element.id);
    
                element.options.forEach(optionValue => {
                    const option = document.createElement('option');
                    option.setAttribute('value', optionValue);
                    option.textContent = optionValue;
                    select.appendChild(option);
                });
    
                form.appendChild(label);
                form.appendChild(select);
            } else {
                const input = document.createElement('input');
                input.setAttribute('type', element.type);
                input.setAttribute('id', element.id);
    
                if (element.type === 'number') {
                    input.setAttribute('min', element.min);
                    input.setAttribute('max', element.max);
                    input.setAttribute('value', element.value);
                }
    
                form.appendChild(label);
                form.appendChild(input);
            }
        });
    
        const reserveButton = document.createElement('button');
        reserveButton.setAttribute('id', 'reserve-button');
        reserveButton.textContent = 'Reserve';

        form.appendChild(reserveButton);
        reserveForm.appendChild(form);
        
    
        reserveCard.appendChild(reserveImg);
        reserveCard.appendChild(reserveForm);
    
        reserveSection.appendChild(reserveCard);
        
}


 function appendLocation() {
    locationSection.setAttribute('id', 'location-section');
    const locationCard = document.createElement('div');
    locationCard.setAttribute('id', 'location-card');

    const locationImg = document.createElement('img');
    locationImg.setAttribute('src', '/src/res/Location.PNG');

    const locationText = document.createElement('h2');
    locationText.textContent = 'Agadir';
     
    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = '+212 31*321**3';

    locationCard.appendChild(locationImg);
    locationCard.appendChild(locationText);
    locationCard.appendChild(phoneNumber);
    locationSection.appendChild(locationCard);
    
 }


 home.addEventListener('click', () => {
    menuSection.remove();
    reserveSection.remove();
    locationSection.remove();
    home.className = 'navitem active';
    location.className = 'navitem';
    reserve.className = 'navitem';
    menu.className = 'navitem';
    
    main.appendChild(quote);
    main.appendChild(midSection);
    main.appendChild(bottomSection);
 });

 menu.addEventListener('click', () => {
    quote.remove();
    midSection.remove();
    bottomSection.remove();
    reserveSection.remove();
    locationSection.remove();
    menu.className = 'navitem active';
    location.className = 'navitem';
    reserve.className = 'navitem';
    home.className = 'navitem';

    main.appendChild(menuSection);
 });

 reserve.addEventListener('click', () => {
    quote.remove();
    midSection.remove();
    bottomSection.remove();
    menuSection.remove();
    locationSection.remove();
    reserve.className = 'navitem active';
    location.className = 'navitem';
    home.className = 'navitem';
    menu.className = 'navitem';

    main.appendChild(reserveSection);
 });

 location.addEventListener('click', () => {
    quote.remove();
    midSection.remove();
    bottomSection.remove();
    reserveSection.remove();
    menuSection.remove();
    location.className = 'navitem active';
    home.className = 'navitem';
    reserve.className = 'navitem';
    menu.className = 'navitem';

    main.appendChild(locationSection);
 });

 appendContent();
 appendHome();
 appendLocation();
 appendMenu();
 appendReserve();

 main.appendChild(quote);
 main.appendChild(midSection);
 main.appendChild(bottomSection);
 home.className = 'navitem active'