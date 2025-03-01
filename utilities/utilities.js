
function backDesk(){
// back btn
document.getElementById("btn-back").addEventListener("click", function(event){
    event.preventDefault();

window.location.href = "./index.html"
})

}
backDesk()
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

