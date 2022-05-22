'use strict';

// Store locations with min customers/hour, max customers/hour, and avg cookies per customer

// Constructor function

function Location(site,minCust,maxCust,avgCookies){
  this.site = site;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.randomCookies = Math.round(minCust + Math.random() * (maxCust - minCust));
}

let seattleLocation = new Location('Seattle', 23, 65, 6.3);
let tokyoLocation = new Location('Tokyo', 3, 24, 1.2);
let dubaiLocation = new Location('Dubai', 11, 38, 3.7);
let parisLocation = new Location('Paris', 20, 38, 2.3);
let limaLocation = new Location('Lima', 2, 16, 4.6);

let locations = [seattleLocation, tokyoLocation, dubaiLocation, parisLocation, limaLocation];

//Daily shop hours

let dailyHours = ['6:00 am','7:00 am','8:00 am','9:00 am','10:00 am','11:00 am','12:00 pm','1:00 pm','2:00 pm','3:00 pm','4:00 pm','5:00 pm','6:00 pm','7:00 pm','8:00 pm'];

// Total Daily Sales function

// function sumArray (array){
//   let sum = 0;
//   array.forEach(item => {
//     sum += item;
//   });
//   return sum;
// }

//

Location.prototype.renderHours = function(){
  let rowContainer = document.getElementById('hours-row');

  let rowData = document.createElement('tr');

  for (let i = 0; i < dailyHours.length; i++){
    let dataCell = document.createElement('td');
    dataCell.innerText = dailyHours[i];
    rowData.appendChild(dataCell);
  }
  rowContainer.appendChild(rowData);
};

Location.prototype.renderHours();

//Loop to generate sales table

// for (let i = 0; i < locations.length; i++){
//   let location = locations[i];
//   let cookieSales = [];

//   for(let j = 0; j < dailyHours.length; j++){
//     let hour = dailyHours[j];
//     let custPerHour = Math.round(location.minCust + Math.random() * (location.maxCust - location.minCust));
//     let hourCookies = Math.round(custPerHour * location.avgCookies);
//     cookieSales.push(hourCookies);

//     let cookieSummary = document.createElement('li');
//     cookieSummary.innerText = `${hour}: ${hourCookies} cookies sold in ${location.site}`;
//     document.getElementById('salmonCookies').appendChild(cookieSummary);
//   }

//   sumArray(cookieSales);
//   console.log(sumArray(cookieSales));
//   console.log (cookieSales);

//   let dailyTotal = document.createElement('li');
//   dailyTotal.innerText = `${sumArray(cookieSales)} cookies sold today in ${location.site}`;
//   document.getElementById('salmonCookies').appendChild(dailyTotal);
// }
