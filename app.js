
// Store locations with min customers/hour, max customers/hour, and avg cookies per customer

let locations = [

  {
    site: 'Seattle',
    minCust: '23',
    maxCust: '65',
    avgCookies: '6.3',
  },
  {
    site: 'Tokyo',
    minCust: '3',
    maxCust: '24',
    avgCookies: '1.2',
  },
  {
    site: 'Dubai',
    minCust: '11',
    maxCust: '38',
    avgCookies: '3.7',
  },
  {
    site: 'Paris',
    minCust: '20',
    maxCust: '38',
    avgCookies: '2.3',
  },
  {
    site: 'Lima',
    minCust: '2',
    maxCust: '16',
    avgCookies: '4.6',
  },
];


//Daily shop hours

let dailyHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];


// Min max customer calculation for location simulation

// Rounded customers per hour

let custPerHour = Math.round(location.minCust + Math.random() * (location.maxCust - location.minCust));

// Total cookies per day

// Cookies per hour
let cookiesSold = Math.floor(custPerHour * location.avgCookies);

function salmonCookies(){
  for (let i = 0; i < dailyHours.length; i++){
    let totalCookies = 0;
    for(let j = 0; i < locations.length; j++){
      


      let cookieSummary = document.createElement('li');
      cookieSummary.innerText = `${dailyHour}: ${location.site} sold ${cookiesSold} cookies`;
      document.getElementById('seattleOrders').appendChild(cookieSummary);

    }
  }
  


  // let totalLi = document.getElementById('li');
  // totalLi.innerText = `Total: ${total}`;
  // document.getElementById('seattleHours').appendChild(totalLi);
}
function displayHours(){
  for (let i = 0; i < dailyHours.length; i++){
    let timeOpen = dailyHours [i];
    console.log(timeOpen);
  }
}
displayHours();
salmonCookies();






