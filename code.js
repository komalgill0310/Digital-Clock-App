const day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const month = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];

var today = new Date();

setInterval(myTimer,1000);

function myTimer(){    
  document.getElementById("time").innerHTML = time;  
}

var time = (today.getHours()-12) + ":" + today.getMinutes() + ":" + today.getSeconds(); 
document.getElementById("time").innerHTML = time;

var date = day[today.getDay()] + ',' + month[today.getMonth()] + today.getDate() + " " + today.getFullYear();
document.getElementById("date").innerHTML = date;

















