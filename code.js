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

    var ordinalNumber =  today.getDate();

    if (today.getDate() == 1 | today.getDate() == 21 | today.getDate() == 31){
      ordinalNumber = today.getDate() + "st";
    }
    else if (today.getDate() == 2 | today.getDate() == 22)
    {
      ordinalNumber = today.getDate() + "nd";
    }
    else if (today.getDate() == 3 | today.getDate() == 23){
      ordinalNumber = today.getDate() + "rd";
    }
    else {
      ordinalNumber = today.getDate() + "th";
    }
    
    let date = day[today.getDay()] + ',' + month[today.getMonth()] + ordinalNumber + " " + today.getFullYear();
    document.getElementById("date").innerHTML = date;    
}


  