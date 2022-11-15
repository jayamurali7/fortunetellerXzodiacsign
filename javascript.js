const timeElement = document.querySelector(".time");
const dateElement = document.querySelector(".date");

/**
 * @param {Date} date
 */
function formatTime(date) {
  const hours12 = date.getHours() % 12 || 12;
  const minutes = date.getMinutes();
  const isAm = date.getHours() < 12;

  return `${hours12.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")} ${isAm ? "AM" : "PM"}`;
}


function formatDate(date) {
  const DAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  return `${DAYS[date.getDay()]}, ${
    MONTHS[date.getMonth()]
  } ${date.getDate()} ${date.getFullYear()}`;
}

setInterval(() => {
  const now = new Date();

  timeElement.textContent = formatTime(now);
  dateElement.textContent = formatDate(now);
}, 200);



let message1 =    "Stop eating the paper"
let message2 =    "2023 gonna be yours"
let message3 =    "Do the thing you fear, and the death of fear is certain"
let message4 =    "Happy life is just in front of you"
let message5 =    "Somebody is staring at you"
let message6 =    "Your family is young, gifted and attractive"
let message7 =    "Take extra one cup of coffe or tea in this evening"
let message8 =    "Take two bananas to control your farting skill"
let message9 =    "Don't give up, you are almost close to that one billion'th second"
let message10 =    "you are the only useless in your family So start studying now"
let message11 =    "If you got them in dream in an upcoming week They are yours"
let message12 =    "slap the person forcefully who interrupt to you, Now"


   

let messageEl = document.getElementById("message-el")
console.log(messageEl)

function startButton1(){
      messageEl.textContent =  message1 
}
function startButton2(){
    messageEl.textContent =  message2
}
function startButton3(){
    messageEl.textContent =  message3
}
function startButton4(){
    messageEl.textContent =  message4
}
function startButton5(){
    messageEl.textContent =  message5
}
function startButton6(){
    messageEl.textContent =  message6 
}
function startButton7(){
    messageEl.textContent =  message7
}
function startButton8(){
    messageEl.textContent =  message8 
}
function startButton9(){
    messageEl.textContent =  message9
}
function startButton10(){
    messageEl.textContent =  message10
}
function startButton11(){
    messageEl.textContent =  message11
}
function startButton12(){
    messageEl.textContent =    message12 
}



