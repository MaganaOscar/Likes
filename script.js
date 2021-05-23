var count = 0;
var countElement = document.querySelector("#likes");

function liked () {
    count++;
    countElement.innerText = count.toString() + " like(s)";
}