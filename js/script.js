// DOM ELEMENTS
const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
const focus = document.getElementById('focus');


  //Show Time

  function showTime() {
  	// body...
  	let today = new Date(),
  	  hour = today.getHours(),
  	  min  = today.getMinutes(),
  	  sec  = today.getSeconds();

  	// Set AM or PM
  	const amPm = hour >= 12 ? 'PM' : 'AM' ;

  	//12hr Format
      hour = hour % 12 || 12;

      //Output Time
      time.innerHTML =`${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}<span> </span>${amPm}`;
      
      setTimeout(showTime,1000); //1000ms = 1 sec, which is the interval, how many times you want the function to run

  }
// Add Zeros
function addZero(n) {
	return (parseInt(n,10) < 10 ? '0' : '') + n;
}

// Set Background and Greeting
function setBG() {
	let today = new Date(), 
	   hour = today.getHours();
    
    if (hour < 12) {
    	// Morning
    	
    	document.body.style.backgroundImage = "url('./img/morning.jpg')";
    	// document.body.style.color= '#FFD700';
      greeting.textContent = 'Good Morning,' ;	
    }

    else if (hour < 18) {
    	// Afternoon

       	document.body.style.backgroundImage = "url('./img/afternoon.jpg')";
        greeting.textContent = 'Good Afternoon,' ;

    }

    else {
    	//Evening  

    	document.body.style.backgroundImage = "url('./img/night.jpg')";

        greeting.textContent = 'Good Evening,' ;	

    }

}

//Get Name
function getName() {
   if (localStorage.getItem('name') === null) {
     name.textContent = '[Enter Name]' ; 
   }
   else {
    name.textContent = localStorage.getItem('name');
   }
 
} 


//Get Focus
  function getFocus() {
    if (localStorage.getItem('focus') === null) {
     focus.textContent = '[Enter Focus]' ; 
    }
    else {
    focus.textContent = localStorage.getItem('focus');
    }
 
} 


  //Run
  setBG();
  showTime();
  getName();
  getFocus();