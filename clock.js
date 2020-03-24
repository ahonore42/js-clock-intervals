console.log('hello')


const secondHand = document.getElementById('second'); //grabbing elements by IDs, assigning to variables
const minuteHand = document.getElementById('minute');
const hourHand = document.getElementById('hour');


const tickTock = () => {
const date = new Date();                //assigning current date
const secondTime = date.getSeconds();   //getting values for seconds, minutes, hours
const minuteTime = date.getMinutes(); 
const hourTime = date.getHours();

secondHand.style.transform = 'rotate('secondTime * 6 + 'deg)';      //assigning rotation degrees from current date values
minuteHand.style.transform = 'rotate('minuteTime * 6 + 'deg)';
hourHand.style.transform = 'rotate('hourTime * 30 + minuteTime/2 + 'deg)';
}


setInterval(tickTock, 1000);        //function interval set to 1 second
