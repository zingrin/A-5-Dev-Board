
function backDesk(){
// back btn
document.getElementById("btn-back").addEventListener("click", function(event){
    event.preventDefault();

window.location.href = "./index.html"
})

}
backDesk()
function getRandomHexColor() {
    let hex = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
    return hex;
}


function getDate(){
const date = new Date();

const shortDay = date.toLocaleString("en-US", { weekday: "short" }); 
const shortMonth = date.toLocaleString("en-US", { month: "short" })
const day = date.getDate(); 
const year = date.getFullYear(); 

document.getElementById("day").innerText = shortDay;
document.getElementById("fullDate").innerText =` 
 ${shortMonth} ${day}, ${year}
`
}

function updateTime() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    let timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
return timeString;
}

updateTime();




function clearHistory(){
    const historyContainer = document.getElementById("history")
historyContainer.innerHTML = ""
}
