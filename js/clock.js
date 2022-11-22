const clock = document.querySelector("h2#clock");


// const sayHello = ()=>{
//     console.log("hello");
// }

// 5초마다 sayHello 함수를 실행
// setInterval(sayHello, 5000);


// 5초 후에 sayHello 함수를 한 번만 실행 
// setTimeout(sayHello,5000);


const getClock = () => {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);