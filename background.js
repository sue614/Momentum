const images = [
    "./img/0.jpg",
    "./img/1.jpeg",
    "./img/2.jpg",
    "./img/3.jpeg",
    "./img/4.jpg",
    "./img/5.jpg",
    "./img/6.jfif",
    "https://sue614.github.io/Momentum/img/img/7.jpg"
]


const todayImage = images[Math.floor(Math.random()*images.length)];
//이미지를 랜덤숫자로 호출할 수 있도록 선언해주고, floor 사용해 소수점뒤의 숫자 발생 시 숫자를 내림해준다.


const bgImage = document.createElement("img");
// 자바스크립트에서 hmtl에 요소(elements)를 추가해준다. 
// 이렇게 코드를 작성하면 브라우정[서 실행 시, <img>태그가 생긴다.


bgImage.src = `img/${todayImage}`;
// 생성된 <img>태그에 이미지 소스를 추가한다.

document.body.appendChild(bgImage);
// appendChild를 사용해 body에 html을 추가한다.
// append나 prepend를 사용해도 가능하고, append를 사용하면 body 맨뒤에
// 위치하고, prepend 사용하면 body 맨윗줄로 오게된다.

