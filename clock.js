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
  
  const thisyear = new Date("2021,12,31"); //이렇게 작성하는게 더 간편하다.
  const now = new Date();
  const gap = thisyear - now;
  
  //방법1
  const sec = Math.floor((gap % (1000 * 60)) / 1000); //1000*60 => 60초(1분)*60 => 60분(1시간)*24 = 24시간(하루)
  const min = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
  const hour = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const day = Math.floor(gap / (1000 * 60 * 60 * 24));

  //방법2
  const 초 = Math.floor((gap / 1000) % 60);
  const 분 = Math.floor((gap / 1000 / 60) % 60);
  const 시간 = Math.floor((gap / 1000 / 60 / 60) % 24);
  const 일 = Math.floor(gap / 1000 / 60 / 60 / 24);

  //방법3 ms를 미리 초로 변수 지정한다.
  const totalseconds = (thisyear - now) /1000; //ms를 미리 초로 바꿔놓는다
  const seconds = Math.floor(totalseconds) % 60;
  const minutes = Math.floor(totalseconds / 60) % 60;
  const hours = Math.floor(totalseconds / 3600) % 24;
  const days = Math.floor(totalseconds / 3600 /24);

  clockTitle.innerHTML = 
  `올해 남은 시간은 <br>
  방법1: ${day}일 ${hour}시간 ${min}분 ${sec}초 입니다.  <br>
  방법2: ${일}일 ${시간}시간 ${분}분 ${초}초 입니다. <br>
  방법3: ${days}일 ${hours}시간 ${minutes}분 ${seconds}초 입니다. `
  ;
}

getClock2();
setInterval(getClock2, 1000);

