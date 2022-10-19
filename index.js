const start = document.querySelector('#startBtn');

const numbers_1 = document.querySelector('#num1');

const numbers = document.querySelector('#numOptions');
console.log("hello")

start.addEventListener('click', () => {
  window.location.href = "colors.html";

});



// num_2.addEventListener('click', () => {
//   var count = 0;
//   //using this so that the numbers values only change once
//   //and not again after the second number is chosen

//   headText.innerHTML = "Pick Another Number";

//       if (num_2.innerHTML == '7' || num_2.innerHTML == '5'){
//           for (const i of numbers){
//               i.innerHTML = evenN[count];
//                console.log("please let me be wrong")
//               count++;
//               //resetting the ids with the most recent number choice or else the fortunes will be for the previous number
//           }
//           onlyOnce = false;
//           count = 0;
//       }

//       else if (num_2.innerHTML % 3 == 0 || num_2.innerHTML == '1') {
//       //console.log("hello")
//           for (const i of numbers){
//               i.innerHTML = oddN[count];
//           // console.log(i.innerHTML)
//               count++;
//           }
//           onlyOnce = false;
//       }
//   console.log(onlyOnce)
//   num_1.addEventListener('click', () => {
//       //add a remove  event listener'
//       bigDiamond[0].style.display = "none";
//       console.log(num_1.innerHTML + "THIS IS 2")
//       headText.innerHTML = "YOUR FORTUNE IS..."; 
//       headText2.innerHTML = fortunes[num_1.innerHTML];
//        headText2.style.display = "flex";
//        reset.style.display = "flex";
//   });
  
//   console.log(num_2.innerHTML)
//   num_2.addEventListener('click', () => {
//       console.log(num_2.innerHTML)
//       bigDiamond[0].style.display = "none";
//       console.log(num_2.innerHTML + "THIS IS 7")
//       headText.innerHTML = "YOUR FORTUNE IS..."; 
//       headText2.innerHTML = fortunes[num_2.innerHTML];
//       headText2.style.display = "flex";
//       reset.style.display = "flex";
//   });

//   num_3.addEventListener('click', () => {
//       bigDiamond[0].style.display = "none";
//       headText.innerHTML = "YOUR FORTUNE IS..."; 
//       console.log(num_3.innerHTML + "THIS IS 5")
//       headText2.innerHTML = fortunes[num_3.innerHTML];
//       headText2.style.display = "flex";
//       reset.style.display = "flex";
//   });

//   num_4.addEventListener('click', () => {
//     console.log("4")
      
//       bigDiamond[0].style.display = "none";
//       headText.innerHTML = "YOUR FORTUNE IS..."; 
//       console.log(num_4.innerHTML + "THIS IS 6")
//       headText2.innerHTML = fortunes[num_4.innerHTML];
//       headText2.style.display = "flex";
//       reset.style.display = "flex";
//   });

// });