document.getElementById("themchange").addEventListener("click", function(event){
    document.body.style.backgroundColor = getRandomHexColor();
})

// go to discover
document.getElementById("btn-discover").addEventListener("click", function (event) {
    event.preventDefault();

    window.location.href = "./blog.html"
})
getDate()

// initial count
let massage = 0;
let assignCount = 6;
let navCount = 23;
document.getElementById("btn-count").innerText = navCount;
document.getElementById("taskAssign").innerText = assignCount;


const allButtons = document.querySelectorAll(".completed");

for (let btn of allButtons) {
    btn.addEventListener("click", function (event) {
        alert('Board Updated successfully')


        assignCount--;
        navCount++;
        document.getElementById("btn-count").innerText = navCount;

        document.getElementById("taskAssign").innerText = assignCount;
        const time = updateTime();
        let title = btn.parentElement.parentElement.querySelector(".card-title").innerText;
        const historyContainer = document.getElementById("history")
        const div = document.createElement("div");
        div.innerHTML = `
<h1> You have completed the task ${title} ${time} </h1>
`
        historyContainer.appendChild(div)

        btn.setAttribute("disabled", "true")
        if (massage === assignCount) {
            alert('Congrats!!! You have completed all the current tasks.')
        }
    })
}





document.getElementById("clearHistory").addEventListener("click", function (event) {
    clearHistory();
    event.preventDefault
})

