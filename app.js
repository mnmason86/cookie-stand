
// Store locations with min customers/hour, max customers/hour, and avg cookies per customer

let locations = [

  {
    site: 'Seattle',
    minCust: 23,
    maxCust: 65,
    avgCookies: 6.3,
  },
  {
    site: 'Tokyo',
    minCust: 3,
    maxCust: 24,
    avgCookies: 1.2,
  },
  {
    site: 'Dubai',
    minCust: 11,
    maxCust: 38,
    avgCookies: 3.7,
  },
  {
    site: 'Paris',
    minCust: 20,
    maxCust: 38,
    avgCookies: 2.3,
  },
  {
    site: 'Lima',
    minCust: 2,
    maxCust: 16,
    avgCookies: 4.6,
  },
];

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

//Loop to generate sales table

for (let i = 0; i < locations.length; i++){
  let location = locations[i];
  let cookieSales = [];

  for(let j = 0; j < dailyHours.length; j++){
    let hour = dailyHours[j];
    let custPerHour = Math.round(location.minCust + Math.random() * (location.maxCust - location.minCust));
    let hourCookies = Math.round(custPerHour * location.avgCookies);
    cookieSales.push(hourCookies);

    let cookieSummary = document.createElement('li');
    cookieSummary.innerText = `${hour}: ${hourCookies} cookies sold in ${location.site}`;
    document.getElementById('salmonCookies').appendChild(cookieSummary);
  }

  sumArray(cookieSales);
  console.log(sumArray(cookieSales));
  console.log (cookieSales);

  let dailyTotal = document.createElement('li');
  dailyTotal.innerText = `${sumArray(cookieSales)} cookies sold today in ${location.site}`;
  document.getElementById('salmonCookies').appendChild(dailyTotal);
}
