const images = [
    "1.jpeg","2.jpeg","3.jpeg",
    "4.jpeg","5.jpeg","6.jpeg","7.jpeg"
]

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.classList.add("bg-img");
console.log(bgImage);

document.body.appendChild(bgImage);