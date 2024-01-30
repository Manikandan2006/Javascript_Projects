function myfunction() {
const hr = document.querySelectorAll(".hr")
const mn = document.querySelectorAll(".mn")
const sec= document.querySelectorAll(".se")
const time = new Date();
var  hour = time.getHours();
var  minute = time.getMinutes();
var  seconds = time.getSeconds();

if (hour > 12) {
    hour = hour - 12;
}
else if (hour == 12) {
    hour = 0;
}


hour = hour < 10 ? '0'+hour : hour ;

minute = minute < 10 ? '0'+minute : minute  ;

seconds= seconds < 10 ? '0'+seconds : seconds ;

//console.log(hour + " " + minute + " " + seconds);

hour = hour.toString();
minute = minute.toString();
seconds= seconds.toString();


hr[0].innerHTML = hour[0];
hr[1].innerHTML = hour[1];
mn[0].innerHTML = minute[0];
mn[1].innerHTML = minute[1];
sec[0].innerHTML = seconds[0];
sec[1].innerHTML = seconds[1];


}


setInterval(myfunction,1000)


var times = new Date();
var date = times.getDate();
var month = times.getMonth();
var year = times.getFullYear();



if(month < (month+1)) {
    month = month+1;
}

date  = date < 10 ? "0" + date : date ;
month = month < 10 ? "0"+ month : month ;

const updateDAte = (date + "-" + month +"-" + year);
//console.log(updateDAte);
newDAte = document.querySelector(".date");
newDAte.innerHTML = updateDAte;


var weekday = times.getDay();
console.log(weekday);

switch(weekday)
{
    case 1:
        document.getElementById("one").style.color = "orange";
        break;
    case 2:
        document.getElementById("two").style.color = "orange";
        break;
    case 3:
        document.getElementById("three").style.color = "orange";
        break;
    case 4:
        document.getElementById("four").style.color = "orange";
        break;
    case 5:
        document.getElementById("five").style.color = "orange";
        break;
    case 6:
        document.getElementById("six").style.color = "orange";
        break;
    case 7:
        document.getElementById("seven").style.color = "orange";
        break;

}

var getMonth = times.getMonth();
console.log(getMonth);

switch(getMonth) {
    case 0:
        document.getElementById("o1").style.color = "orange";
        break;
    case 1:
        document.getElementById("o2").style.color = "orange";
        break;
    case 2:
        document.getElementById("o3").style.color = "orange";
        break;
    case 3:
        document.getElementById("o4").style.color = "orange";
        break;
    case 4:
        document.getElementById("o5").style.color = "orange";
        break;
    case 5:
        document.getElementById("o6").style.color = "orange";
        break;
    case 6:
        document.getElementById("o7").style.color = "orange";
        break;
    case 7:
        document.getElementById("o8").style.color = "orange";
        break;
    case 8:
        document.getElementById("o9").style.color = "orange";
        break;
    case 9:
        document.getElementById("o10").style.color = "orange";
        break;
    case 10:
        document.getElementById("o11").style.color = "orange";
        break;
    case 11:
        document.getElementById("o12").style.color = "orange";
        break;

}