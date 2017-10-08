'use strict';

//all products stored from Constructor function

Product.allProducts = [];
Product.lastDisplayedIndex = [];
Product.votes = [];
Product.productNames = [];
Product.totalClicks = 0;
Product.votingChart
Product.votingChartDrawn = false;

//chart data
var productNames = [];
var votes = [];

//a container to show the results
Product.threePhotos = document.getElementById('three-photos');

//object Constructor function
function Product(name, filepath, altTag) {
  this.name = name;
  this.filepath = filepath;
  this.altTag = altTag;
  this.clicks = 0;
  this.views = 0;
  Product.allProducts.push(this);
};


if (localStorage) {
  Product.allProducts = JSON.parse(localStorage.allProducts)

} else {
//new Product instances
new Product('Bag', 'bag.jpg', 'bag');
new Product('Banana', 'banana.jpg', 'banana');
new Product('Bathroom', 'bathroom.jpg', 'bathroom');
new Product('Boots', 'boots.jpg', 'boots');
new Product('Breakfast', 'breakfast.jpg', 'breakfast');
new Product('Bubblegum', 'bubblegum.jpg', 'bubblegum');
new Product('Chair', 'chair.jpg', 'chair');
new Product('Cthulhu', 'cthulhu.jpg', 'cthulhu');
new Product('Dog Duck', 'dog-duck.jpg', 'dogduck');
new Product('Dragon', 'dragon.jpg', 'dragon');
new Product('Pen', 'pen.jpg', 'pen');
new Product('Pet Sweep', 'pet-sweep.jpg', 'petsweep');
new Product('Scissors', 'scissors.jpg', 'scissors');
new Product('Shark', 'shark.jpg', 'shark');
new Product('Sweep', 'sweep.png', 'sweep');
new Product('Taun Taun', 'tauntaun.jpg', 'tauntaun');
new Product('Unicorn', 'unicorn.jpg', 'unicorn');
new Product('Tentacle USB', 'usb.gif', 'tentacleusb');
new Product('Self-Watering Can', 'water-can.jpg', 'wateringcan');
new Product('Fail Wine Glass', 'wine-glass.jpg', 'wineglass');
}

//refer to images from HTML
  Product.ourImages = ['imgEl1', 'imgEl2', 'imgEl3'];

  var imgEl1 = document.getElementById('product1');
  var imgEl2 = document.getElementById('product2');
  var imgEl3 = document.getElementById('product3');
  var button1 = document.getElementById('draw-chart');

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
  localStorage.test = true;
  Product.threePhotos.removeEventListener('click', handleClickNewImage);
  updateChartArrays()
  localStorage.allProducts = JSON.stringify(Product.allProducts);
  console.log(localStorage.allProducts);
}

//call Image render functions
createUniqueIndex();
assignUniqueIndexSrc();
assignUniqueIndexAlt();

}


//function to update chart arrays
function updateChartArrays() {
  for (var i = 0; i < Product.allProducts.length; i++) {
  votes.push(Product.allProducts[i].clicks);
  productNames.push(Product.allProducts[i].name);
}
}


// ***
// DATA SET FOR CHART
// ***

var data = {
  labels: productNames,
  datasets: [
    {
      label: 'Number of Votes',
      data: votes,
      backgroundColor: [
        '#f46542',
        '#f49841',
        '#f4b541',
        '#f4c741',
        '#f4d341',
        '#d9f441',
        '#ebf441',
        '#8ef441',
        '#61f441',
        '#41f467',
        '#41f4ac',
        '#41f4ee',
        '#41d6f4',
        '#41a0f4',
        '#416af4',
        '#4146f4',
        '#7041f4',
        '#9d41f4',
        '#c141f4',
        '#e841f4',
        '#f441dc',
        '#f441b8',
        '#f4418b',
        '#f44176',
        '#f44161'

      ],
      hoverBackgroundColor: [
        '#4c41f4',
      ]
    }]
};

// *** Draw function for chart
// Charts rendered using Chart JS v.2.7.0
// http://www.chartjs.org/
// ***

function drawVotesChart() {

  var ctx = document.getElementById('voting-chart').getContext('2d');
  Product.votingChart = new Chart(ctx,{
    type: 'horizontalBar',
    data: data,
    options: {
      legend: {
        display: true,
        labels: {
          text: 'Total votes (of 25)',
          fontColor: '#4c41f4',
          fontSize: 12
        }
      },
      responsive: false,
      animation: {
        duration: 1000,
        easing: 'easeOutBounce'
      }
    },
    scales: {
      xAxes: [{
        stacked: false,
        beginAtZero: true,
        scaleLabel: {
        labelString: 'Products'
        },
        ticks: {
          stepSize: 1,
          min: 25,
          autoSkip: false
        }
    }],
      yAxes: [{
        ticks: {
          max: 8,
          min: 0,
          stepSize: 1
        }
      }]
    }
  });
  Product.votingChartDrawn = true;
}

createUniqueIndex();
assignUniqueIndexSrc();
assignUniqueIndexAlt();

//event listener for button push
document.getElementById('draw-chart').addEventListener('click', function() {
  for (var i = 0; Product.totalClicks > 24; i++) {
  drawVotesChart();
  Product.threePhotos.removeChild(imgEl1);
  Product.threePhotos.removeChild(imgEl2);
  Product.threePhotos.removeChild(imgEl3);
  Product.threePhotos.removeChild(button1);
  break;
    }
  }
);
//event Listener for Click
Product.threePhotos.addEventListener('click', handleClickNewImage);
