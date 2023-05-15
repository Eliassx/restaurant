const menu = [
    {
        id: 1,
        title: 'Buttermilk Pancakes',
        price: 15.99,
        category: 'Breakfast',
        image: './assets/img/item-1.jpeg',
        description: "I'm baby woke milkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed.",
    },

    {
        id: 2,
        title: 'Lunch Double',
        price: 13.99,
        category: 'Lunch',
        image: './assets/img/item-2.jpeg',
        description: "Vaporware iPhone mumblecore selvage raw denim slow-carb leggins gochujang helvetica man braid jianbing. Marfa thundercats.",
    },

    {
        id: 3,
        title: 'Godzilla Milkshake',
        price: 6.99,
        category: 'Shakes',
        image: './assets/img/item-3.jpeg',
        description: "Ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
    },

    {
        id: 4,
        title: 'Country Delight',
        price: 20.99,
        category: 'Breakfast',
        image: './assets/img/item-4.jpeg',
        description: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism autin milkshake troffaut.",
    },

    {
        id: 5,
        title: 'Egg Attack',
        price: 22.99,
        category: 'Lunch',
        image: './assets/img/item-5.jpeg',
        description: "Franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
    },

    {
        id: 6,
        title: 'Oreo Dream',
        price: 18.99,
        category: 'Shakes',
        image: './assets/img/item-6.jpeg',
        description: "Portland chicharrones ethical edilson bulb, palo santo craft beer chia heirloom iPhone everday.",
    },

    {
        id: 7,
        title: 'Bacon Overflow',
        price: 8.99,
        category: 'Breakfast',
        image: './assets/img/item-7.jpeg',
        description: "Carry jianbing normcore freegan. Viral single-origin coffe live-edge, pork belly cloud bread iceland put a bird.",
    },

    {
        id: 8,
        title: 'American Classic',
        price: 12.99,
        category: 'Lunch',
        image: './assets/img/item-8.jpeg',
        description: "On it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings Food truck truffaut",
    },

    {
        id: 9,
        title: 'Quarantine Buddy',
        price: 16.99,
        category: 'Shakes',
        image: './assets/img/item-9.jpeg',
        description: "Skateboarder farn synth authentic semiotics. Live-edge lyft af, edilson buld yuccie crucifx microdosing.",
    },

    {
        id: 10,
        title: 'Stack Lunch',
        price: 39.99,
        category: 'Lunch',
        image: './assets/img/item-10.jpeg',
        description: "Skateboarder farn synth authentic semiotics. Live-edge lyft af, edilson buld yuccie crucifx microdosing.",
    },
];

const allItems = document.querySelector('.menu-items');
const allButtons = document.querySelector('.buttons');

window.addEventListener('DOMContentLoaded', () => {
    displayMenuItems(menu);
    displayMenuButtons();
});

function displayMenuItems(menuItem) {
    
    // map = método do array, que é possível percorrer todos os itens do meu array, executar uma transformação nesses itens e retornar um novo array sem modificar o atual. 
    let showMenu = menuItem.map((item) => {
        return `
        <div class="products">
        <div class="img-product">
        <img src="${item.image}" alt="${item.title}">
        </div>
        
        <div class="product-content">
        <div class="product-price">
        <p>${item.title}</p>
        <p class="price">R$${item.price}</p>
        </div>
        
        <div class="product-description">
        <p>${item.description}</p>
        </div>
        </div>  
        </div>
        `
    });
    
    showMenu = showMenu.join("");
    allItems.innerHTML = showMenu;
};

function displayMenuButtons() {
    const categories = menu.reduce((value, item) => {
        if(!value.includes(item.category)) {
            value.push(item.category)
        }
        
        return value;
    }, ["all"]);
    
    const categoryBtns = categories.map((category) => {
        return `
        <button class="btn" data-id="${category}">${category}</button>        
        `
    }).join("");
    
    allButtons.innerHTML += categoryBtns;
    
    
    const filterButton = document.querySelectorAll('.btn');
    
    
    filterButton.forEach((button) => {
        button.addEventListener('click', (event) => {
            const category = event.currentTarget.dataset.id;
            const menuCategory = menu.filter((menuItem) => {
                if(menuItem.category === category) {
                    return menuItem;
                };
            });
            
            if(category === "all") {
                displayMenuItems(menu)
            } else {
                displayMenuItems(menuCategory)
            };
        });
    });
};























// Function para aparecer todos os itens.

/*
menu.map((item) => {
    let html = `
        <div class="content">
            <div class="img-product">
                <img src="${item.image}" alt="${item.title}">
            </div>

            <div class="product-content">
                <div class="product-price">
                    <p>${item.title}</p>
                    <p class="price">R$${item.price}</p>
                </div>
                    
                <div class="product-description">
                    <p>${item.description}</p>
                </div>
            </div>  
        </div>
    `

    allItems.innerHTML += html
});
*/

