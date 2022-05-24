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

StoreLocation.prototype.renderSeattle = function(){
  let cookieSales = [];
  let bodyContainer = document.getElementById('seattle-sales');

  let locationRow = document.createElement('tr');
  bodyContainer.appendChild(locationRow);

  let seattleRow = document.createElement('th');
  seattleRow.innerText = seattleLocation.site;
  locationRow.appendChild(seattleRow);

  for(let j = 0; j < dailyHours.length; j++){
    let custPerHour = Math.round(seattleLocation.minCust + Math.random() * (seattleLocation.maxCust - seattleLocation.minCust));
    let hourCookies = Math.round(custPerHour * seattleLocation.avgCookies);
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

StoreLocation.prototype.renderSeattle();

// Tokyo Location Row for Table

StoreLocation.prototype.renderTokyo = function(){
  let cookieSales = [];
  let bodyContainer = document.getElementById('tokyo-sales');

  let locationRow = document.createElement('tr');
  bodyContainer.appendChild(locationRow);

  let tokyoRow = document.createElement('th');
  tokyoRow.innerText = tokyoLocation.site;
  locationRow.appendChild(tokyoRow);

  for(let j = 0; j < dailyHours.length; j++){
    let custPerHour = Math.round(tokyoLocation.minCust + Math.random() * (tokyoLocation.maxCust - tokyoLocation.minCust));
    let hourCookies = Math.round(custPerHour * tokyoLocation.avgCookies);
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

StoreLocation.prototype.renderTokyo();

// Dubai Location Row for Table

StoreLocation.prototype.renderDubai = function(){
  let cookieSales = [];
  let bodyContainer = document.getElementById('dubai-sales');

  let locationRow = document.createElement('tr');
  bodyContainer.appendChild(locationRow);

  let dubaiRow = document.createElement('th');
  dubaiRow.innerText = dubaiLocation.site;
  locationRow.appendChild(dubaiRow);

  for(let j = 0; j < dailyHours.length; j++){
    let custPerHour = Math.round(dubaiLocation.minCust + Math.random() * (dubaiLocation.maxCust - dubaiLocation.minCust));
    let hourCookies = Math.round(custPerHour * dubaiLocation.avgCookies);
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

StoreLocation.prototype.renderDubai();

// Paris Location Row for Table

StoreLocation.prototype.renderParis = function(){
  let cookieSales = [];
  let bodyContainer = document.getElementById('paris-sales');

  let locationRow = document.createElement('tr');
  bodyContainer.appendChild(locationRow);

  let parisRow = document.createElement('th');
  parisRow.innerText = parisLocation.site;
  locationRow.appendChild(parisRow);

  for(let j = 0; j < dailyHours.length; j++){
    let custPerHour = Math.round(parisLocation.minCust + Math.random() * (parisLocation.maxCust - parisLocation.minCust));
    let hourCookies = Math.round(custPerHour * parisLocation.avgCookies);
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

StoreLocation.prototype.renderParis();

// Lima Location Row for Table

StoreLocation.prototype.renderLima = function(){
  let cookieSales = [];
  let bodyContainer = document.getElementById('lima-sales');

  let locationRow = document.createElement('tr');
  bodyContainer.appendChild(locationRow);

  let limaRow = document.createElement('th');
  limaRow.innerText = limaLocation.site;
  locationRow.appendChild(limaRow);

  for(let j = 0; j < dailyHours.length; j++){
    let custPerHour = Math.round(limaLocation.minCust + Math.random() * (limaLocation.maxCust - limaLocation.minCust));
    let hourCookies = Math.round(custPerHour * limaLocation.avgCookies);
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

StoreLocation.prototype.renderLima();
