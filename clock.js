const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}: ${minutes}: ${seconds}`;
}

getClock();
setInterval(getClock, 1000);


const clockTitle = document.querySelector(".js-clock");

function getClock2() {
  // const thisyear = new Date("2021-12-31T00:00:00+0900");
  
  const thisyear = new Date("2021,12,31"); 
  const now = new Date();
  const gap = thisyear - now;
  
}

getClock2();
setInterval(getClock2, 1000);

