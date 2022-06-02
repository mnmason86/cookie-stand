'use strict';

//Daily shop hours ===================================================================

let dailyHours = ['6:00 am','7:00 am','8:00 am','9:00 am','10:00 am','11:00 am','12:00 pm','1:00 pm','2:00 pm','3:00 pm','4:00 pm','5:00 pm','6:00 pm','7:00 pm','8:00 pm'];

// Constructor function ===============================================================

function StoreLocation(site,minCust,maxCust,avgCookies){
  this.site = site;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.hourCookies = [];
  this.totalCookies = [];
}

let seattleLocation = new StoreLocation('Seattle', 23, 65, 6.3);
let tokyoLocation = new StoreLocation('Tokyo', 3, 24, 1.2);
let dubaiLocation = new StoreLocation('Dubai', 11, 38, 3.7);
let parisLocation = new StoreLocation('Paris', 20, 38, 2.3);
let limaLocation = new StoreLocation('Lima', 2, 16, 4.6);

let storeLocations = [seattleLocation, tokyoLocation, dubaiLocation, parisLocation, limaLocation];

// Function to sum an Array =============================================================

function sumArray (array){
  let sum = 0;
  array.forEach(item => {
    sum += item;
  });
  return sum;
}

// Daily Hours Table =====================================================================

function renderHours(){
  let rowContainer = document.getElementById('table');

  let rowData = document.createElement('tr');

  let blankCell = document.createElement('th');
  blankCell.innerText = '';
  rowData.appendChild(blankCell);

  for (let i = 0; i < dailyHours.length; i++){
    let dataCell = document.createElement('th');
    dataCell.innerText = dailyHours[i];
    rowData.appendChild(dataCell);
  }
  rowContainer.appendChild(rowData);

  let totalCell = document.createElement('th');
  totalCell.innerText = 'Daily Location Total';
  rowData.appendChild(totalCell);
}

// Location Rows for Table - Render function ==============================================

StoreLocation.prototype.render = function(){

  let bodyContainer = document.getElementById('table');
  let locationRow = document.createElement('tr');
  bodyContainer.appendChild(locationRow);

  let locationCell = document.createElement('th');
  locationCell.innerText = this.site;
  locationRow.appendChild(locationCell);

  for(let i = 0; i < dailyHours.length; i++){
    let custPerHour = Math.round(this.minCust + Math.random() * (this.maxCust - this.minCust));
    let hourCookies = Math.round(custPerHour * this.avgCookies);
    this.hourCookies.push(hourCookies);

    let locationData = document.createElement('td');
    locationData.innerText = hourCookies;
    locationRow.appendChild(locationData);
  }

  let locationTotal = document.createElement('td');
  locationTotal.innerText = sumArray(this.hourCookies);
  locationRow.appendChild(locationTotal);
};

// Hourly totals from all stores: table footer ===============================================

function makeTotalsRow (){
  let footContainer = document.getElementById('table');
  let tableRow = document.createElement('tfoot');
  let tableFooter = document.createElement('th');
  tableFooter.innerText = 'Hourly Totals For All Stores';
  tableRow.appendChild(tableFooter);

  let totalTotal = 0;
  for (let i = 0; i < dailyHours.length;i++){
    let hourlyTotal = 0;
    for(let j = 0; j < storeLocations.length; j++){
      hourlyTotal += storeLocations[j].hourCookies[i];
      totalTotal += storeLocations[j].hourCookies[i];
    }
    tableFooter = document.createElement('th');
    tableFooter.innerText = hourlyTotal;
    tableRow.appendChild(tableFooter);
  }
  tableFooter = document.createElement('th');
  tableFooter.innerText = totalTotal;
  tableRow.appendChild(tableFooter);
  footContainer.appendChild(tableRow);
}

// Event to add new cookie shop with form ===========================================================

function addCookieShop(event){
  event.preventDefault();
  let form = event.target;

  let site = form['site'].value;
  let minCust = parseInt(form['minCust'].value);
  let maxCust = parseInt(form['maxCust'].value);
  let avgCookies = parseInt(form['avgCookies'].value);

  let cookieShop = new StoreLocation (site, minCust, maxCust, avgCookies);

  storeLocations.push(cookieShop);
  console.log(storeLocations);

  cookieShop.render();

  document.getElementById('table').deleteTFoot();

  makeTotalsRow();
}
document.getElementById('new-cookie-stand').addEventListener('submit', addCookieShop);

// Invoke functions to display sales table ===========================================================

renderHours();
for (let j = 0; j < storeLocations.length; j++){
  let location = storeLocations[j];
  location.render();
}
makeTotalsRow();



