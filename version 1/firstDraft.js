
// const colorsS = [];
// const numbersS = [];
// const fortunesS = [];
// const colors = ["Blue", "Pink", "Red", "Orange", "Green", "Yellow", "Brown", "Black", "Purple", "White"];
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// const fortunes = ["your dreams will come true", "happy news is on its way", "your intelligence is a virtue", "beauty surrounds you", "luck will follow you today", "an A+ is coming your way", "you will recieve acknowledgment for your hard work", "adventure is coming your way", "things are looking up", "expect riches in the near future", "sucess is following you this week", " you will feel the love today", "you will live a long life"];
// var counting
// var count = 0;



button1.addEventListener('click', () => {
    //console.log("here")
      counting = 0;
      const checkboxesElement1 = document.querySelector('#checkboxes1');
      const checkboxes1 = checkboxesElement1.querySelectorAll('input');
  
      const checkboxesElement2 = document.querySelector('#checkboxes2');
      const checkboxes2 = checkboxesElement2.querySelectorAll('input');
  
      const checkboxesElement3 = document.querySelector('#checkboxes3');
      const checkboxes3 = checkboxesElement3.querySelectorAll('input');
  
  
      for (const checkbox of checkboxes1) 
      {
        if (checkbox.checked == true)
        {
          //colorsS
          colorsS[counting] = colors[count]
         // console.log(colorsS[counting])
          counting++;
        }
        count++;
      }
  
      counting = 0
      count = 0
  
  
      for (const checkbox of checkboxes2) 
      {
        if (checkbox.checked == true)
        {
          //colorsS
          numbersS[counting] = numbers[count]
          //console.log(numbersS[counting])
          counting++;
         // console.log("whats up")
        }
        count++;
      }
  
      counting = 0
      count = 0
  
  
      for (const checkbox of checkboxes3) 
      {
        if (checkbox.checked == true)
        {
          //colorsS
          fortunesS[counting] = fortunes[count]
         // console.log("hello")
          counting++;
        }
        count++;
      }
  
  
  window.location.href = "colors.html";
  });
  
  //i think i need to create 2 more arrays for the numbers.. one even and one odd 
  //could do this with a four loop and if the counter is divisble by two it goes to the even array otherwise it goes to the odd one
  
  const s1 = document.querySelector('#square1');
  const s2 = document.querySelector('#square2');
  const s3 = document.querySelector('#square3');
  const s4 = document.querySelector('#square4');
  
  
  s1.style.backgroundColor = colorsS[0]; 
  s2.style.backgroundColor = colorsS[1];
  s3.style.backgroundColor = colorsS[2];  
  s4.style.backgroundColor = colorsS[3]; 
  
  
  const letters = 
  
  
  s1.addEventListener('click', () => {
  
    //setting letters = backgroundColor.length or length of the string in colorsS array
    //determine whether letters is even or odd, if its even, fill the next screen with the even numbers array and same if its odd
    //this is the same for all of the square event listeners
  });
  
  s2.addEventListener('click', () => {
  });
  
  s3.addEventListener('click', () => {
  });
  
  s4.addEventListener('click', () => {
  });
  
  
  //once the user has selected a number from the next page we must determine if it is even or odd
  //if the number is even, the same numbers will be displayed
  // if the number is odd, the other array will be displayed
  
  //once the user selects their final number, that corrisponding fortune from the fortunes array will be displayed on the page
  //a button that takes the user back to the index.html page will also be displayed