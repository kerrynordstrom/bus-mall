'use strict';

//all products stored from Constructor function

Product.allProducts = [];
Product.uniqueRandomNumber = [];

//object Constructor function
function Product(name, filepath) {
  this.name = name;
  this.filepath = filepath;
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



//event Listener for Click

var imgEl1 = document.getElementById('product1');
var imgEl2 = document.getElementById('product2');
var imgEl3 = document.getElementById('product3');

imgEl1.addEventListener('click', randomProduct);
imgEl2.addEventListener('click', randomProduct);
imgEl3.addEventListener('click', randomProduct);

//Random # function

function randomNumber() {
  return Math.floor(Math.random() * Product.allProducts.length);

}

//Unique random # array


function randomProduct() {
imgEl1.src = Product.allProducts[randomNumber()].filepath;
imgEl2.src = Product.allProducts[randomNumber()].filepath;
imgEl3.src = Product.allProducts[randomNumber()].filepath;
}

randomProduct();
