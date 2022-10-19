const square_1 = document.querySelector('#square1');
const square_2 = document.querySelector('#square2');
const square_3 = document.querySelector('#square3');
const square_4 = document.querySelector('#square4');

var num_1 = document.getElementById('num1');
var num_2 = document.getElementById('num2');
var num_3 = document.getElementById('num3');
var num_4 = document.getElementById('num4');

const reset = document.querySelector('#restart');

const bigSquare = document.getElementsByClassName('colorOptions');
const headText = document.getElementById('head1');
const headText2 = document.getElementById('head2');
const bigDiamond = document.getElementsByClassName('numOptions');
const numbers = document.getElementsByClassName('sNum');

const evenN = [1, 3, 4, 8];
const oddN = [2, 7, 5, 6];


const fortunes = ["", "happy news is on its way", "your intelligence is a virtue", "beauty surrounds you", "luck will follow you today", "an A+ is coming your way", "you will recieve acknowledgment for your hard work", "adventure is coming your way", "your dreams will come true"];
// "things are looking up", "expect riches in the near future", "sucess is following you this week", " you will feel the love today", "you will live a long life"];

//5 is giving

square_4.addEventListener('mouseenter', (event) => {
   // console.log("hi");
    headText.innerHTML = "Pick A Color";
   // console.log("hi");
    square_1.style.backgroundColor = "red"
    square_2.style.backgroundColor = "#5ab5d6"
    square_3.style.backgroundColor = "#8affab"
    square_4.style.backgroundColor = "#9742ff"
 });

square_1.addEventListener('click', () => {
    // red
    square_1.style.display = "none"
    square_2.style.display = "none"
    square_3.style.display = "none"
    square_4.style.display = "none"
    headText.innerHTML = "Pick A Number";

    bigDiamond[0].style.visibility = "visible";

 
    var count = 0;
        for (const i of numbers){
            i.innerHTML = oddN[count];
          //  console.log(count)
            count++;
        }
    });

square_2.addEventListener('click', () => {
    // blue
    square_1.style.display = "none"
    square_2.style.display = "none"
    square_3.style.display = "none"
    square_4.style.display = "none"
    headText.innerHTML = "Pick A Number";

    bigDiamond[0].style.visibility = "visible";

    var count = 0;
    for (const i of numbers){
        i.innerHTML = evenN[count];
      //  console.log(count)
        count++;
    }
});

square_3.addEventListener('click', () => {
    // green
    square_1.style.display = "none"
    square_2.style.display = "none"
    square_3.style.display = "none"
    square_4.style.display = "none"
    headText.innerHTML = "Pick A Number"; 

    bigDiamond[0].style.visibility = "visible";
    var count = 0;
        for (const i of numbers){
            i.innerHTML = oddN[count];
          //  console.log(count)
            count++;
        }
});

square_4.addEventListener('click', () => {
    // purple
    square_1.style.display = "none"
    square_2.style.display = "none"
    square_3.style.display = "none"
    square_4.style.display = "none"
    headText.innerHTML = "Pick A Number";
    bigDiamond[0].style.visibility = "visible";

    var count = 0;
    for (const i of numbers){
        i.innerHTML = evenN[count];
        //console.log(count)
        count++;
    }
});


//if its in the even array and they pick an even number, it stays the same
//if its in the odd array and they pick an even number, it stays the same
//if its in the even array and they pick an odd number, it changes to odd
//if its in the odd array and they pick an odd number, it changes to even


function numSelect1() {
    console.log("here somehow 1")
    var count = 0;
    console.log("hello")
    headText.innerHTML = "Pick Another Number";
    //console.log(num_1.innerHTML)
    if (num_1.innerHTML == '7' || num_1.innerHTML == '5'){
        for (const i of numbers){
            i.innerHTML = evenN[count];
            //console.log(count + "hi")
            count++;
        }
        count = 0;
    }
    else if (num_1.innerHTML % 3 == 0 || num_1.innerHTML == '1'){
        for (const i of numbers){
            i.innerHTML = oddN[count];
           // console.log(count)
            count++;
        }
    }

    num_2.removeEventListener('click', numSelect2)
    num_3.removeEventListener('click', numSelect3)
    num_4.removeEventListener('click', numSelect4)
    num_1.removeEventListener('click', numSelect1)

    num_1.addEventListener('click', () => {
        bigDiamond[0].style.display = "none";
        headText.innerHTML = "YOUR FORTUNE IS..."; 
        console.log(num_1.innerHTML);
        headText2.innerHTML = fortunes[num_1.innerHTML];
        headText2.style.display = "flex";
        reset.style.display = "flex";
    });

    num_2.addEventListener('click', () => {
        bigDiamond[0].style.display = "none";
        headText.innerHTML = "YOUR FORTUNE IS..."; 
        console.log(num_2.innerHTML)
        headText2.innerHTML = fortunes[num_2.innerHTML];
        headText2.style.display = "flex";
         reset.style.display = "flex";
    });

    num_3.addEventListener('click', () => {
        bigDiamond[0].style.display = "none";
        headText.innerHTML = "YOUR FORTUNE IS..."; 
        console.log(num_3.innerHTML)
        headText2.innerHTML = fortunes[num_3.innerHTML];
        headText2.style.display = "flex";
        reset.style.display = "flex";
    });

    num_4.addEventListener('click', () => {
        bigDiamond[0].style.display = "none";
        headText.innerHTML = "YOUR FORTUNE IS..."; 
        console.log(num_4.innerHTML)
        headText2.innerHTML = fortunes[num_4.innerHTML];
        headText2.style.display = "flex";
        reset.style.display = "flex";
    });
}


num_1.addEventListener('click', numSelect1);


function numSelect2() {
    console.log("hello")
    var count = 0;
    headText.innerHTML = "Pick Another Number";
    
    // console.log(num.innerHTML)
    if (num_2.innerHTML == '7' || num_2.innerHTML == '5'){
        console.log("hi")
        for (const i of numbers){
            i.innerHTML = evenN[count];
            //console.log(count)
            count++;
        }
        count = 0;
    }
    
    else if (num_2.innerHTML % 3 == 0 || num_2.innerHTML == '1') {
        console.log("sup")
        for (const i of numbers){
            i.innerHTML = oddN[count];
          //  console.log(count)
            count++;
        }
    }
    //using this so that the numbers values only change once
    //and not again after the second number is chosen
    num_2.removeEventListener('click', numSelect2)
    num_3.removeEventListener('click', numSelect3)
    num_4.removeEventListener('click', numSelect4)
    num_1.removeEventListener('click', numSelect1)

    num_1.addEventListener('click', () => {
        //add a remove  event listener'
        bigDiamond[0].style.display = "none";
        console.log(num_1.innerHTML)
        headText.innerHTML = "YOUR FORTUNE IS..."; 
        headText2.innerHTML = fortunes[num_1.innerHTML];
         headText2.style.display = "flex";
         reset.style.display = "flex";
    });
    
    console.log(num_2.innerHTML)
    num_2.addEventListener('click', () => {
        console.log("here we are")
        bigDiamond[0].style.display = "none";
        console.log(num_2.innerHTML)
        headText.innerHTML = "YOUR FORTUNE IS..."; 
        headText2.innerHTML = fortunes[num_2.innerHTML];
        headText2.style.display = "flex";
        reset.style.display = "flex";
    });

    num_3.addEventListener('click', () => {
        bigDiamond[0].style.display = "none";
        headText.innerHTML = "YOUR FORTUNE IS..."; 
        console.log(num_3.innerHTML)
        headText2.innerHTML = fortunes[num_3.innerHTML];
        headText2.style.display = "flex";
        reset.style.display = "flex";
    });

    num_4.addEventListener('click', () => {
      console.log("4")
        
        bigDiamond[0].style.display = "none";
        headText.innerHTML = "YOUR FORTUNE IS..."; 
        console.log(num_4.innerHTML)
        headText2.innerHTML = fortunes[num_4.innerHTML];
        headText2.style.display = "flex";
        reset.style.display = "flex";
    });
}

//make this into a function that the event listener calls
num_2.addEventListener('click', numSelect2);




function numSelect3() {
    var count = 0;
    headText.innerHTML = "Pick Another Number";
    console.log("here somehow 3")
    if (num_3.innerHTML == '7' || num_3.innerHTML == '5'){
        console.log("hi")
        for (const i of numbers){
            i.innerHTML = evenN[count];
            //console.log(count)
            count++;
        }
        count = 0;
    }
    else if (num_3.innerHTML % 3 == 0 || num_3.innerHTML == '1') {
        for (const i of numbers){
            i.innerHTML = oddN[count];
          //  console.log(count)
            count++;
        }
    }
    num_2.removeEventListener('click', numSelect2)
    num_3.removeEventListener('click', numSelect3)
    num_4.removeEventListener('click', numSelect4)
    num_1.removeEventListener('click', numSelect1)

    //console.log("HELLO THERE PEOPLE")
    num_1.addEventListener('click', () => {
        console.log("1")
        bigDiamond[0].style.display = "none";
        headText.innerHTML = "YOUR FORTUNE IS..."; 
        console.log(num_1.innerHTML)
        headText2.innerHTML = fortunes[num_1.innerHTML];
        headText2.style.display = "flex";
        reset.style.display = "flex";
    });

    num_2.addEventListener('click', () => {
        console.log("2")
        bigDiamond[0].style.display = "none";
        console.log(num_2.innerHTML)
        headText.innerHTML = "YOUR FORTUNE IS..."; 
        headText2.innerHTML = fortunes[num_2.innerHTML];
        headText2.style.display = "flex";
        reset.style.display = "flex";
    });

    num_3.addEventListener('click', () => {
        console.log("3")
        bigDiamond[0].style.display = "none";
        console.log(num_3.innerHTML)
        headText.innerHTML = "YOUR FORTUNE IS..."; 
        headText2.innerHTML = fortunes[num_3.innerHTML];
        headText2.style.display = "flex";
        reset.style.display = "flex";
    });

    num_4.addEventListener('click', () => {
        console.log("4")
        bigDiamond[0].style.display = "none";
        console.log(num_4.innerHTML)
        headText.innerHTML = "YOUR FORTUNE IS..."; 
        headText2.innerHTML = fortunes[num_4.innerHTML];
        headText2.style.display = "flex";
        reset.style.display = "flex";
    });

}

num_3.addEventListener('click', numSelect3);
   

function numSelect4() {
    console.log("here somehow 4")
    var count = 0;
    headText.innerHTML = "Pick Another Number";
    if (num_4.innerHTML == '7' || num_4.innerHTML == '5'){
        for (const i of numbers){
            i.innerHTML = evenN[count];
          //  console.log(count)
            count++;
        }
        count = 0;
    }
   
    else if (num_4.innerHTML % 3 == 0 || num_4.innerHTML == '1'){
        for (const i of numbers){
            i.innerHTML = oddN[count];
          //  console.log(count)
            count++;
        }
    }

    num_2.removeEventListener('click', numSelect2)
    num_3.removeEventListener('click', numSelect3)
    num_4.removeEventListener('click', numSelect4)
    num_1.removeEventListener('click', numSelect1)

   // console.log("HELLO THERE PEOPLE")
    num_1.addEventListener('click', () => {
       // console.log("HELLO THERE PEOPLE")
        bigDiamond[0].style.display = "none";
        headText.innerHTML = "YOUR FORTUNE IS..."; 
        console.log(num_1.innerHTML)
        headText2.innerHTML = fortunes[num_1.innerHTML];
        headText2.style.display = "flex";
        reset.style.display = "flex";
    });

    num_2.addEventListener('click', () => {
        bigDiamond[0].style.display = "none";
        headText.innerHTML = "YOUR FORTUNE IS..."; 
        console.log(num_2.innerHTML)
        headText2.innerHTML = fortunes[num_2.innerHTML];
        headText2.style.display = "flex";
        reset.style.display = "flex";
    });

    num_3.addEventListener('click', () => {
        bigDiamond[0].style.display = "none";
        headText.innerHTML = "YOUR FORTUNE IS..."; 
        console.log(num_3.innerHTML)
        headText2.innerHTML = fortunes[num_3.innerHTML];
        headText2.style.display = "flex";
        reset.style.display = "flex";
    });

    num_4.addEventListener('click', () => {
     
        bigDiamond[0].style.display = "none";
        headText.innerHTML = "YOUR FORTUNE IS..."; 
        console.log(num_4.innerHTML)
        headText2.innerHTML = fortunes[num_4.innerHTML];
        headText2.style.display = "flex";
        reset.style.display = "flex";
    });
}


num_4.addEventListener('click', numSelect4);



     
        
reset.addEventListener('click', () => {
    window.location.href = "index.html"
});