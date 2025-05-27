let products = [ 
    {
        img: 'image 10.png',
        title: 'mars rug',
        price: '100 coin',
        priceImg: 'Coin 1.png',
        count: '24 dona mavjud'
    },
    {
        img: 'image 22.png',
        title: 'Keyboard sticker',
        price: '49 coin',
        priceImg: 'Coin 1.png',
        count: '24 dona mavjud'
    },
    {
        img: 'image 23.png',
        title: 'samrt watch',
        price: '899 coin',
        priceImg: 'Coin 1.png',
        count: '24 dona mavjud'
    },
    {
        img: 'image 24.png',
        title: 'Wireless keyboard',
        price: '350 coin',
        priceImg: 'Coin 1.png',
        count: '0 dona mavjud'
    },
    {
        img: 'image 25.png',
        title: 'mouse',
        price: '359 coin',
        priceImg: 'Coin 1.png',
        count: '24 dona mavjud'
    },
    {
        img: 'image 26.png',
        title: 'Airpods',
        price: '499 coin',
        priceImg: 'Coin 1.png',
        count: '11 dona mavjud'
    },
    {
        img: 'image 27.png',
        title: 'Powerbank',
        price: '899 coin',
        priceImg: 'Coin 1.png',
        count: '5 dona mavjud'
    },
    {
        img: 'image 28.png',
        title: 'USB flash drive',
        price: '299 coin',
        priceImg: 'Coin 1.png',
        count: '21 dona mavjud'
    },
    {
        img: 'image 29.png',
        title: 'Smartphone',
        price: '3699 coin',
        priceImg: 'Coin 1.png',
        count: '2 dona mavjud'
    },
    {
        img: 'image 30.png',
        title: 'Playstation 5',
        price: '7449 coin',
        priceImg: 'Coin 1.png',
        count: 'Ushbu tovarga oldindan buyurtma berish mumkin'
    },
    {
        img: 'image 31.png',
        title: 'Yandex Station',
        price: '1999 coin',
        priceImg: 'Coin 1.png',
        count: '4 dona mavjud'
    },
    {
        img: 'image 32.png',
        title: 'Planshet Samsung',
        price: '4999 coin',
        priceImg: 'Coin 1.png',
        count: '24 dona mavjud'
    },
    
];

function displayItems(filterText = '') {
    const filteredProducts = products.filter(product => 
        product.title.toLowerCase().includes(filterText.toLowerCase())
    );
    const productHTML = filteredProducts.map(product => `
        <div class="dov__div ">
            <img src="${product.img}" alt="${product.title}">
            <br>
            <h1>${product.title}</h1>
            <br>
            <h2><img src="${product.priceImg}" alt="coin">${product.price}</h2>
            <br>
            <br>
            <h4>${product.count}</h4>
        </div>
    `).join('');

    document.querySelector('.products').innerHTML = productHTML;
}
displayItems(); 




// function displayItems(filterText = '') {
//     const filteredProducts2 = products.filter(product => 
//         product.title.toLowerCase().includes(filterText.toLowerCase())
//     );
//     const productHTML = filteredProducts2.map(product => `
//              <div class="dov__div ">
//             <img src="${product.img}" alt="${product.title}">
//             <br>
//             <h1>${product.title}</h1>
//             <br>
//             <h2><img src="${product.priceImg}" alt="coin">${product.price}</h2>
//             <br>
//             <br>
//             <h4>${product.count}</h4>
//         </div>
//         `).join('');


//         document.querySelector('.products').innerHTML = productHTML;
// }
// displayItems();