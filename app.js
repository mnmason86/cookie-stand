// Min max customer calculation for location simulation

function randBetween(min,max){
  return min + Math.random() * (max-min);
}
console.log(randBetween(23,65));

//Daily shop hours

let dailyHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

for (let i = 0; i<dailyHours.length; i++){
  let hour = dailyHours[i];

  let hourLi = document.createElement('li');
  hourLi.innerText = `${hour}`;
  document.getElementById('seattleHours').appendChild(hourLi);
}

for (let i = 0; i<dailyHours.length; i++){
  let hour = dailyHours[i];

  let hourLi = document.createElement('li');
  hourLi.innerText = `${hour}`;
  document.getElementById('tokyoHours').appendChild(hourLi);
}

for (let i = 0; i<dailyHours.length; i++){
  let hour = dailyHours[i];

  let hourLi = document.createElement('li');
  hourLi.innerText = `${hour}`;
  document.getElementById('dubaiHours').appendChild(hourLi);
}

for (let i = 0; i<dailyHours.length; i++){
  let hour = dailyHours[i];

  let hourLi = document.createElement('li');
  hourLi.innerText = `${hour}`;
  document.getElementById('parisHours').appendChild(hourLi);
}
for (let i = 0; i<dailyHours.length; i++){
  let hour = dailyHours[i];

  let hourLi = document.createElement('li');
  hourLi.innerText = `${hour}`;
  document.getElementById('limaHours').appendChild(hourLi);
}




// Seattle stats: min customers: 23, max customers: 65, avg cookies/customer: 6.3