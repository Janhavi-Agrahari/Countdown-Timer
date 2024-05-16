const targetDate = new Date('2024-08-31T08:45:28');

function updateCountdown(){
    const currentDate = new Date();
    const difference = targetDate - currentDate;

    const days = Math.floor(difference/(1000*60*60*24));
    const hours = Math.floor((difference % (1000*60 *60*24)) / (1000*60*60));
    const minutes = Math.floor((difference % (1000*60*60)) / (1000*60));
    const seconds = Math.floor((difference % (1000*60)) / 1000); 
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    if(difference < 0){
        clearInterval(interval);
        document.getElementById("timer").innerText = "That event has started!"
    }
};

const interval = setInterval(updateCountdown , 1000);