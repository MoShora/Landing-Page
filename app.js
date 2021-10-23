
/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/* I was trying some code here to test the file
-------------------------------------------------------
    document.addEventListener('click', function() {
    const Pp = document.createElement('p');
    Pp.textContent = 'here i am am am am am am am am am am am am am am am';
    document.getElementsByTagName('body')[0].appendChild(Pp);
}); */




/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const secTion = document.getElementsByTagName('section');           // select all sections

for( var i = 0; i < secTion.length; i++ ) {                         // loop number of times as number of sections exsist
    
    const liElement = document.createElement('li');                 // create node of a list
    const aElement = document.createElement('a');                   // create an anchor element
    aElement.textContent = 'Section ' + (i+1) ;                       // set the anchor's visible name
    aElement.setAttribute('href','#section'+ (i+1));                // set the anchor link value "destenation"
    
    liElement.appendChild(aElement);                                // include the anchor element inside the li node
    document.getElementById('navbar__list').appendChild(liElement); // include the node element inside the unordered list  
}






// Add class 'active' to section when near top of viewport


 /*   one try to do the "avtive to section" requirment
-------------------------------------------------------------------
    document.addEventListener('scroll' , function () {
    const position = window.scrollY;
    console.log(position);


    if (position > 0 && position < 600) 
    secTion[0].setAttribute ('class' , 'your-active-class')
    else
    secTion[0].removeAttribute ('class')

    if (position > 600 && position < 1300) 
    secTion[1].setAttribute ('class' , 'your-active-class')
    else
    secTion[1].removeAttribute ('class')

    if (position > 1300 && position < 2000)
    secTion[2].setAttribute ('class' , 'your-active-class')
    else
    secTion[2].removeAttribute ('class')

    if (position > 2000 && position < 2650)
    secTion[3].setAttribute ('class' , 'your-active-class')
    else
    secTion[3].removeAttribute ('class')
    
}) */

const section = document.querySelectorAll('section');   

section.forEach( function(section) {         

document.addEventListener('scroll' , function () {   

    const position = section.getBoundingClientRect();     

    if (position.top > -250 && position.top < 250  )                      
    section.setAttribute ('class' , 'your-active-class')
    else
    section.removeAttribute ('class')

})

})


// Scroll to anchor ID using scrollTO event

const anchor = [...document.getElementsByTagName('a')];                               // select all <a> elements store them in array
//console.log(anchor);

anchor.forEach( function(anchor) {                                                   // loop over anchors <a>

    anchor.addEventListener('click' , function(evt) {                                // watch 'click' event on the anchor

       evt.preventDefault();                                                         // stop the defualt action of the anchor when clicked
       document.querySelector(this.getAttribute('href')).scrollIntoView({            
        behavior: 'smooth'              // select the section of the current anchor and call the scroll method to make a smooth scroll to the section

       });
    });
});

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
