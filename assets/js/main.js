setInterval(() => {
  date = new Date();
  hrTime = date.getHours();
  minTime = date.getMinutes();
  secTime = date.getSeconds();
  day = date.getDay();
  hrRotation = 30 * hrTime + minTime / 2;
  minRotation = 6 * minTime;
  secRotation = 6 * secTime;

  hr.style.transform = `rotateZ(${hrRotation}deg)`;
  min.style.transform = `rotateZ(${minRotation}deg)`;
  sec.style.transform = `rotateZ(${secRotation}deg)`;

  let week = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY']

  if(hrTime < 10){hrTime = `0${hrTime}`}

  if(minTime < 10){minTime = `0${minTime}`}

  hrT.innerHTML = `${hrTime}`
  hrTO.innerHTML = `${hrTime}:`
  minT.innerHTML = `${minTime}`
  dayT.innerHTML = `${week[day]}`
  
}, 1000);
