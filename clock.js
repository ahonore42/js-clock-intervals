console.log('hello')
//followed along with code along, will try to fix original code commented out in the bottom lines
const INTERVAL_DELAY = 1000
const SHOW_REAL_TIME = true
const RADIUS = 360

//time amounts
const SECONDS_IN_MINUTE = 60
const SECONDS_IN_HOUR = 60 * SECONDS_IN_MINUTE
const SECONDS_IN_12_HOURS = 12 * SECONDS_IN_HOUR

//current time in seconds
let time = 0

//DOM Elements
let second = document.getElementById('second')
let minute = document.getElementById('minute')
let hour = document.getElementById('hour')

//Tick function 
const tick = () => {
    console.log('tick', time)
    if (SHOW_REAL_TIME) {
        //get the actual time
        let now = new Date()

        //reset time to zero
        time = 0

        //add up the second in the current time
       
        time += now.getSeconds()
        time += now.getMinutes() * SECONDS_IN_MINUTE
        time += now.getHours() * SECONDS_IN_HOUR
        
    }
    else {
        time++
        time = time % SECONDS_IN_12_HOURS
    }
    rotateCLock()
}
//clock rotation calculations
const rotateCLock = () => {
    //rotate second hand
    second.style.transform = 'rotate('+ calcSeconds() + 'deg)'
    //rotate minute hand
    minute.style.transform = 'rotate('+ calcMinutes() + 'deg)'
    //rotate hour hand
    hour.style.transform = 'rotate('+ calcHours() + 'deg)'

}


const calcSeconds = () => {
    let percentage = (time % SECONDS_IN_MINUTE) / SECONDS_IN_MINUTE
    let degrees = percentage * RADIUS
    return Math.round(degrees)
}

const calcMinutes = () => {
    let percentage = (time % SECONDS_IN_HOUR) / SECONDS_IN_HOUR
    let degrees = percentage * RADIUS
    return Math.round(degrees)

}

const calcHours = () => {
    let percentage = (time % SECONDS_IN_12_HOURS) / SECONDS_IN_12_HOURS
    return Math.round(percentage * RADIUS) 

}
//set things in motion
document.addEventListener('DOMContentLoaded', () => {
    setInterval(tick, INTERVAL_DELAY)
})

// const secondHand = document.getElementById('second'); //grabbing elements by IDs, assigning to variables
// const minuteHand = document.getElementById('minute');
// const hourHand = document.getElementById('hour');
// const date = new Date();                //assigning current date
// const secondTime = date.getSeconds();   //getting values for seconds, minutes, hours
// const minuteTime = date.getMinutes(); 
// const hourTime = date.getHours();}

// const tickTock = () => {
// secondHand.style.transform = 'rotate('+ secondTime * 6 + 'deg)';      //assigning rotation degrees from current date values
// minuteHand.style.transform = 'rotate('+ minuteTime * 6 + 'deg)';
// hourHand.style.transform = 'rotate('+ hourTime * 30 + minuteTime/2 + 'deg)';
// }


// setInterval(tickTock, 1000);        //function interval set to 1 second
