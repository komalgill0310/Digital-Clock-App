const day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const month = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];

setInterval(myTimer,1000);

function myTimer(){    
    let today = new Date();
    // var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
  
    if(today.getHours()>12){
        var time = today.getHours()-12 + ":" + m + ":" + s;
      }
      else{
        var time = today.getHours() + ":" + m + ":" + s;
      }
    document.getElementById("time").innerHTML = time;
    let date = day[today.getDay()] + ',' + month[today.getMonth()] + today.getDate() + " " + today.getFullYear();
    document.getElementById("date").innerHTML = date;
    m = leadingZero(m);
    s = leadingZero(s);
}

function leadingZero(i){
  if(i<10){
    i = "0" + i;
  }
  return i;
}

// var  today = new Date();
  // var m = today.getMinutes();
  // var s = today.getSeconds();

// function myTimer(){    
//   let today = new Date();
//   var h = today.getHours();
//   var m = today.getMinutes();
//   var s = today.getSeconds();

//   function pad(m,2){
//     m = today.getMinutes();
//     while(today.getMinutes()<10){
//       m = "0" + today.getMinutes();
//     }
//   }
      
//   function pad(h,size){
//     h = h.toString();
//     while(h.length<10){
//       h = "0" + today.getHours();
//     }
//   }

//   function pad(s,2){
//     s = today.getSeconds();
//     while(today.getSeconds()<10){
//       s = "0" + today.getSeconds();
//     }      
//   }

//   if(h>12){
//       // var time = today.getHours()-12 + ":" + today.getMinutes() + ":" + today.getSeconds();
//       var time = h-12 + ":" + m + ":" + s;
//     }
//     else{
//       // var time = today.getHours() + ":" + m + ":" + today.getSeconds();
//       var time = h + ":" + m + ":" + s;
//     }
//   document.getElementById("time").innerHTML = time;
//   let date = day[today.getDay()] + ',' + month[today.getMonth()] + today.getDate() + " " + today.getFullYear();
//   document.getElementById("date").innerHTML = date;

 
  
//   }

// function pad(m,size){
//   m = today.getMinutes();
//   while(today.getMinutes()<10)
//     m = "0" + today.getMinutes();
// }


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

// if(h<10




