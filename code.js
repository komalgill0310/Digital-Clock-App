const day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const month = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];

setInterval(myTimer,1000);

    function leadingZero(i){
      if(i<10){
        i = "0" + i;
      }
    return i;
  }
    
function myTimer(){    
    var today = new Date();  
    var hours = leadingZero(today.getHours());
    var minutes = leadingZero(today.getMinutes());
    var seconds = leadingZero(today.getSeconds());  
    if(today.getHours()>12){
        var time = hours-12 + ":" + minutes + ":" + seconds;
      }
      else{
        var time = hours + ":" + minutes + ":" + seconds;
      }
    document.getElementById("time").innerHTML = time;
    let date = day[today.getDay()] + ',' + month[today.getMonth()] + today.getDate() + " " + today.getFullYear();
    document.getElementById("date").innerHTML = date;  
}

  