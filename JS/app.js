'use strict';

//all products stored from Constructor function

Product.allProducts = [];
Product.lastDisplayedIndex = [];
Product.totalClicks = 0;

//a container to show the results
Product.threePhotos = document.getElementById('three-photos');

//a place to display results
Product.votingResults = document.getElementById('voting-results')

//object Constructor function
function Product(name, filepath, altTag) {
  this.name = name;
  this.filepath = filepath;
  this.altTag = altTag;
  this.clicks = 0;
  this.views = 0;
  Product.allProducts.push(this);
};

//new Product instances
new Product('Bag', 'img/bag.jpg', 'bag');
new Product('Banana', 'img/banana.jpg', 'banana');
new Product('Bathroom', 'img/bathroom.jpg', 'bathroom');
new Product('Boots', 'img/boots.jpg', 'boots');
new Product('Breakfast', 'img/breakfast.jpg', 'breakfast');
new Product('Bubblegum', 'img/bubblegum.jpg', 'bubblegum');
new Product('Chair', 'img/chair.jpg', 'chair');
new Product('Cthulhu', 'img/cthulhu.jpg', 'cthulhu');
new Product('Dog Duck', 'img/dog-duck.jpg', 'dogduck');
new Product('Dragon', 'img/dragon.jpg', 'dragon');
new Product('Pen', 'img/pen.jpg', 'pen');
new Product('Pet Sweep', 'img/pet-sweep.jpg', 'petsweep');
new Product('Scissors', 'img/scissors.jpg', 'scissors');
new Product('Shark', 'img/shark.jpg', 'shark');
new Product('Sweep', 'img/sweep.png', 'sweep');
new Product('Taun Taun', 'img/tauntaun.jpg', 'tauntaun');
new Product('Unicorn', 'img/unicorn.jpg', 'unicorn');
new Product('Tentacle USB', 'img/usb.gif', 'tentacleusb');
new Product('Self-Watering Can', 'img/water-can.jpg', 'wateringcan');
new Product('Fail Wine Glass', 'img/wine-glass.jpg', 'wineglass');

//refer to images from HTML
  Product.ourImages = ['imgEl1', 'imgEl2', 'imgEl3'];

  var imgEl1 = document.getElementById('product1');
  var imgEl2 = document.getElementById('product2');
  var imgEl3 = document.getElementById('product3');

//Random # function

function randomNumber() {
  var randomNumber = Math.floor(Math.random() * Product.allProducts.length);
  return randomNumber;
};

//Creates array of unique random #
function createUniqueIndex() {

  Product.lastDisplayedIndex = [];

  for (var i = 0; i < 3; i++) {
    var randoMonkey = randomNumber();
    if (Product.lastDisplayedIndex.includes(randoMonkey)) {
      createUniqueIndex();
    } else {
      Product.lastDisplayedIndex.push(randoMonkey);
    }

  }
  Product.allProducts[Product.lastDisplayedIndex[0]].views++
  Product.allProducts[Product.lastDisplayedIndex[1]].views++
  Product.allProducts[Product.lastDisplayedIndex[2]].views++

};
//Assigns new src tag based on unique RNG
function assignUniqueIndexSrc() {
console.log(Product.lastDisplayedIndex);
imgEl1.src = Product.allProducts[Product.lastDisplayedIndex[0]].filepath
imgEl2.src = Product.allProducts[Product.lastDisplayedIndex[1]].filepath
imgEl3.src = Product.allProducts[Product.lastDisplayedIndex[2]].filepath
};

//Assigns new alt tag based on unique RNG
function assignUniqueIndexAlt() {
imgEl1.alt = Product.allProducts[Product.lastDisplayedIndex[0]].altTag
imgEl2.alt = Product.allProducts[Product.lastDisplayedIndex[1]].altTag
imgEl3.alt = Product.allProducts[Product.lastDisplayedIndex[2]].altTag
};


//click event handler

function handleClickNewImage (e) {
//Prevent clicks outside of the image area
 if (e.target.id === 'three-photos') {
   alert('Please click a photo to vote!');
 }

//increase total clicks
Product.totalClicks++

//increases vote total for the photo clicked
for (var i = 0; i < Product.allProducts.length; i++) {
  if(e.target.alt === Product.allProducts[i].altTag) {
    Product.allProducts[i].clicks++;
  }
}

if (Product.totalClicks > 24) {
  Product.threePhotos.removeEventListener('click', handleClickNewImage);
  showVotingResults();
}

//call Image render functions
createUniqueIndex();
assignUniqueIndexSrc();
assignUniqueIndexAlt();
}

//function to show results
function showVotingResults() {
  for (var i = 0; i < Product.allProducts.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = 'You voted for ' + Product.allProducts[i].name + ' ' + Product.allProducts[i].clicks + ' times out of ' + Product.allProducts[i].views + ' views.';
    Product.votingResults.appendChild(liEl);
  }
};

//event Listener for Click

createUniqueIndex();
assignUniqueIndexSrc();
assignUniqueIndexAlt();

Product.threePhotos.addEventListener('click', handleClickNewImage);
