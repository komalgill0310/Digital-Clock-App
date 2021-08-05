const day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const month = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];

setInterval(myTimer,1000);

function myTimer(){    
  let today = new Date();
  var h = today.getSeconds();
  // var m = today.getMinutes();
  // var s = today.getSeconds();
  if(h>12){
      var time = (today.getHours())-12 + ":" + today.getMinutes() + ":" + today.getSeconds();
    }
    else{
      var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    }
  // let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  document.getElementById("time").innerHTML = time;
  let date = day[today.getDay()] + ',' + month[today.getMonth()] + today.getDate() + " " + today.getFullYear();
  document.getElementById("date").innerHTML = date;
  }




// if(h>12){
  //   var time = (today.getHours())-12 + ":" + today.getMinutes() + ":" + today.getSeconds();
  // }
  // else{
  //   var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(); 
  // }
// let m = today.getMinutes();
// let s = today.getSeconds();

// if(h<10){
//     var time = "0" + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// }
// else{
//   var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// }

// if(m<10){
//    var time =  today.getHours() + ":0" + today.getMinutes() + ":" + today.getSeconds();
// }

// if(s<10){
//   var time =  (today.getHours()) + ":" + today.getMinutes() + ":0" + today.getSeconds();
// }



// else{
//   var time = (today.getHours()) + ":" + today.getMinutes() + ":" + today.getSeconds();
// }


// var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// while(h<10 | m<10 | s<10){
//   var time = "0" + (today.getHours()-12) + ":0" + today.getMinutes() + ":0" + today.getSeconds();
// }

// if(h<10|m<10|s<10){
//   var time = "0" + (today.getHours()-12) + ":" + today.getMinutes() + ":" + today.getSeconds();
// }

// if(h<10)


















