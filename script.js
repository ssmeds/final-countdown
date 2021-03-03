let todaysDateDisplay = document.createElement("div");
let todayH1 = document.createElement("h1");
todaysDateDisplay.id = "dateDisplay";
todayH1.textContent = "Todays date";

let endDateDisplay = document.createElement("div");
let endDateH2 = document.createElement("h2");
endDateDisplay.id = "endDateDisplay";
endDateH2.textContent = "Date when done";

let timeLeftDisplay = document.createElement("div");
let timeLeftH2 = document.createElement("h2");
timeLeftDisplay.id = "timeLeftDisplay";
timeLeftH2.textContent = "Time left until then";

document.body.appendChild(todayH1);
document.body.appendChild(todaysDateDisplay);
document.body.appendChild(endDateH2);
document.body.appendChild(endDateDisplay);
document.body.appendChild(timeLeftH2);
document.body.appendChild(timeLeftDisplay);

let endDate = new Date("Sept 23, 2022 17:00:00").getTime();
console.log(endDate);

setInterval(function showToday() {
  let today = new Date();
  let todaysDate = today.toLocaleDateString();
  let todaysTime = today.toLocaleTimeString();

  document.getElementById("dateDisplay").innerHTML = todaysDate + " " + todaysTime;

}, 1000);

endDateDisplay.textContent = "2022-09-23  17:00:00";

setInterval(function showCountDown() {
  let today = new Date();
  let timeToEnd = endDate - today;

  let days = Math.floor(timeToEnd / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeToEnd % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeToEnd % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeToEnd % (1000 * 60)) / 1000);

  timeLeftDisplay.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);


// The Final Countdown
// I denna övning skall du jämföra två olika datum, dagens datum med datumet för när utbildningen är slut. Du ska skriva ut en klocka som räknar ned dagar, timmar, minuter och sekunder till du är en examinerad utvecklare!

// Datumet och tid när utbildningen slutar och du tar examen sätter vi till 2022-09-23 klockan 17:00:00