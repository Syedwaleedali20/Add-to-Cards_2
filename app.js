let cardArr = [{
    "id": 4,
    "title": "newTitle",
    "price": 205,
    "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality ",
    "image_url": "https://i.imgur.com/R2PN9Wq.jpeg"
}, {
    "id": 7,
    "title": "Ergonomic Wooden Tuna",
    "price": 743,
    "description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    "image_url": "https://i.imgur.com/mp3rUty.jpeg"
}, {
    "id": 9,
    "title": "Electronic Bronze Chips",
    "price": 808,
    "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive ",
    "image_url": "https://i.imgur.com/R3iobJA.jpeg"
}, {
    "id": 11,
    "title": "Awesome Bronze Car",
    "price": 382,
    "description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    "image_url": "https://i.imgur.com/cBuLvBi.jpeg"
}, {
    "id": 12,
    "title": "Recycled Rubber Cheese",
    "price": 30,
    "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    "image_url": "https://i.imgur.com/KeqG6r4.jpeg"
}]
var cardContent = document.getElementById("mCards");
for (var i = 0; i < cardArr.length; i++) {
    var image_url = cardArr[i].image_url;
    var title = cardArr[i].title;
    var description = cardArr[i].description;
    var price = cardArr[i].price;
    var id = cardArr[i].id;
    cardContent.innerHTML += `<div class="card m-2 main-div" style="width: 18rem">
              <img src=${image_url} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text"> <i>${description}</p>
                  <p class="card-text-no"> ${price}</p>
                <a href="#" class="center btn btn-primary bn5">Order Now </a>
              </div>
            </div>
        `;
}
//
// let cardContent = document.getElementById("mCards");
// cardArr.forEach((student, index) => {

//     const { image_url, title, description, price } = student

//     return students_element.innerHTML += `<div class="card m-2 main-div" style="width: 18rem">
//     <img src=${image_url} class="card-img-top" alt="..."/>
//     <div class="card-body">
//       <h5 class="card-title">${title}</h5>
//       <p class="card-text"> <i>${description}</p>
//         <p class="card-text-no"> ${price}</p>
//       <a href="#" class="center btn btn-primary bn5">Order Now </a>
//     </div>
//   </div>
//         `;
// })

// console.log(array_of_students);