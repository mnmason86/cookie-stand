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
  hourLi.innerText = `${hour}: ${randBetween(23,65)*6.3} cookies`;
  document.getElementById('seattleHours').appendChild(hourLi);
}

for (let i = 0; i<dailyHours.length; i++){
  let hour = dailyHours[i];

  let hourLi = document.createElement('li');
  hourLi.innerText = `${hour}: ${randBetween(3,24)*1.2} cookies`;
  document.getElementById('tokyoHours').appendChild(hourLi);
}

for (let i = 0; i<dailyHours.length; i++){
  let hour = dailyHours[i];

  let hourLi = document.createElement('li');
  hourLi.innerText = `${hour}: ${randBetween(11,38)*3.7} cookies`;
  document.getElementById('dubaiHours').appendChild(hourLi);
}

for (let i = 0; i<dailyHours.length; i++){
  let hour = dailyHours[i];

  let hourLi = document.createElement('li');
  hourLi.innerText = `${hour}: ${randBetween(20,38)*2.3} cookies`;
  document.getElementById('parisHours').appendChild(hourLi);
}
for (let i = 0; i<dailyHours.length; i++){
  let hour = dailyHours[i];

  let hourLi = document.createElement('li');
  hourLi.innerText = `${hour}: ${randBetween(2,16)*4.6} cookies`;
  document.getElementById('limaHours').appendChild(hourLi);
}




