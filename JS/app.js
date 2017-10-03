'use strict';

//all products stored from Constructor function

Product.allProducts = [];
Product.uniqueRandomNumber = [];
Product.totalCount = 0;

//object Constructor function
function Product(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.clicks = 0;
  this.views = 0;
  Product.allProducts.push(this);
}

//new Product instances
new Product('Bag', 'img/bag.jpg');
new Product('Banana', 'img/banana.jpg');
new Product('Bathroom', 'img/bathroom.jpg');
new Product('Boots', 'img/breakfast.jpg');
new Product('Breakfast', 'img/breakfast.jpg');
new Product('Bubblegum', 'img/bubblegum.jpg');
new Product('Chair', 'img/chair.jpg');
new Product('Cthulhu', 'img/cthulhu.jpg');
new Product('Dog Duck', 'img/dog-duck.jpg');
new Product('Dragon', 'img/dragon.jpg');
new Product('Pen', 'img/pen.jpg');
new Product('Pet Sweep', 'img/pet-sweep.jpg');
new Product('Scissors', 'img/scissors.jpg');
new Product('Shark', 'img/shark.jpg');
new Product('Sweep', 'img/sweep.png');
new Product('Taun Taun', 'img/tauntaun.jpg');
new Product('Unicorn', 'img/unicorn.jpg');
new Product('Tentacle USB', 'img/usb.gif');
new Product('Self-Watering Can', 'img/water-can.jpg');
new Product('Fail Wine Glass', 'img/wine-glass.jpg');




//Random # function

function handleNewImage () {

}

function randomNumber() {
  var randomNumber = Math.floor(Math.random() * Product.allProducts.length);
  return randomNumber;
};

//Array of unique random #
function uniqueImage() {
  var threePhotos = document.getElementById('three-photos');
  var imgEl1 = document.getElementById('photo1');
  var imgEl2 = document.getElementById('photo2');
  var imgEl3 = document.getElementById('photo3');
  Product.uniqueRandomNumber = [];
  for (var i = 0; i < 3; i++) {
    var monkey = randomNumber();
    if (Product.uniqueRandomNumber.includes(monkey)) {
      uniqueImage();
    } else {
      Product.uniqueRandomNumber.push(monkey);
    }
  }
  for (i in Product.uniqueRandomNumber) {
  Product.allProducts[i].src = Product.allProducts[Product.uniqueRandomNumber[i]].filepath;
  }
};

uniqueImage();


//event Listener for Click



// threePhotos.addEventListener('click', uniqueImage);
