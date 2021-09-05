const images = [
    "0.jpg",
    "1.jpeg",
    "2.jpg",
    "3.jpeg",
    "4.jpg",
    "5.jpg",
    "6.jfif",
    "7.jpg"
] 


const todayImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");

bgImage.src = `Momentum/img/$todayImage`;

document.body.appendChild(bgImage);

