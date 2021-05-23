var count1 = 0;
var count2 = 0;
var count3 = 0;
var countElement1 = document.querySelector("#likes1");
var countElement2 = document.querySelector("#likes2");
var countElement3 = document.querySelector("#likes3");

function liked1 () {
    count1++;
    countElement1.innerText = count1 + " like(s)";
}
function liked2 () {
    count2++;
    countElement2.innerText = count2 + " like(s)";
}
function liked3 () {
    count3++;
    countElement3.innerText = count3 + " like(s)";
}