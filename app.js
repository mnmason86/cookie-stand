'use strict';

// Store locations with min customers/hour, max customers/hour, and avg cookies per customer

// Constructor function

function StoreLocation(site,minCust,maxCust,avgCookies){
  this.site = site;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.randomCookies = Math.round(minCust + Math.random() * (maxCust - minCust));
}

let seattleLocation = new StoreLocation('Seattle', 23, 65, 6.3);
let tokyoLocation = new StoreLocation('Tokyo', 3, 24, 1.2);
let dubaiLocation = new StoreLocation('Dubai', 11, 38, 3.7);
let parisLocation = new StoreLocation('Paris', 20, 38, 2.3);
let limaLocation = new StoreLocation('Lima', 2, 16, 4.6);

let storeLocations = [seattleLocation, tokyoLocation, dubaiLocation, parisLocation, limaLocation];

//Daily shop hours

let dailyHours = ['6:00 am','7:00 am','8:00 am','9:00 am','10:00 am','11:00 am','12:00 pm','1:00 pm','2:00 pm','3:00 pm','4:00 pm','5:00 pm','6:00 pm','7:00 pm','8:00 pm'];

// Total Daily Sales function

function sumArray (array){
  let sum = 0;
  array.forEach(item => {
    sum += item;
  });
  return sum;
}

// Daily Hours Table

StoreLocation.prototype.renderHours = function(){
  let rowContainer = document.getElementById('hours-row');

  let rowData = document.createElement('tr');

  let blankCell = document.createElement('td');
  blankCell.innerText = '';
  rowData.appendChild(blankCell);

  for (let i = 0; i < dailyHours.length; i++){
    let dataCell = document.createElement('td');
    dataCell.innerText = dailyHours[i];
    rowData.appendChild(dataCell);
  }
  rowContainer.appendChild(rowData);

  let totalCell = document.createElement('td');
  totalCell.innerText = 'Daily Location Total';
  rowData.appendChild(totalCell);
};

StoreLocation.prototype.renderHours();

// Seattle Location Row for Table

StoreLocation.prototype.render = function(){
  let cookieSales = [];
  let bodyContainer = document.getElementById('hourly-sales');

  let locationRow = document.createElement('tr');
  bodyContainer.appendChild(locationRow);

  let locationCell = document.createElement('th');
  locationCell.innerText = this.site;
  locationRow.appendChild(locationCell);

  for(let j = 0; j < dailyHours.length; j++){
    let custPerHour = Math.round(this.minCust + Math.random() * (this.maxCust - this.minCust));
    let hourCookies = Math.round(custPerHour * this.avgCookies);
    cookieSales.push(hourCookies);

    let locationData = document.createElement('td');
    locationData.innerText = hourCookies;
    locationRow.appendChild(locationData);
  }
  sumArray(cookieSales);

  let locationTotal = document.createElement('td');
  locationTotal.innerText = sumArray(cookieSales);
  locationRow.appendChild(locationTotal);
};

seattleLocation.render();
tokyoLocation.render();
dubaiLocation.render();
parisLocation.render();
limaLocation.render();


// Hourly totals Row for Table
