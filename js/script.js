// go to discover
document.getElementById("btn-discover").addEventListener("click", function(event){
    event.preventDefault();

window.location.href = "./blog.html"
})
getDate()

// initial count
let assignCount = 6;
document.getElementById("taskAssign").innerText = assignCount;


const allButtons = document.querySelectorAll(".completed");

for(let btn of allButtons){
    btn.addEventListener("click", function(event){

console.log(event.target)
    })
}






