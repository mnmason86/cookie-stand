
// Store locations

let locations = [

  {
    site: 'seattle',
    minCust: '23',
    maxCust: '65',
    avgCookies: '6.3',
  },
  {
    site: 'tokyo',
    minCust: '3',
    maxCust: '24',
    avgCookies: '1.2',
  },
  {
    site: 'dubai',
    minCust: '11',
    maxCust: '38',
    avgCookies: '3.7',
  },
  {
    site: 'paris',
    minCust: '20',
    maxCust: '38',
    avgCookies: '2.3',
  },
  {
    site: 'lima',
    minCust: '2',
    maxCust: '16',
    avgCookies: '4.6',
  },
];

//Daily shop hours

let dailyHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

// Min max customer calculation for location simulation

function randBetween(min,max){
  return min + Math.random() * (max-min);
}

// Rounded customers per hour

let custPerHour = Math.round(randBetween());

for (let i = 0; i<dailyHours.length; i++){
  let hour = dailyHours[i];


  let hourLi = document.createElement('li');
  hourLi.innerText = `${hour}: ${hourCookies[i]} cookies`;
  document.getElementById('seattleHours').appendChild(hourLi);


  // let totalLi = document.getElementById('li');
  // totalLi.innerText = `Total: ${total}`;
  // document.getElementById('seattleHours').appendChild(totalLi);
}






